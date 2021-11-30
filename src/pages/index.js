import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import NavBar from "../components/navbar"

const IndexPage = () => {
  return(
    <div>
        <Seo title="Home" />
        <NavBar></NavBar>
        <h2>Home</h2>
    </div>
  );
}

export default IndexPage;
