import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import nykaaSm from "../../../Assets/img/Portfolio items/Nykaaman.PNG";
import nykaaLg from "../../../Assets/img/Portfolio items/Nykaaman.PNG";
// import pounamunuiSm from "../../../Assets/img/Portfolio items/youtube.png";
// import pounamunuiLg from "../../../Assets/img/Portfolio items/youtube.png";
// import newsAggregator from "../../../Assets/img/Portfolio items/foodApp.png";
import lumenSm from "../../../Assets/img/Portfolio items/Lumen.PNG";
import lumenLg from "../../../Assets/img/Portfolio items/Lumen.PNG";
import ssense from "../../../Assets/img/Portfolio items/ssense.png";
import goshop from "../../../Assets/img/Portfolio items/goshop.png";
import tictac from "../../../Assets/img/Portfolio items/tictac.png"


import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";

const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
      {
        image:[ssense, ssense] ,
        alt: "Ssense Clone",
        heading: "ssense web clone",
        p1: "We tried to built the clone of ssense shopping website, Which deals in luxury products.Completely built on Reactjs",
        l1: "https://github.com/Ajay-Maury/SSENSE-Clone.git",
        a1: "Github page for a Ssense project.",
        l2: "https://ssense-clone.netlify.app/",
        a2: "Ssense live website.",
        tech: [html, css, js, react, expressjs, nodejs],
      },
      {
        image:[goshop, goshop] ,
        alt: "goShop",
        heading: "Goshop Ecommerce",
        p1: "This is soloely built by me. Completely based on Reactjs and redux",
        l1: "https://github.com/fahadalim/Basic-E-commerce.git",
        a1: "Github page for a goShop.",
        l2: "https://fahadgoshop.netlify.app",
        a2: "goShop live website.",
        tech: [html, css, js, react],
      },
      {
        image:[tictac,tictac] ,
        alt: "Tic-tac-toe game",
        heading: "Tic-tac-toe game",
        p1: "Tic-Tac-Toe game is built on reactjs",
        l1: "https://github.com/fahadalim/Tic-Tac-Toe-main.git",
        a1: "Github page for a Tic-Tac-Toe.",
        l2: "https://fahadtictactoe.netlify.app/",
        a2: "Tic-Tac-Toe game live website.",
        tech: [html, css, js, react],
      },
      {
        image: [lumenSm, lumenLg],
        alt: "Lumen5_web_clone.com",
        heading: "Lumen5.com clone",
        p1: "This is a clone of lumen5.com, where we have used HTML, CSS, and Javascript to achieve this.",
        l1: "https://github.com/fahadalim/Lumen-5-Clone.git",
        a1: "Github page for a project.",
        l2: "https://lumen5-clone.netlify.app//",
        a2: "lumen5.com_web_clone",
        tech: [html, css, js],
      },
      {
        image: [nykaaSm, nykaaLg],
        alt: "Nykaaman Clone",
        heading: "NykaaMan web clone",
        p1: "Here we have tried to optimize the previous project cloning of Nykaaman website by adding backend to it and some more functionality in the frontend.",
        l1: "https://github.com/fahadalim/NYKAAMAN-PROJECT-UNIT4.git",
        a1: "Github page for a Nykaaman project.",
        l2: "https://nykaamen.netlify.app",
        a2: "Nykaaman live website.",
        tech: [html, css, js, expressjs, nodejs],
      },
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
