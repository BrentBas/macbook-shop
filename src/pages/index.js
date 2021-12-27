import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from 'gatsby'
import { homeContainer, descriptionColHome, homePaddingText } from '../homePage.module.css'
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const IndexPage = ({ data: { wpPage: { homePage }, }, }) => {
  const image = getImage(homePage.bannerPicture.localFile)
  return (
    <Layout pageTitle={homePage.title}>
        <div className={homeContainer}>
          <Container>
            <Row>
              <Col className={descriptionColHome} xs={12} md={6}>
                <div className={homePaddingText}>
                  <h1>{homePage.title}</h1>
                  <h3>{homePage.description}</h3>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <GatsbyImage
                  image={image}
                  alt={homePage.bannerPicture.altText}
                />
              </Col>
            </Row>
          </Container>
          <h2>{homePage.featuredProducts}</h2>
        </div>
    </Layout>
  );
}

export default IndexPage;

export const HomeDataQuery = graphql`
    query{
      wpPage(slug: {eq: "home"}) {
        homePage {
          description
          featuredProducts
          title
          bannerPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, height: 500, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
`
