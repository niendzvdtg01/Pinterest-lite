package com.gallery.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.dtorequests.UserCreation;
import com.gallery.backend.entity.Users;
import com.gallery.backend.respository.UsersRepository;
import com.gallery.backend.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "/test")
public class UserController {
    private final UserService userService;
    @Autowired
    private UsersRepository usersRepository;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/user")
    public @ResponseBody Iterable<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    @PostMapping(path = "/user")
    public Users createUser(@RequestBody UserCreation requests) {
        return userService.createUsers(requests);
    }
}