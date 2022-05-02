import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        //getting the access token from url
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        //storing access token in a state variable.
        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token
            });

            spotify.setAccessToken(_token);

            //returns the promise to get the user info
            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists
                });
            });

            spotify.getPlaylist("37i9dQZEVXcGGSsxKyfAne").then((response) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response
                });
            });

            spotify.getMyCurrentPlaybackState().then(
                function (data) {
                    //Output items
                    if (data.body && data.body.is_playing) {
                        console.log("User is currently playing something!");
                    } else {
                        console.log(
                            "User is not playing anything, or doing so in private."
                        );
                    }
                },
                function (err) {
                    console.log("Something went wrong!", err);
                }
            );

            spotify.play().then(
                function () {
                    console.log("Playback started");
                },
                function (err) {
                    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
                    console.log("Something went wrong!", err);
                }
            );

            spotify.pause().then(
                function () {
                    console.log("Playback paused");
                },
                function (err) {
                    //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
                    console.log("Something went wrong!", err);
                }
            );
        }
    });

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
