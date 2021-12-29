import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { blueColorSingle, SingleMacbookImage, informationTextSingleMacbook, removeDecoration } from '../page.module.css'

export const SingleMacbook = ({ macbook, slug }) => {
  const image = getImage(macbook.MacbookMeta.image.localFile)

  return (
    <Link to={String(slug)} className={removeDecoration}>
      <Row >
        <table className={blueColorSingle}>
          <tr>
            <td>
              <GatsbyImage
                className={SingleMacbookImage}
                image={image}
                alt={macbook.MacbookMeta.altText}
              />
            </td>
            <td className={informationTextSingleMacbook}>
              <h2>
                {macbook.title}
              </h2>
            </td>
          </tr>
        </table>
      </Row>
    </Link>
  )
}

export default SingleMacbook

/*
      <GatsbyImage
        image={profile}
        alt={macbook.MacbookMeta.image.altText}
      />
      <div>
        {macbook.MacbookMeta.title && (
          <p>{macbook.MacbookMeta.title}</p>
        )}      </div>*/