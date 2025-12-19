package com.gallery.backend.services;

import org.springframework.stereotype.Service;

import com.gallery.backend.dtorequests.PhotoCreation;
import com.gallery.backend.entity.Photo;
import com.gallery.backend.respository.PhotoResponsitory;

@Service
public class PhotoService {
    private final PhotoResponsitory photoResponsitory;

    public PhotoService(PhotoResponsitory photoResponsitory) {
        this.photoResponsitory = photoResponsitory;
    }

    public Photo savePhoto(PhotoCreation requests) {
        Photo photo = new Photo();
        photo.setImgUrl(requests.getImageUrl());
        photo.setTitle(requests.getTitle());
        photo.setDescriptions(requests.getDescriptions());
        photoResponsitory.save(photo);
        return photo;
    }
}
