import React from 'react'
import Link from 'gatsby-link'
import Flex from 'src/style/Flex'
import Post from './Post'

const PostList = ({ posts }) => (
  <Flex>{posts.map((p, i) => <Post key={i} {...p} />)}</Flex>
)

export default PostList
