import React from "react";

// Button component / Shared component
//-------------------------
// Props
//_________________________
// container_style : className du container du bouton
// link : url du lien
// style : className du lien
// icon : ref de l'icone Font Awesome
// content : teste à afficher sur le bouton
//-------------------------

const Button = props => (
    <div className={props.container_style}>
        <a href={props.link} className={props.style}>
            {props.icon}
            {props.content}
        </a>
    </div>
);

export default Button;
