// context/MemeContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { memesData } from "../memes-data";

const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const savedMemes = localStorage.getItem("memes");

    if (savedMemes) {
      try {
        setMemes(JSON.parse(savedMemes));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Помилка парсингу мемів з localStorage:", error);
        setMemes(memesData);
      }
    } else {
      setMemes(memesData);
    }
  }, []);

  const updateMemes = (newMemes) => {
    setMemes(newMemes);
    localStorage.setItem("memes", JSON.stringify(newMemes));
  };

  return (
    <MemeContext.Provider value={{ memes, updateMemes }}>
      {children}
    </MemeContext.Provider>
  );
};

export const useMemes = () => useContext(MemeContext);
