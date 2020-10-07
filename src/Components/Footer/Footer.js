import React from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
        <br />

        <AiFillFacebook size="50px" />
        <AiFillYoutube size="50px" />
        <FaTwitterSquare size="50px" />
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};
