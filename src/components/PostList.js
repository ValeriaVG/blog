import React from 'react'
import Link from 'gatsby-link'
import Flex from '../styled/Flex'
import Post from './Post'

const PostList = ({posts}) => (
  <Flex>
    {posts.map((p,i)=><Post key={i} post={p} />)}
  </Flex>
)

export default PostList