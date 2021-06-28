import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
class HornedBeasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }

  likeIt = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      // <div className="beast">
      //   <h2>{this.props.beast.title}</h2>
      //   <img
      //     src={this.props.beast.image_url}
      //     title={this.props.beast.title}
      //     alt={this.props.beast.keyword}
      //   ></img>
      //   <p>{this.props.beast.description}</p>
      // </div>

      <Card style={{ width: "18rem", display: "inline-block" }}>
        <Card.Img
          style={{ width: "18rem", height: "18rem" }}
          variant="top"
          src={this.props.beast.image_url}
          title={this.props.beast.title}
          alt={this.props.beast.keyword}
        />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>{this.props.beast.description}</Card.Text>
          <Card.Text>{this.state.likes} ❤️</Card.Text>

          <Button onClick={this.likeIt} variant="primary">
            Like{" "}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
