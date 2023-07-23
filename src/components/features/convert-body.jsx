import React from 'react'
import parse from 'html-react-parser'
import Image from 'next/legacy/image'

export default function ConvertBody({ contentHTML }) {
  // html-react-parserを使ってHTMLをReactコンポーネントに変換する
  const contentReact = parse(contentHTML, {
    replace: (domNode) => {
      if (domNode.name === 'img') {
        const { src, alt, width, height } = domNode.attribs
        return (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 769px) 769px, 100vw"
          />
        )
      }
    },
  })

  return <>{contentReact}</>
}
