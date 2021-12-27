import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const SingleMacbook = ({ macbook, slug }) => {
  //const profile = getImage(macbook.MacbookMeta.image.localFile)
  console.log(slug);
  return (
    <Link to={String(slug)}>
        <p>
            prijs:
          {macbook.MacbookMeta.specifications.price}
        </p>
 
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