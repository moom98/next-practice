import React from 'react'

export default function SgTest(props) {
  console.log('sgTest.js: ', props)
  return <div>sgTest</div>
}

export async function getStaticProps() {
  return {
    props: {
      message: 'test',
    },
  }
}
