import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:3001/reviews");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } else {
      console.log("error with fetching posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Row>
      {posts &&
        posts.map((post) => (
          <Col md={4} style={{ margin: 5 }}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{post.id}</Card.Title>
                <Card.Text>{post.comment}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Posts;
