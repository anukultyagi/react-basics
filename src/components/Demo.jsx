import React from "react";

const Demo = () => {
    let date = new Date().toLocaleDateString("en-GB");
    let time = new Date().toLocaleTimeString();
    return (<>
        <h1>Namaste World</h1>
        <p>My name is anukul Tyagi. I was born and brought up in Noida.</p>
        <ol>
            <li>Dark</li>
            <li>Wednesday</li>
            <li>Breaking Bad</li>
            <li>Avatar</li>
            <li>Avatar2</li>
        </ol>
        <p>Current date {date}</p>
        <p>Current Time {time}</p>
    </>)
}
export default Demo