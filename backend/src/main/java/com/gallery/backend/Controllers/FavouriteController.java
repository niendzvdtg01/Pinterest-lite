package com.gallery.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.dtorequests.FavouriteCreation;
import com.gallery.backend.entity.Favourite;
import com.gallery.backend.services.FavouriteService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "/favourite")
public class FavouriteController {
    private final FavouriteService favouriteService;

    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }

    @PostMapping(path = "/post")
    public Favourite getFavourite(@RequestBody FavouriteCreation requests) {
        return favouriteService.saveFavourite(requests);
    }

}
