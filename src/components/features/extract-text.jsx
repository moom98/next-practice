import React from 'react'
import { convert } from 'html-to-text'

export default function ExtractText(html, length = 80, more = '...') {
  // HTMLをテキストに変換し、メタ情報として使えるようにする
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  })

  return text.slice(0, length) + more
}
