import React from 'react'
import Block from '../styled/Block'
import Menu,{MenuLink} from '../styled/Menu'
import Icon from '../utils/fontawesome'

const Header = () => (
  <div>
    <Menu>
      <MenuLink to='/'><Icon icon='home' /></MenuLink>
    </Menu>
  </div>
)

export default Header
