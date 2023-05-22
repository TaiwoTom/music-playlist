import React from "react";

const buttn = (
  <button type="button" className="btn bg-white my-3">
    Unavailable by Davido<span className="badge bg-white text-black ">+</span>
  </button>
);

function TrendingSongs() {
  function loadMusic() {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    xhr.open(
      "GET",
      "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv"
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "39b119d0famshc53a3940801a132p199611jsn6a98ea5839bd"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "spotify23.p.rapidapi.com");
  }

  return (
    <div className="trending-songs-box bg-secondary">
      <h5 className="bg-secondary text-center my-3">Trending songs</h5>
      {buttn}
      {buttn}
      {buttn}
      {buttn}
      {buttn}
      <button
        type="button"
        className="btn bg-warning m-auto"
        onClick={loadMusic}
      >
        View more
      </button>
    </div>
  );
}

export default TrendingSongs;
