import React, { useState, useEffect, useRef } from 'react';
import '../styles/PrivateChat.css';

const PrivateChat = ({
                         currentUser,
                         recipientUser,
                         userColor,
                         stompClient,
                         onClose,
                         registerPrivateMessageHandler,
                         unregisterPrivateMessageHandler
                     }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef(null);
    const messageIdsRef = useRef(new Set());

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const createMessageId = (msg) => {
        return `${msg.sender}-${msg.recipient}-${msg.content}-${msg.timestamp}`;
    };

    const handleIncomingPrivateMessage = (privateMessage) => {
        const messageId = privateMessage.id || createMessageId(privateMessage);
        const isOwnMessage = privateMessage.sender === currentUser;

        const isRelevantMessage =
            (privateMessage.sender === currentUser && privateMessage.recipient === recipientUser) ||
            (privateMessage.sender === recipientUser && privateMessage.recipient === currentUser);

        if (isRelevantMessage && !isOwnMessage) {
            if (!messageIdsRef.current.has(messageId)) {
                const newMessage = {
                    ...privateMessage,
                    id: messageId
                };

                messageIdsRef.current.add(messageId);
                setMessages(prev => [...prev, newMessage]);
            }
        }
    };

    useEffect(() => {
        let isMounted = true;

        const loadMessageHistory = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/messages/private?user1=${currentUser}&user2=${recipientUser}`
                );
                if (response.ok && isMounted) {
                    const history = await response.json();
                    const processedHistory = history.map(msg => {
                        const messageId = msg.id || createMessageId(msg);
                        return {
                            ...msg,
                            id: messageId
                        };
                    });

                    messageIdsRef.current.clear();
                    processedHistory.forEach(msg => {
                        messageIdsRef.current.add(msg.id);
                    });

                    setMessages(processedHistory);
                }
            } catch (error) {
                console.error('Error loading message history:', error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadMessageHistory();
        registerPrivateMessageHandler(recipientUser, handleIncomingPrivateMessage);

        return () => {
            isMounted = false;
            unregisterPrivateMessageHandler(recipientUser);
        };
    }, [currentUser, recipientUser, registerPrivateMessageHandler, unregisterPrivateMessageHandler]);

    const sendPrivateMessage = (e) => {
        e.preventDefault();

        if (message.trim() && stompClient.current && stompClient.current.connected) {
            const timestamp = new Date();
            const privateMessage = {
                sender: currentUser,
                recipient: recipientUser,
                content: message.trim(),
                type: 'PRIVATE_MESSAGE',
                color: userColor,
                timestamp: timestamp
            };

            const messageId = createMessageId(privateMessage);
            const messageWithId = {
                ...privateMessage,
                id: messageId
            };

            if (!messageIdsRef.current.has(messageId)) {
                messageIdsRef.current.add(messageId);
                setMessages(prev => [...prev, messageWithId]);
            }

            try {
                if (stompClient.current.connected) {
                    stompClient.current.send("/app/chat.sendPrivateMessage", {}, JSON.stringify(privateMessage));
                    setMessage('');
                } else {
                    setMessages(prev => prev.filter(msg => msg.id !== messageId));
                    messageIdsRef.current.delete(messageId);
                }
            } catch (error) {
                console.error('Error sending message:', error);
                setMessages(prev => prev.filter(msg => msg.id !== messageId));
                messageIdsRef.current.delete(messageId);
            }
        }
    };

    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (isLoading) {
        return (
            <div className="private-chat-window">
                <div className="private-chat-header">
                    <h3>💬 {recipientUser}</h3>
                    <button onClick={onClose} className="close-btn">✕</button>
                </div>
                <div className="loading">Loading messages...</div>
            </div>
        );
    }

    return (
        <div className="private-chat-window">
            <div className="private-chat-header">
                <div className="recipient-info">
                    <div className="recipient-avatar">
                        {recipientUser.charAt(0).toUpperCase()}
                    </div>
                    <h3>💬 {recipientUser}</h3>
                </div>
                <button onClick={onClose} className="close-btn">✕</button>
            </div>

            <div className="private-messages-container">
                {messages.length === 0 ? (
                    <div className="no-messages">
                        <p>No messages yet. Start the conversation!</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} className={`private-message ${msg.sender === currentUser ? 'own-message' : 'received-message'}`}>
                            <div className="message-header">
                                <span
                                    className="sender-name"
                                    style={{ color: msg.color || '#6B73FF' }}
                                >
                                    {msg.sender === currentUser ? 'You' : msg.sender}
                                </span>
                                <span className="timestamp">
                                    {formatTime(msg.timestamp)}
                                </span>
                            </div>
                            <div className="message-content">
                                {msg.content}
                            </div>
                        </div>
                    ))
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="private-message-input-container">
                <form onSubmit={sendPrivateMessage} className="private-message-form">
                    <input
                        type="text"
                        placeholder={`Message ${recipientUser}...`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="private-message-input"
                        maxLength={500}
                    />
                    <button
                        type="submit"
                        disabled={!message.trim()}
                        className="private-send-button"
                    >
                        📤
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PrivateChat;