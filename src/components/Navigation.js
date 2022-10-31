import React from "react";

function Navigation({onRouteChange}){
    return (
        <nav className="center bg-blue" style={{display: 'flex'}}>
            <p className="f5 link dim white underline pa3 pointer">Home</p>
            <p className="f5 link dim white underline pa3 pointer">About</p>
            <p className="f5 link dim white underline pa3 pointer">Events</p>
            <p className="f5 link dim white underline pa3 pointer">Contact</p>
            <p className="f5 link dim white underline pa3 pointer">Chatroom</p>
            <p onClick={() => onRouteChange('signin')} className="f5 link dim white underline pa3 pointer">Sign Out</p>
        </nav>
    );
}

export default Navigation;