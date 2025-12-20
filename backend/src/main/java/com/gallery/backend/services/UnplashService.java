package com.gallery.backend.services;

import java.util.List;
import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.gallery.backend.Properties.UnplashProperties;
import com.gallery.backend.dtorequests.PhotoCreation;
import com.gallery.backend.dtorequests.UnsplashCreation.UnsplashCreation;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UnplashService {
    private final UnplashProperties props;

    private final RestTemplate restTemplate = new RestTemplate();

    private HttpHeaders headers() {
        HttpHeaders h = new HttpHeaders();
        h.set("Authorization", "Client-ID " + props.getAccessKey());
        return h;
    }

    public List<PhotoCreation> getPhoto() {
        String url = "https://api.unsplash.com/photos?per_page=20";

        HttpEntity<Void> entity = new HttpEntity<>(headers());
        UnsplashCreation[] res = restTemplate.exchange(url, HttpMethod.GET, entity, UnsplashCreation[].class).getBody();
        return Arrays.stream(res)
                .map(p -> new PhotoCreation(p.getUrls().getSmall(), p.getUser().getName(), p.getDescription()))
                .toList();
    }
}
