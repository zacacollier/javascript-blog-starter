# React Gist Blog Starter

For your final project, you'll be using GitHub's public Gist API to make a simple, read-only "blog".

### Frameworks & Libraries:
- React
  - Only **one** component should have `state` (`App.js`). All other components should be *functional*.
- Fetch API or [axios](https://github.com/mzabriskie/axios)
- CSS, either on a **per-component basis** (see note below) or with a CSS-in-JS solution like [glamor](https://github.com/threepointone/glamor)
  - You're welcome to use Bootstrap, however I'd much prefer that you use Flexbox.

### Project Setup

1. Please **fork** and **clone** this repository.
2. `cd` into the local copy on your machine and run `yarn` to install dependencies.
3. In a new tab or pane, start the dev server with `yarn start`. Keep it running as you work, and keep an eye on it so you can keep track of which changes you're making are breaking the app.


### Project Planning
In terms of application complexity, blogs are a pretty straightforward affair.
At the very least, they are a **web-based front end** for displaying articles of text retrieved from an API call.

The term API (*"Application Programming Interface"*), you'll recall, can be, and often is, pretty broadly defined. For our intents and purposes, an ideal Interface would be one which can reliably serve articles of text, and perhaps even allow us to add new ones. GitHub's API allows you to do both!

##### 1. Test-firing API calls

Before you go to the trouble of setting up API calls in your app with `fetch` or `axios`, you should try out a few queries to get an idea of **what the responses look like**.

You can use a graphical front-end like your browser's URL bar or [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), or try it out on the command line:
```bash
curl https://api.github.com/users/{your username here}/gists
```
Quite a bit of info! But how do we make sense of it?

##### 2. Planning your Views

Think about what a page on your blog should look like, what kind of stuff should show up. It should probably have **your name** and **avatar** prominently displayed somewhere, right?

We should also be able to view **all blog posts** somewhere, like on the "Home" view. Each of these **posts** should have a **title**, **author**, **data posted**, and maybe a **subtitle**.

Each listed post should link to a **detail view**. The detail view will have pretty much all the same data, except this is where the **body** of a post will be formatted and displayed.

Here's a rough outline of the components:
```js
<App /* state will live here */>
  <PostDetail />
  <ListOfPosts /* posts={state.posts} */>

    /* .map over the `posts` from props to create the 'List': */
    <PostPreview />
    <PostPreview />
    <PostPreview />
  </ListOfPosts>
</App>
```
> * PostDetail will be "hidden" unless a Post has been "selected" (i.e. a user has clicked on it). If time allows, we'll look at how to incorporate [React Router](https://github.com/ReactTraining/react-router) so that this is not as "hacky".

##### 3. Grab some data and load it into `state`

Once you have your components plotted out, it's time to start writing them!

- Start in `App.js`
- Write a `componentWillMount()` lifecycle method that will `fetch` or `axios.get` Gists from your account
  - The first time you write this method, `console.log` the response.
  ```js
  axios.get('https://api.github.com/users/{your username here}/gists')
    .then(response => console.log(response.body))
    .catch(err => console.error(err));
  ```
  - Then, when you get a successful `response`, make sure to `setState` with it:
  ```js
  axios.get('https://api.github.com/users/{your username here}/gists')
    .then(response => this.setState(response.body))
    .catch(err => console.error(err));
  ```
  > **NB:** All APIs are a tad bit different, so the data you want might be in another property on the `response` object (i.e. it might not be named `response.body`, maybe `response.data`, or something else). Use the test queries from earlier in the planning stage to find the path to the property you want.

- From here, it's a matter of passing data from `App`'s `state` down to child components via `props`.
  > Don't forget the **two steps for passing props**:
  > 1. **Setting** the prop:

   ```javascript
    // In the parent component
   <MyComponent myProp={this.state.stuff} />
   ```

  > 2. **Getting** the prop:

   ```javascript
  function MyComponent (props) {
    return (
      <div>{props.myProp}</div>
    )
  }
  ```

- Focus on just getting the **core functionality** working at first - make it look pretty afterward.

##### Making it look pretty

1. With `import`:
Adding CSS to React is really easy. If you need some styles in a component, just `import` the CSS:

```javascript
import React from 'react';
import './App.css';
```

A couple best practices:
- Don't use the same CSS for multiple components. Try to keep each stylesheet **named according to the components it's responsible for:**

```
src
  └── Components
    ├── App.css
    ├── App.js
    ├── Topic.css
    ├── Topic.js
    ├── TopicsList.css
    └── TopicsList.js
```

2. With [glamor](https://github.com/threepointone/glamor).
- This is an awesome way to write CSS-in-JS. More on this soon!
# javascript-blog-starter
