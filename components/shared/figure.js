import React from "react";

const Figure = props => (
    <figure className={props.style}>
        {props.title}
        {props.details}
        <img src={props.imgsource} />
        <figcaption>
            {props.captiontext}
            <a href={props.captionlink}>{props.captionlink_text}</a>
        </figcaption>
        {props.description}
        {props.aftertitle}
    </figure>
);
export default Figure;
