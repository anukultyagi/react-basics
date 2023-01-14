import React from "react";
// import Demo from "./components/Demo";
// import Greeting from "./components/Greeting";
// import BasicCalc from "./components/BasicCalc";
import "./App.css";
import Card from "./components/Card";
import Sdata from "./components/Sdata";

const ncard = (val) => {
    return (
        <Card
            imgSrc={val.imgsrc}
            title={val.sname}
            link={val.links}

        />
    )

}
const App = () => {
    return (<>
        <h1 className="heading">Netflix Mini project</h1>
        <div className="cards">

            {Sdata.map(ncard)}

        </div>

    </>)
}

export default App;