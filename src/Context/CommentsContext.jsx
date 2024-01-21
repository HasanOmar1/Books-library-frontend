import axios from "../axiosConfig";
import React, { createContext, useContext, useEffect, useState } from "react";

const CommentsContext = createContext();

export default function CommentsContextProvider({ children }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const response = await axios.get("/comments");
      console.log(response.data);
      //   setComments(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function createComment(comment) {
    try {
      const config = {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.post("/comments/create", comment, config);
      console.log(response.data.comments);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function getBooksByName(bookName) {
    try {
      const response = await axios.get(`/books/search/${bookName}`);
      console.log(response.data[0]?.comments);
      setComments(response.data[0]?.comments);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  return (
    <CommentsContext.Provider
      value={{ createComment, comments, getBooksByName }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export const useCommentsContext = () => useContext(CommentsContext);
