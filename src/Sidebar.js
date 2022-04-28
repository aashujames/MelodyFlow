import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://e7.pngegg.com/pngimages/341/581/png-clipart-qq-music-music-qq-text-computer.png"
                alt=""
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
