package com.gallery.backend.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gallery.backend.entity.Photo;

public interface PhotoResponsitory extends JpaRepository<Photo, Long> {

}
