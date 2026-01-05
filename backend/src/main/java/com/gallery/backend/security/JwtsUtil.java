package com.gallery.backend.security;

import java.util.Date;

import javax.crypto.SecretKey;

import com.gallery.backend.entity.Users;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JwtsUtil {
    private static final SecretKey SECRET_KEY = Jwts.SIG.HS512.key().build();
    private static final long EXPIRATION_TIME = 36000000;

    public static String generateToken(Users user) {
        return Jwts.builder()
                .subject(user.getUsername())
                .issuer("Niendz")
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET_KEY)
                .compact();
    }

    public static String extracUsername(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(SECRET_KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload();
        return claims.getSubject();
    }
}
