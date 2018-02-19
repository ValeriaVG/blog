import React from 'react'
import Link from 'gatsby-link'
import PostList from '../components/PostList'

const IndexPage = ({ data }) => {
  const posts = data.allBlogPost.edges.map(r=>r.node)
  return (
    <div>
      <h1>Hi all</h1>
      <p>Welcome to my blog.</p>
      <PostList posts={posts} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query BlogQuery {
    allBlogPost{
      edges {
        node {
          path,
          title,
          description,
          category,
          published,
          image
        }
      }
    }
  }
`
