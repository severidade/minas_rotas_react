import React from "react"
import { Helmet } from "react-helmet"

import Content from '../../data/Content';

export default function Head() {
  return (
    <>
      <Helmet>
        <title>{Content.headDescription.title}</title>
        <meta property="og:title" content={Content.headDescription.title} />
        <meta property="og:description" content={Content.headDescription.description} />
        <meta property="og:image" content={Content.headDescription.image} />
      </Helmet>
    </>
	)
}


// export default function Head({title, description, image})