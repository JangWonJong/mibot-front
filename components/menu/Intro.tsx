import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <html>
      <Head>
        <title>팀소개</title>
        <style type="text/css">
        </style>
    </Head>

    <h1>팀원 소개 영상</h1>
    <body>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3ERtNZqh1XA?autoplay=1&mute=1"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
    </iframe>

    </body>
    

    </html>
  )
}

export default Intro