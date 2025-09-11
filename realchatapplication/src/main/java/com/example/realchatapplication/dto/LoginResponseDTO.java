package com.example.realchatapplication.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponseDTO {

    private String token;
    private UserDTO userDTO;
}
