import React from "react";

function Logo({ width = '100px' }) {
    return (
        <img
            className="h-10 w-15"
            src="https://images.pexels.com/photos/19652440/pexels-photo-19652440/free-photo-of-logo.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Your Company"
        />
    )
}

export default Logo;
