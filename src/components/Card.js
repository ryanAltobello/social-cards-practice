import React from "react";
import Header from "./Header";
import Email from "./Email";
import Body from "./Body";
import Author from "./Author";
import NewHeader from "./NewHeader";
import NewBody from "./NewBody";
import Avatar from "./Avatar";

import jsonPlaceholder from "../apis/jsonPlaceholder";
import randomUser from "../apis/randomUser";

class Card extends React.Component {
  state = { jsonData: [], randomUserData: [] };
  componentDidMount() {
    this.fetchJson();
    this.fetchRandomUser();
    this.fetchRandomUser();
    this.fetchRandomUser();
  }

  async fetchRandomUser() {
    const randomUserResponse = await randomUser.get();
    let user = randomUserResponse.data.results;
    this.setState({ randomUserData: [...this.state.randomUserData, user] });
  }

  async fetchJson() {
    const jsonBodyText = await jsonPlaceholder.get("/comments");
    const jsonUserInfo = await jsonPlaceholder.get("/users");

    let idArray = jsonUserInfo.data;
    let bodyText = [];

    for (let i = 0; i < 3; i++) {
      bodyText.push(jsonBodyText.data[i]);
      for (let j = 0; j < 10; j++) {
        if (bodyText[i].id === idArray[i].id) {
          bodyText[i]["username"] = idArray[i].username;
          bodyText[i]["name"] = idArray[i].name;
        }
      }
    }

    this.setState({ jsonData: bodyText });
  }

  renderCard() {
    if (!this.state) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ui raised cards">
          {this.state.jsonData.map(data => (
            <div className="ui card">
              <div className="content">
                <Header username={data.username} />
                <Email email={data.email} />
                <Body text={data.body} />
              </div>
              <div className="extra content">
                <Author name={data.name} />
              </div>
            </div>
          ))}
          {this.state.randomUserData.map(user => (
            <div className="ui card">
              <div className="content">
                <NewHeader username={user[0].name} />

                <NewBody location={user[0].location} />
              </div>
              <div className="extra content">
                <Avatar picture={user[0].picture.thumbnail} />
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    return <div className="content">{this.renderCard()}</div>;
  }
}

export default Card;
