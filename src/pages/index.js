import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { homeContainer, descriptionColHome, homePaddingText, homeImageStyle, heightHomeCol, topRuimteHome } from '../page.module.css'
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SingleMacbookHome from '../components/SingleMacbookHome'

const IndexPage = ({ data: { wpPage: { homePage }, }, }) => {
  const image = getImage(homePage.bannerPicture.localFile)
  return (
    <Layout pageTitle={homePage.title}>
      <div className={homeContainer}>
        <Container>
          <Row xs={12} md={12}>
            <Col className={descriptionColHome}>
              <div className={homePaddingText}>
                <h1>{homePage.title}</h1>
                <h3>{homePage.description}</h3>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className={topRuimteHome}>
          <Row>
            <Col xs={12} md={6}>
              <GatsbyImage className={homeImageStyle}
                image={image}
                alt={homePage.bannerPicture.altText}
              />
            </Col>
            <Col className={heightHomeCol} xs={12} md={6}>
              {homePage.featuredMacbooks.map(macbook => (
                <Row key={macbook.id}>
                  <div>
                    <SingleMacbookHome
                      slug={`macbooks/${macbook.slug}`}
                      key={macbook.id}
                      macbook={macbook}
                    />
                  </div>
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const HomeDataQuery = graphql`
    query{
      wpPage (slug: {eq: "home"}) {
        homePage {
          description
          title
          featuredMacbooks {
            ... on WpMacbook {
              id
              slug
              MacbookMeta {
                description
                specifications {
                  chip
                  color
                  connectorType
                  operatingSystem
                  price
                  releaseDate
                  touchId
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, height: 250, width: 250)
                    }
                  }
                }
              }
              title
            }
          }
          bannerPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 550, height: 550, placeholder: BLURRED)
              }
            }
            altText
          }
        }
    }
  }
`
