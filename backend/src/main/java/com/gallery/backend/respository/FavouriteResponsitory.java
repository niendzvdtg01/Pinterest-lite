package com.gallery.backend.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gallery.backend.entity.Favourite;

public interface FavouriteResponsitory extends JpaRepository<Favourite, Long> {
    //
}
