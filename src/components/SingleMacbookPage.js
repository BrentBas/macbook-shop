import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { removeDecoration, macbookRow, macbookRowSmaller, blueColorSinglemacbooks, informationTextSingle, tableData, SingleMacbookImageMacbook } from '../page.module.css'

export const SingleMacbookPage = ({ macbook, slug }) => {
    const image = getImage(macbook.MacbookMeta.image.localFile)

    return (
        <Link to={String(slug)} className={removeDecoration}>
            <div className={macbookRow}>
                <div className={macbookRowSmaller}>
                    <table className={blueColorSinglemacbooks}>
                        <tr>
                            <td className={tableData}>
                                <GatsbyImage
                                    className={SingleMacbookImageMacbook}
                                    image={image}
                                    alt={macbook.MacbookMeta.altText}
                                />
                            </td>
                            <td className={informationTextSingle}>
                                <div>
                                    <h2>
                                        {macbook.title}
                                    </h2>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </Link>
    )
}

export default SingleMacbookPage;