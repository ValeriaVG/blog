import styled from 'styled-components'
import Link from 'gatsby-link'
import colors from 'src/utils/colors'
import { rhythm, scale, adjustFontSizeTo } from 'src/utils/typography'

export default styled.div`
  display: grid;
  grid-template-columns: ${rhythm(5)};
  grid-template-rows: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1.5)};
  grid-gap: 0 ${rhythm(0.25)};
  align-items: center;
  grid-template-areas:
    'image title'
    'image date'
    'image description'
    'image tags';
  color: ${colors.cold};
  width: 40vw;
`
export const Title = styled(Link)`
  display: block;
  grid-area: title;
  ${adjustFontSizeTo('25px')};
  height: 100%;
  text-decoration: none;
  color: ${colors.hot}!important;
  transition: 300ms;
  &:hover {
    color: ${colors.warm}!important;
  }
`
export const ImageLink = styled(Link)`
  grid-area: image;
  display: block;
`
export const Image = styled.img`
  margin-bottom: 0;
`

export const Description = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.8);
  height: 100%;
  grid-area: description;
`
export const Date = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.5);
  height: 100%;
  ${adjustFontSizeTo('10px')};
`
export const Tags = styled.span`
  grid-area: tags;
`
export const Tag = styled.span`
  display: inline-block;
  color: ${colors.base};
  background: ${colors.cold};
  ${adjustFontSizeTo('12px')};
  margin: ${rhythm(0.1)};
  padding: 0 ${rhythm(0.5)};
  border-radius: 5px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: ${rhythm(0.4)};
    left: ${rhythm(0.15)};
    display: block;
    width: ${rhythm(0.25)};
    height: ${rhythm(0.25)};
    border-radius: ${rhythm(0.5)};
    background: ${colors.base};
  }
`
