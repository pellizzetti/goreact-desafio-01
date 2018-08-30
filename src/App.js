import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        picture: 'https://i.imgur.com/ULC6ZqC.jpg',
        fullname: 'Jimi Hendrix',
        since: '7 min',
        content: 'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.',
      },
      {
        id: 2,
        picture: 'https://i.imgur.com/gt8InWN.jpg',
        fullname: 'Eric Clapton',
        since: '13 min',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis nulla. Suspendisse metus massa, efficitur non mollis eget, pretium at nisl. Cras eu blandit enim, et tempus justo. In gravida tellus ac dolor mattis, non viverra massa porta. Sed sit amet consectetur nibh, in consectetur arcu. Nunc mollis risus ut mi iaculis eleifend. Nam eget condimentum mauris.',
      },
      {
        id: 3,
        picture: 'https://i.imgur.com/9ozeaK6.jpg',
        fullname: 'Jimmy Page',
        since: '2 horas',
        content: 'Flank swine doner turducken. Picanha pastrami prosciutto, beef ribs burgdoggen bacon spare ribs ham beef tail. Hamburger turkey corned beef sausage meatloaf, tail jowl. Tail tenderloin sirloin porchetta ball tip.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <div id="posts-container">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
          <Post />
        </div>
      </Fragment>
    );
  }
}

export default App;
