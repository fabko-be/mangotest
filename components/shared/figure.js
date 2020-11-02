import React from "react";

// Figure component / Shared component
//-------------------------
// Props
//_________________________
// style : className du container
// title : si titre au dessus
// details : si sous-titre au dessus
// imgsource : source de l'image
// captiontext : Text du caption (sous l'image)
// captionlink : url du lien dans le caption
// captionlink_text : text du lien
// description : si explication sous l'image
// aftertitle : si titre SOUS l'image
//-------------------------

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
