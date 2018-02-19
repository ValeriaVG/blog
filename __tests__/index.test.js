import React from 'react'
import {shallow} from 'enzyme'
import IndexPage from '../src/pages/index'

describe('Index page', ()=>{
  it.skip('loads without errors',()=>{
    const page = shallow(<IndexPage />)
    expect(page).toBeTruthy()
  })
})