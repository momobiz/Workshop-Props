import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const Dashbord = ({ etudiants, handelChange, desc, children }) => {

  
  const cardsStyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    justifyContent: "space-around",
  };

  return (
    <div style={cardsStyle}>
      {etudiants.map(({ name, photo, secondName }) => (
        <Card style={{ width: "300px", margin: "10px" }}>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title onClick={() => handelChange(name)}>{name}</Card.Title>
            <Card.Text>{secondName}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            <br />
            <span> {desc}</span>
            <br />

            <span>{children}</span>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

Dashbord.propTypes = {
  handelChange: PropTypes.func,
  desc: PropTypes.string.isRequired,
};

Dashbord.defaultProps = {
  desc: "No Data  description",
};
