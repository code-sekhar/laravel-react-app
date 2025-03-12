import React from "react";
import "./Sideber.css";
const Sideber = () => {
    return (
        <>
            <div className="sideber shadow card">
                <div className="side_ber_logo">
                    <span>
                        <h2>Sekhar</h2>
                    </span>
                </div>
                <div className="side_ber_inner_container">
                    <ul>
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Skill</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Sideber;
