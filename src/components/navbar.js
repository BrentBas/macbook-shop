import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const NavBar = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/macbooks">Macbooks</Link> 
        </div>
    );
}


export default NavBar;
