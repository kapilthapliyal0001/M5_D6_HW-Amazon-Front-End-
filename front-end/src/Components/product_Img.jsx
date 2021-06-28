// component to load the images for a particular product;

import React, {Component} from "react";
import {Container, Row, Form, Button} from "react-bootstrap";
import {ThemeConsumer} from "react-bootstrap/esm/ThemeProvider";
import "./product_Img.css";

export default class product_Img extends Component {
  state = {
    image: null,
    id: "24sxhp8h9kqglgwfj", // id passed by the other Home Page
  };

  onFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  uploadPostImage = async (e) => {
    const formData = new FormData();
    formData.append("post", this.state.image);
    // http://localhost:3001/product/24sxhp8h9kqglgwfj/upload
    const url = `http://localhost:3001/product/24sxhp8h9kqglgwfj/upload`;

    // fetch API
    try {
      console.log("okey!"); // here is fine !
      let response = await fetch(url, {
        method: "POST",
        // headers: {
        // },
        body: formData,
      })
        .then((e) => e.json())
        .then((m) => {
          console.log("posted");
        });
    } catch (error) {
      console.log(error, "There is some error here! ");
    }
  };

  componentDidMount() {
    this.setState({
      image: this.props.id,
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row lg={3}>
            <Form
              className="pl-3"
              onSubmit={(e) => {
                this.uploadPostImage(e);
              }}
            >
              <Form.Group>
                <Form.Control
                  id="image"
                  type="file"
                  placeholder="Upload image"
                  onChange={this.onFileChange}
                />
                <Button variant="success" onClick={this.uploadPostImage}>
                  Upload Image
                </Button>
              </Form.Group>
            </Form>
          </Row>
          <Row lg={9}>
            <h3>Loading images here!</h3>
          </Row>
        </Container>
      </div>
    );
  }
}
