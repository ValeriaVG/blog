import React from 'react'
import Card, {
  Title,
  Date,
  Image,
  ImageLink,
  Description,
  Info,
  Tag,
} from './style/Card'

const Post = ({ path, image, description, title, published, tags }) => (
  <Card>
    <ImageLink to={path}>
      <Image src={image} alt={title} />
    </ImageLink>
    <Title to={path}>{title}</Title>
    <Date>{published}</Date>
    <Description>{description}</Description>
    <div>{tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</div>
  </Card>
)

export default Post
