import React from 'react'
import Helmet from 'react-helmet'
import Code from 'src/utils/code'

export const settings = {
  title: `Gatsby: Perfect solution for a geek blog`,
  category: ``,
  description: `Describing a static blog creation from idea to deployment using Gatsby`,
  image: ``,
  published: `2018-02-19`
}

export default (props) => (
  <div>

    <Helmet
      title={settings.title}
      meta={[
        { name: 'description', content: settings.description }
      ]}
    />

    <h1>{settings.title}</h1>
    <Code language='js'>
      {`{test:true}`}
    </Code>
  </div>
)
