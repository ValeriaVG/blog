import Link from 'gatsby-link'
import styled from 'styled-components'
import colors from '../utils/colors'
import {rhythm,scale,adjustFontSizeTo} from '../utils/typography'

export default styled(Link)`
display: grid;
grid-template-columns: ${rhythm(5)} ;
grid-template-rows: ${rhythm(1.5)} ${rhythm(2)} ${rhythm(1)};
grid-gap: ${rhythm(0.25)};
align-items: center;
grid-template-areas: 
    "image title"
    "image descriprion"
    "image info";
color: ${colors.cold};
width: 40vw;
text-decoration:none!important;
&:hover{
  color: ${colors.hot};
}
`
const Title = styled.span`
display:block;
grid-area: title;
${adjustFontSizeTo('25px')};
height: 100%;
`
const Image = styled.img`
grid-area: image;
margin-bottom: 0;
`
const Description = styled.span`
display:block;
color: rgba(0,0,0,.8);
height: 100%;
`
const Info = styled.span`
display:block;
color: rgba(0,0,0,.5);
height: 100%;
${adjustFontSizeTo('10px')};
`
const Tag = styled.span`
display:inline-block;
color: ${colors.base};
background: ${colors.hot};
${adjustFontSizeTo('12px')};
margin: ${rhythm(0.1)};
padding: 0 ${rhythm(0.5)};
border-radius: 5px;
position: relative;
&:before{
  content:'';
  position: absolute;
  top: ${rhythm(0.4)};
  left: ${rhythm(0.15)};
  display: block;
  width: ${rhythm(0.25)};
  height: ${rhythm(0.25)};
  border-radius: ${rhythm(0.5)};
  background:${colors.base};
}
`
export {
  Title,
  Image,
  Description,
  Info,
  Tag
}