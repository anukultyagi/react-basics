import React from "react";

const Greeting = () => {
    // let time = new Date().getHours()
    let time = 1
    let greeting = 'Good Morning'
    let greetingColor = {
        color: 'green'
    }
    if (time >= 1 && time <= 11) {
        greeting = 'Good Morning';
        greetingColor.color = 'green'
    } else if (time >= 12 && time <= 19) {
        greeting = 'Good Afternoon'
        greetingColor.color = 'red'
    } else {
        greeting = 'Good Night';
        greetingColor.color = 'black'
    }

    return (<>
        <h1 className="greeting">Namaste World, <span style={greetingColor}>{greeting}</span></h1>
    </>)
}
export default Greeting