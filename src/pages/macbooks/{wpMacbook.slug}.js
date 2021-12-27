import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

const MacbookPage = ({ data: { wpMacbook: { MacbookMeta: macbook, screensizes: { nodes: screensizes }, }, }, }) => {
    return (
        <Layout pageTitle="macbook">
            <div>
                {macbook.description && (
                    <h3>{macbook.description}</h3>
                )}
            </div>
        </Layout>
    )
}
export default MacbookPage;

export const AllMacbookQuery = graphql`
    query ($id: String) {
        wpMacbook (id: { eq: $id }) {
            MacbookMeta {
              description
              fieldGroupName
              specifications {
                touchId
                releaseDate
                price
                operatingSystem
                connectorType
                color
                chip
              }
              image {
                sourceUrl
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, height: 500, width: 500)
                  }
                }
              }
            }
            screensizes {
              nodes {
                name
              }
            }
          }
    }
`