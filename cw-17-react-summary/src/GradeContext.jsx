import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
const reducer = (state, action) => {
    switch (action.type){
        case "SET_GRADE" :
            return {...state, gradeList:action.data}
            break;
            case "CALCULATE" :
                return 
          default :
                return state
    }
};

export const gradeContext = createContext();
export const GradeProvider = ({ children }) => {
  const [grades, setGrades] = useState([]);
  const [gradeInfo, dispatch] = useReducer(reducer, { gradeList: [], averageScroe: null });
  useEffect(() => {
    const getGrades = async () => {
      try {
        const res = await axios.get("http://localhost:3000/grades");
        setGrades(res.data);
        dispatch({type:"SET_GRADE", data:res.data})
        console.log(res.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getGrades();
  }, []);
  return (
    <gradeContext.Provider value={{ grades }}>{children}</gradeContext.Provider>
  );
};
