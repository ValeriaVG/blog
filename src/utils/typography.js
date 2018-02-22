import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

usWebDesignStandardsTheme.plugins = [new CodePlugin()]

const typography = new Typography(usWebDesignStandardsTheme)
export default typography
export const { rhythm, adjustFontSizeTo, scale } = typography
