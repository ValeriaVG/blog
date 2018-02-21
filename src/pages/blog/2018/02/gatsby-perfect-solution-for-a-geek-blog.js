import React from "react";
import Helmet from "react-helmet";
import Code from "src/utils/code";

export const settings = {
  title: `Gatsby: Perfect solution for a geek blog`,
  tags: ["Static CMS", "Gatsby"],
  description: `Describing a static blog creation from idea to deployment using Gatsby`,
  image: `https://pbs.twimg.com/profile_images/875556871427375106/Xuq8DypK.jpg`,
  published: `2018-02-19`
};

export default props => (
  <div>
    <Helmet
      title={settings.title}
      meta={[{ name: "description", content: settings.description }]}
    />

    <h1>{settings.title}</h1>
    <Code>
      {`describe('User story:', () => {
          it('I want to have a blog, where I will be able to show results of my researches')
          it('I want it to be static pages with React components')
          it('I want it to be serverless')
          it('I want static content to be prerendered')
          it('I want it to be scalable')
          it('I do not want to pay for it')
      })`}
    </Code>
    <p>
      Spoiler: It's possible. You're on this blog, so let's see how I made it
      work.
    </p>

    <h2>The great Gatsby</h2>

    <p>
      I've noticed Gastby some time ago and I really liked the idea of having
      React as a template engine for a CMS. So, finally I got to know him
      better.
    </p>

    <p>
      Right after <code>yarn global add gastby</code> and{" "}
      <code>gastby new blog {"&&"} cd blog</code>
      I started to look for the tests folder. You may think it's paranoid, but
      I'm a test-driven developer by design and I feel insecure without at least
      <code>it('doesnt crash')</code> test.{" "}
    </p>

    <p>
      Since we're having here a Facebook/React party let's{" "}
      <code>yarn add jest --dev</code>
    </p>

    <p>
      Okay, looks like gastby is scanning folders in src, so it's wise to not
      place tests inside of it.
      <code>mkdir __tests__ {"&&"} touch first.test.js</code>
    </p>
    <p>
      We'll place there something like this: // Enzyme shallow test goes here
      Spoiler: the test will fail. It's okay, folks, in TDD tests should fail
      first. If no test fails you should not write anything except failing
      tests. And then make them pass with some coffee and code, of course. Okay,
      let's look at the errors: 'import is not defined'. Don't worry, little
      test, I have some friends that will teach you how to read it. 'yarn add
      babel babel-core babel-preset-es2015 babel-preset-react babel-preset-react
      --dev ' . Thats hell a lot of dependencies but we need to transform our
      test and it's modules on the go if we want to use imports and jsx. Okay,
      so if we need to transform our code we need a transformer. Let's write one
      *transformer's code* Don't hesitate to execute yarn test and see that you
      have made the tests pass! Add what do we do when we have no failing tests?
      We make them. Let's create a page. *Test code* Yes, another dummy test.
      Might seem like a useless boilerplate, but it's a good habit. Prevents you
      from ever missing a broken page. And I'm planning to make pages a lot more
      complicated than just text. And I tend to brake silly things in process.
      So if you're a ninja programmer that writes perfect code in first try and
      never ever does refactoring you can skip the tests. Okay, now we can
      create an actual page. I want my posts to be categorised by year and
      month. So let's mkdir pages/blog && mkdir pages/blog/2018 && mkdir
      pages/blog/2018/02 && touch .... *make actual date* Here's what you can
      paste in the file: *code* Let's see it in action! yarn develop and
      http://localhost:8000/blog/year/month/name Yahoo! Nice one, right! Was
      definitely worth it! Now we will conquer the world. If only we had a way
      to list those blog posts... Wait, we have! No markdown please! There's an
      easy to setup and fully functional plugin for gatsby that allows you to
      just render your markdown posts. If that was your intention, here's the
      link to a proper tutorial, there's nothing left for you here. I want to
      add interactive components to my posts. I want my word to live and
      breathe! (Breathing animation) That's why we'll need our own plugin. You
      see, Gatsby uses graphql for every single node of content he manages. When
      you run builder or Dev server he brings the graphql server up and fills it
      with whatever needed. And he does it with JavaScript. And that means we
      can interfere and change the way he thinks of our content. But first,
      let's see what he has.{" "}
    </p>
  </div>
);
