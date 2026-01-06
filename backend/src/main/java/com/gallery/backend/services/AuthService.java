package com.gallery.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gallery.backend.respository.UsersRepository;
import com.gallery.backend.security.JwtsUtil;

@Service
public class AuthService {
    @Autowired
    private UsersRepository usersRepository;

    public Optional<String> login(String username, String rawPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return usersRepository.findByUsername(username)
                .filter(user -> encoder.matches(rawPassword, user.getUserpassword()))
                .map(user -> JwtsUtil.generateToken(user));
    }
}
