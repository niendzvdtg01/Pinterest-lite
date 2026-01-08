package com.gallery.backend.security;

import jakarta.servlet.http.Cookie;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException, java.io.IOException {
        Cookie[] cookies = request.getCookies();
        boolean hasCookie = false;
        String path = request.getRequestURI();
        if (path.startsWith("/auth/login") ||
                path.startsWith("/auth/register")) {
            filterChain.doFilter(request, response);
            return;
        }
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("access_cookie".equals(cookie.getName())) {
                    hasCookie = true;
                    break;
                }
            }
        }

        if (!hasCookie) {
            // Block request
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Missing required cookie");
            return;
        }
        filterChain.doFilter(request, response);
    }
}
