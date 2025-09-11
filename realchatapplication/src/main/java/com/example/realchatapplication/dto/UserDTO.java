package com.example.realchatapplication.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class UserDTO {

    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, name = "is_online")
    private boolean isOnline;

}
