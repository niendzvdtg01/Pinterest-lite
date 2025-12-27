package com.gallery.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gallery.backend.dtorequests.UserCreation;
import com.gallery.backend.entity.Users;
import com.gallery.backend.respository.UsersRepository;

@Service
public class UserService {
    @Autowired
    private UsersRepository usersRepository;

    public Users createUsers(UserCreation requests) {
        Users user = new Users();
        user.setUsername(requests.getUsername());
        user.setEmail(requests.getEmail());
        user.setFirstname(requests.getFirstname());
        user.setLastname(requests.getLastname());
        user.setUserpassword(requests.getUserpassword());
        usersRepository.save(user);
        return user;
    }
}
