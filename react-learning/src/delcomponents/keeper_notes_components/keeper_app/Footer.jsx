import React from "react";
const current_year = new Date().getFullYear();
export function Footer(){
    return <div>
        <footer>
            <p>Copy Rights {current_year}</p>
        </footer>
    </div>
}