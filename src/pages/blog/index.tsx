import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { previewBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import { Card, CardContent, Container } from '@material-ui/core';


export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex(false)
  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]

      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)
    .sort((x, y) => y.Date - x.Date)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })
  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <Container maxWidth='md' >
        <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
          <h1>Blog</h1>
          {posts.length === 0 && (
            <p className={blogStyles.noPosts}>There are no posts yet</p>
          )}
          {posts.map((post, idx) => {
            return (
              <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref key={post.Slug}>
                <Card className={blogStyles.card}>
                  <CardContent className={blogStyles.cardContent}>
                    <div className={blogStyles.postPreview} key={post.Slug}>
                      <h3>
                        <div className={blogStyles.titleContainer}>
                          {!post.Published && (
                            <span className={blogStyles.draftBadge}>Draft</span>
                          )}
                          <a>{post.Page}</a>
                        </div>
                      </h3>
                      {post.Date && (
                        <div className="posted">Posted: {getDateStr(post.Date)}</div>
                      )}
                      {(!post.Preview || post.Preview.length === 0) &&
                        'No preview available' || previewBlock(post.Preview, `${post.Slug}`, `${blogStyles.postPreviewTagline}`)}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
};

export default Index;
