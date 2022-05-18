import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
            <img
                src="https://e7.pngegg.com/pngimages/341/581/png-clipart-qq-music-music-qq-text-computer.png"
                alt=""
            />

            <a href={loginUrl}>Login with Melody Flow</a>
        </div>
    );
}

export default Login;
