import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SingleMacbook from "../../components/SingleMacbook"

const Macbooks = ({ data: { allWpMacbook: { edges: macbooksInfo }, wpPage: { MacbooksPage }, }, }) => {
  const image = getImage(MacbooksPage.bannerImage.localFile)
  return (
    <Layout pageTitle="macbooks">
      <GatsbyImage
        image={image}
        alt={MacbooksPage.bannerImage.localFile}
      />
      <div>
        <h2 >{MacbooksPage.description}</h2>
        <div />
        <div>
          {macbooksInfo.map(({ node: macbook }) => (
            <SingleMacbook key={macbook.id} slug={macbook.slug} macbook={macbook} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Macbooks;

export const MacbookDataquery = graphql`
  query {
    wpPage(slug: {eq: "macbooks"}) {
      MacbooksPage {
        description
        bannerImage {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          altText
        }
      }
    }
    allWpMacbook {
      edges {
        node {
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
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    quality: 100
                    transformOptions: {grayscale: true}
                  )
                }
              }
              altText
            }
          }
          slug
          id
        }
      }
    }
  }
`
