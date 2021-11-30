import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import NavBar from "../components/navbar"

const MacbooksPage = () => {
  return(
    <div>
        <Seo title="Macbooks" />
        <NavBar></NavBar>
        <h2>Macbooks</h2>
    </div>
  );
}

export default MacbooksPage;
