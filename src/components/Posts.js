import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data.results });
      })
      .catch(error => {
        console.log("Fetching and parsing data error", error);
      });
  }

  render() {
    let items = this.state.items.map(this.itemProps());
    return <div>{items}</div>;
  }

  itemProps() {
    return item => {
      return (
        <h4 key={item.name}>
          {item.name} has an eye color of {item.eye_color}
        </h4>
      );
    };
  }
}

export default Posts;
