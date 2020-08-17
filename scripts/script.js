"use strict";

const searchInput = document.getElementById("search__input");
const searchButton = document.getElementById("search__button");
const songContainer = document.getElementById("song__container");
const getLyricsButtons = document.getElementsByClassName("get-lyrics-buttons");

let previousSongId = "";

// Functionality after pressing a search key word
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  previousSongId = "";
  if (searchInput.value) {
    searchSong(searchInput.value);
  }
});

// Show or Hide the lyrics after clicking the Get lyrics button
songContainer.addEventListener("click", async (e) => {
  let songId = e.target.getAttribute("song-id");
  if (previousSongId) {
    document.getElementById(previousSongId).classList.add("d-none"); // Off the previously opened lyrics
  }
  document.getElementById(songId).classList.toggle("d-none");
  previousSongId = songId;
});
