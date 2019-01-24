import React from "react";
import Header from "./Header";
import Email from "./Email";
import Body from "./Body";
import Author from "./Author";
import jsonPlaceholder from "../apis/jsonPlaceholder";

class Card extends React.Component {
  componentDidMount() {
    this.fetchPosts();
  }

  async fetchPosts() {
    const response = await jsonPlaceholder.get("/comments");
    let commentArray = [];
    for (let i = 0; i < 3; i++) {
      commentArray.push(response.data[i]);
    }
    let email = commentArray.map(item => item.email);
    let body = commentArray.map(item => item.body);
    let author = commentArray.map(item => item.name);
    this.setState(
      {
        email: email,
        body: body,
        author: author
      },
      function() {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <Header />
          <Email />
          <Body />
        </div>
        <div className="extra content">
          <Author />
        </div>
      </div>
    );
  }
}

export default Card;
