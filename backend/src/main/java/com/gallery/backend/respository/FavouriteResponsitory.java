package com.gallery.backend.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gallery.backend.dtorequests.FavouriteCreation;
import com.gallery.backend.entity.Favourite;

public interface FavouriteResponsitory extends JpaRepository<Favourite, Long> {
    @Query(value = """
            SELECT
                f.favourite_id AS favouriteId,
                f.photo_id AS photoId,
                f.unsplash_id AS unsplashId,
                COALESCE(p.url, u.url) AS imageUrl
            FROM favourite f
            LEFT JOIN photo p
                ON f.photo_id = p.photo_id
            LEFT JOIN unsplash_photo u
                ON f.unsplash_id = u.unsplash_id
            WHERE f.user_id = :userId
            """, nativeQuery = true)
    List<FavouriteCreation> findFavouriteImages(@Param("userId") Integer userId);
}
