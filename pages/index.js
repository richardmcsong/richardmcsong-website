import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles.scss'
config.autoAddCss = false


const Home = () => (
  <div style={{ height: "100%" }}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Open+Sans" rel="stylesheet" />
    </Head>
    <div className="center-module">
      <div className="inner">
        <h1 >Richard.</h1>
        <h6>
          <a href="https://github.com/richardmcsong" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://twitter.com/richardmcsong" className="icon"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
          <a href="https://www.linkedin.com/in/richardmcsong/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </h6>
        <h6>
          @richardmcsong
        </h6>
      </div>
    </div>
    <style jsx>{`

  `}</style>
  </div >
)

export default Home
