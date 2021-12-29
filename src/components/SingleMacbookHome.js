import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { blueColorSingle, SingleMacbookImage, informationTextSingleMacbook, removeDecoration } from '../page.module.css'

export const SingleMacbookHome = ({ macbook, slug }) => {
  const image = getImage(macbook.MacbookMeta.image.localFile)

  return (
    <Link to={String(slug)} className={removeDecoration}>
        <table className={blueColorSingle}>
          <tr>
            <td>
              <GatsbyImage
                className={SingleMacbookImage}
                image={image}
                alt={macbook.MacbookMeta?.altText}
              />
            </td>
            <td className={informationTextSingleMacbook}>
              <h2>
                {macbook.title}
              </h2>
            </td>
          </tr>
        </table>
    </Link>
  )
}

export default SingleMacbookHome;