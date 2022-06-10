import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <h1>About this project</h1>
      <p>Feedback for product and service.</p>
      <p>version:1.0.0</p>
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </Card>
  );
};

export default AboutPage;
