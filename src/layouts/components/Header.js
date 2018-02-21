import React from 'react'
import Block from 'src/style/Block'
import Menu, { MenuLink } from './style/Menu'
import Icon from 'src/utils/fontawesome'

const Header = () => (
  <div>
    <Menu>
      <MenuLink to="/">
        <Icon icon="home" />
      </MenuLink>
    </Menu>
  </div>
)

export default Header
