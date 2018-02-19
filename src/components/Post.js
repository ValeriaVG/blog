import React from 'react'
import Link from 'gatsby-link'

const Post = ({post}) => (
  <div>
    <Link to={post.path}>{post.title}</Link>
  </div>
)

export default Post