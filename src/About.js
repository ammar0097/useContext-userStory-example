import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div>About</div>
      <h2>{JSON.stringify(user, null, 2)}</h2>
    </>
  );
};

export default About;
