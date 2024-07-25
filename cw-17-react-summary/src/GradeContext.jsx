import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const gradeContext = createContext();
export const gradeProvider = ({ children }) => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const getGrades = async () => {
      try {
        const res = await axios.get("http://localhost:3000/grades");
        setGrades(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e.message);
      }
      getGrades();
    };
}, []);
  return (
    <gradeContext.Provider value={{ grades }}>{children}</gradeContext.Provider>
  );
};
