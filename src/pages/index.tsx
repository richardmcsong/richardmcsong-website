import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import styles from '../styles/index.module.scss'
import Link from 'next/link'
import { Button } from '@material-ui/core'


const Home = () => {
  return (
    <div className={styles.centerModule}>
      <div className={styles.inner}>
        <h1 className={styles.name}>Richard.</h1>
        <div className={styles.navButtonHolder}>
          <Link href="/blog">
            <Button
              variant='outlined'
              startIcon={<FontAwesomeIcon icon={faBookOpen} />}
            >Blog</Button>
          </Link>
          <Link href="#">
            <Button
              variant='outlined'
              endIcon={<FontAwesomeIcon icon={faUserNinja} />}
            >Manifesto</Button>
          </Link>
        </div>
        <div className={styles.contactHolder}>
          <h6 className={styles.tagline}>
            <a href="https://github.com/richardmcsong" className={styles.icon}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://twitter.com/richardmcsong" className={styles.icon}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/richardmcsong/" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
          </h6>
        </div>
        <h6 className={styles.tagline}>
          @richardmcsong
        </h6>
      </div>
    </div>
  )
}

export default Home

