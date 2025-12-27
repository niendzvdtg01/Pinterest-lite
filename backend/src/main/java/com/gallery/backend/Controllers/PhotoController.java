package com.gallery.backend.Controllers;

import com.gallery.backend.services.UnplashService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gallery.backend.dtorequests.PhotoCreation;
import com.gallery.backend.services.CloudinaryService;
import com.gallery.backend.services.PhotoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping(path = "/photo")
public class PhotoController {

    private final UnplashService unplashService;
    private final PhotoService photoService;
    private final CloudinaryService cloudinaryService;

    public PhotoController(PhotoService photoService, CloudinaryService cloudinaryService,
            UnplashService unplashService) {
        this.photoService = photoService;
        this.cloudinaryService = cloudinaryService;
        this.unplashService = unplashService;
    }

    //
    @PostMapping(path = "/post")
    public ResponseEntity<?> uploadPhoto(@RequestParam("file") MultipartFile file, PhotoCreation requests) {
        try {
            requests.setImageUrl(cloudinaryService.uploadfile(file));
            photoService.savePhoto(requests);
            return ResponseEntity.ok("Upload thanh cong!!!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Upload that bai: " + e.getMessage());
        }
    }

    //
    @GetMapping("/image")
    public List<PhotoCreation> getImage(@RequestParam(required = false) String keyword) {
        if (keyword != null && !keyword.isBlank()) {
            return unplashService.searchPhoto(keyword);
        } else {
            return unplashService.getPhoto();
        }
    }
}