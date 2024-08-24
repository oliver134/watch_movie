// ==UserScript==
// @name         Movie Redirect Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds an animated button to IMDb, TMDB, and Kinopoisk for redirecting with movie ID
// @author       Your Name
// @match           *://www.kinopoisk.ru/film/*
// @match           *://www.kinopoisk.ru/series/*
// @match           *://*.imdb.com/title/*
// @match           *://www.themoviedb.org/movie/*
// @match           *://www.themoviedb.org/tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the button element
    const button = document.createElement('div');
    button.textContent = 'Watch Movie';
    button.style.position = 'fixed';
    button.style.top = '60px';
    button.style.left = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#FF5733';
    button.style.color = '#fff';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '9999';
    button.style.transition = 'all 0.3s ease';
    button.style.opacity = '0.7';
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '14px';

    // Hover effect
    button.addEventListener('mouseover', function() {
        button.style.opacity = '1';
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', function() {
        button.style.opacity = '0.7';
        button.style.transform = 'scale(1)';
    });

    // Append the button to the body
    document.body.appendChild(button);

    // Extract the movie ID and set the redirect URL
    let movieId = '';
    let redirectUrl = 'https://oliver134.github.io/watch_movie/';

    if (window.location.hostname.includes('imdb.com')) {
        movieId = window.location.pathname.split('/')[2];
        redirectUrl += `?imdb=${movieId}`;
    } else if (window.location.hostname.includes('kinopoisk.ru')) {
        movieId = window.location.pathname.split('/')[2];
        redirectUrl += `?kp_id=${movieId}`;
    } else if (window.location.hostname.includes('themoviedb.org')) {
        movieId = window.location.pathname.split('/')[2].split('-')[0]; // Extract only the numeric part before the first '-'
        redirectUrl += `?tmdb=${movieId}`;
    }

// Redirect on click, open in a new window
    button.addEventListener('click', function() {
        window.open(redirectUrl, '_blank');
    });
})();
