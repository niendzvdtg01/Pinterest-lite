package com.gallery.backend.services;

import org.springframework.stereotype.Service;

import com.gallery.backend.dtorequests.FavouriteCreation;
import com.gallery.backend.entity.Favourite;
import com.gallery.backend.entity.Photo;
import com.gallery.backend.entity.UnsplashPhoto;
import com.gallery.backend.entity.Users;
import com.gallery.backend.respository.FavouriteResponsitory;
import com.gallery.backend.respository.PhotoResponsitory;
import com.gallery.backend.respository.UnsplashPhtoResponsitory;
import com.gallery.backend.respository.UsersRepository;

@Service
public class FavouriteService {
    private final FavouriteResponsitory favouriteResponsitory;
    private final UsersRepository usersRepository;
    private final PhotoResponsitory photoResponsitory;
    private final UnsplashPhtoResponsitory unsplashPhtoResponsitory;

    public FavouriteService(FavouriteResponsitory favouriteResponsitory, UsersRepository usersRepository,
            PhotoResponsitory photoResponsitory, UnsplashPhtoResponsitory unsplashPhtoResponsitory) {
        this.favouriteResponsitory = favouriteResponsitory;
        this.usersRepository = usersRepository;
        this.photoResponsitory = photoResponsitory;
        this.unsplashPhtoResponsitory = unsplashPhtoResponsitory;
    }

    public Favourite saveFavourite(FavouriteCreation requests) {
        Favourite favourite = new Favourite();
        if (requests.getPhotoId() != null) {
            Photo photo = photoResponsitory.findById(requests.getPhotoId())
                    .orElseThrow(() -> new RuntimeException("Photo not found!!!"));
            favourite.setPhotoId(photo);
        } else if (requests.getUnsplashId() != null) {
            UnsplashPhoto unsplashPhoto = unsplashPhtoResponsitory.findById(requests.getUnsplashId())
                    .orElseThrow(() -> new RuntimeException("usn[lash photo not found!!!"));
            favourite.setUnsplashId(unsplashPhoto);
        } else {
            throw new RuntimeException("PhotoId and UnsplashId cannot both be null");
        }
        Users user = usersRepository.findById(requests.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found!!!"));
        favourite.setUserId(user);
        return favouriteResponsitory.save(favourite);
    }
}