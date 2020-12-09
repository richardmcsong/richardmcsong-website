import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
]


const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Richard.</title>
        <meta
          name="description"
          content="The blog posts of Richard Song"
        />
        <meta name="og:title" content="Posts" />
        <meta name="twitter:site" content="@richardmcsong" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
          </li>
        ))}
      </ul>
    </header>
  )
};

export default Header;
