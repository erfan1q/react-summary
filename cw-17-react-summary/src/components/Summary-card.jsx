import { useContext } from "react";
import { gradeContext } from "../GradeContext";

export default function Summarycard() {
    const {grades} =useContext(gradeContext)
    console.log(grades);
  return (
    <div className="shadow-lg border-2 p-6 rounded-lg flex flex-col gap-y-4">
      <h1 className="font-semibold mb-5">Summary</h1>
      <div>
        {grades.map((g)=>(
            <div key={g.score} className="flex justify-between gap-x-4 shadow-md p-3 bg-slate-400 rounded-lg">
               <img src={g.icon} alt="" />
          <p>{g.category}</p>
          <p>{g.score}</p>
        </div>
        ))}
        
      </div>
      <div>
        <button className="bg-[#323a57] w-full text-white rounded-3xl py-2">
          continue
        </button>
      </div>
    </div>
  );
}
