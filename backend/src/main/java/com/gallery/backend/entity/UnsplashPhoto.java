package com.gallery.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "UnsplashPhto")
public class UnsplashPhoto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "unsplash_id")
    private String unsplashId;
    @Column(name = "unsplash_url")
    private String unsplashUrl;
    
}
