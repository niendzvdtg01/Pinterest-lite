package com.gallery.backend.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gallery.backend.dtorequests.PhotoCreation;
import com.gallery.backend.services.CloudinaryService;
import com.gallery.backend.services.PhotoService;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping(path = "/photo")
public class PhotoController {
    private final PhotoService photoService;
    private final CloudinaryService cloudinaryService;

    public PhotoController(PhotoService photoService, CloudinaryService cloudinaryService) {
        this.photoService = photoService;
        this.cloudinaryService = cloudinaryService;
    }

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

}