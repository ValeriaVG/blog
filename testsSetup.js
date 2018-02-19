require('babel-core/register')
require('babel-polyfill')

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})
jest.mock('./src/utils/typography')
const typography = require('./src/utils/typography')
typography.mockImplementation = {
  rhythm: (n) => `${n}rem`
}