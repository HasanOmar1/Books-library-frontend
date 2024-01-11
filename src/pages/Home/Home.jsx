import React, { useEffect } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";

export default function Home() {
  const { users, setCurrentUser } = useNewUsersContext();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  return <main className="Home Page">Home</main>;
}
