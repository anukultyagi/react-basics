import React from "react";

const Card = (props) => {
    return (<>

        <div className="card">
            <img src={props.imgSrc} alt="card"></img>
            <div className="card_info">
                <span className="card_category">A Netflix Original Series</span>
                <h3 className="card_title">{props.cardTitle}</h3>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>

    </>)
}
export default Card