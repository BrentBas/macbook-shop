import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { fullwidthDetail, DetailBasicInfo, fulldetailImage, detailImageCenter, centerdetailtext, paddingtopDetails } from '../../page.module.css'
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MacbookPage = ({ data: { wpMacbook: { MacbookMeta: macbook, screensizes: { nodes: screensizes }, }, }, }) => {
  const image = getImage(macbook.image.localFile);

  const handleBoolean = () => {
    if (macbook.specifications.touchId === true) {
      return "Aanwezig";
    }
    else {
      return "Niet aanwezig";
    }
  }
  return (
    <Layout pageTitle={macbook.officialName}>
      <div className={fullwidthDetail}>
        <div className={DetailBasicInfo}>
          <h1>{macbook.officialName}</h1>
          <h3>{macbook.description}</h3>
        </div>
        <div className={detailImageCenter}>
          <GatsbyImage
            image={image}
            className={fulldetailImage}
            alt={macbook.image?.altText}
          />
        </div>
        <div className={paddingtopDetails}>
          <Container>
            <Row>
              <Col>
                <p className={centerdetailtext}>Releasedate: {macbook.specifications.releaseDate}</p>
              </Col>
              <Col>
                <p className={centerdetailtext}>
                  Price: {macbook.specifications.price}
                </p>
              </Col>
              <Col>
                <p className={centerdetailtext}>
                  Operating system: {macbook.specifications.operatingSystem}
                </p>
              </Col>
              <Col>
                <p className={centerdetailtext}>
                  Connector type: {macbook.specifications.connectorType}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className={centerdetailtext}>
                  Color: {macbook.specifications.color}
                </p>
              </Col>
              <Col>
                <p className={centerdetailtext}>
                  Chip: {macbook.specifications.chip}
                </p>
              </Col>
              <Col>
                <p className={centerdetailtext}>
                  Touchid: {handleBoolean()}
                </p>
              </Col>
              <Col>
                <p className={centerdetailtext}>
                  Beschikbare schermgroottes:
                  {screensizes.map((screensize) => (
                    <span key={screensize.name}>
                      {screensize.name + " "}
                    </span>
                  ))}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
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
              officialName
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
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, height: 550, width: 550)
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