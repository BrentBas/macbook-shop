import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout pageTitle="about">
      <div>
        <h2>About</h2>
      </div>
    </Layout>
  );
}

export default AboutPage;
