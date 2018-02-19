import styled from 'styled-components'
import Link from 'gatsby-link'
import colors from '../utils/colors'
import {rhythm} from '../utils/typography'

const Menu = styled.div`
color: ${colors.base};
padding: 0;
display: flex;
justify-content: flex-start;
border-bottom: 1px solid ${colors.hot};
`
const MenuLink = styled(Link)`
padding: ${rhythm(0.5)};
color:${colors.hot}!important;
transition: all 300ms;
text-decoration:none!important;
&:hover{
  color:${colors.warm}!important;
  transition: all 300ms;
}
`
export default Menu
export {
  MenuLink
}