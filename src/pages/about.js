import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import NavBar from "../components/navbar"

const AboutPage = () => {
  return(
    <div>
        <Seo title="About" />
        <NavBar></NavBar>
        <h2>About</h2>
    </div>
  );
}

export default AboutPage;
