import React from 'react'
import CardLink, {Title, Image, Description, Info, Tag} from 'src/styled/CardLink'

const Post = ({post}) => (
    <CardLink to={post.path}>
    <Image src={post.image} alt={post.description}/>
    <Title>{post.title}</Title>
    <Description>{post.description}</Description>
    <Info>{post.tags.map((tag,i)=>(<Tag key={i}>{tag}</Tag>))} {post.published}</Info>
    </CardLink>
)

export default Post