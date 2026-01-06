package com.gallery.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.dtorequests.LoginRepos;
import com.gallery.backend.dtorequests.LoginRequest;
import com.gallery.backend.services.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(path = "/auth")
public class AthController {
    @Autowired
    private AuthService authService;

    @PostMapping(path = "/login")
    public ResponseEntity<LoginRepos> login(@RequestBody LoginRequest request) {
        return authService.login(request.getUsername(), request.getUserpassword())
                .map(token -> ResponseEntity.ok(new LoginRepos(token)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }
}
