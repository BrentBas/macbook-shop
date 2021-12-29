import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SingleMacbookPage from "../../components/SingleMacbookPage"
import { imageBannerMacbook, macbookRow, fullHeight, macbookRowSmallerWithColor, macbookRowTextPar, fullwidthmacbooks } from '../../page.module.css'

const Macbooks = ({ data: { allWpMacbook: { edges: macbooksInfo }, wpPage: { MacbooksPage }, }, }) => {
  const image = getImage(MacbooksPage.bannerImage?.localFile)

  return (
    <Layout pageTitle="Macbooks">
      <div className={fullHeight}>
        <div className={macbookRow}>
          <div className={macbookRowSmallerWithColor}>
            <GatsbyImage
              image={image}
              alt={MacbooksPage.bannerImage?.altText}
              className={imageBannerMacbook}
            />
            <div className={macbookRowTextPar}>
              <h1>Alle Macbooks</h1>
              <p >{MacbooksPage.description}</p>
            </div>
          </div>
          <div />
          <div>
            {macbooksInfo.map(({ node: macbook }) => (
              <div key={macbook.id} className={fullwidthmacbooks}>
                <SingleMacbookPage key={macbook.id} slug={macbook.slug} macbook={macbook} />
              </div>
            ))}
          </div>
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
              gatsbyImageData(placeholder: BLURRED, width: 550, height: 550,)
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
                    placeholder: BLURRED,
                    width: 550, height: 550,
                  )
                }
              }
              altText
            }
          }
          slug
          id
          title
        }
      }
    }
  }
`
