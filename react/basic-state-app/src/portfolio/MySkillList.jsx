import React, { useEffect, useState } from "react";
import MySkill from "./MySkill";

export default function MySkillList(){
  const [MySkillList, setMySkillList] = useState([]);
  useEffect (()=>{
    fetch("/data/portfolio.json")
    .then(data=> data.json())
    .then(jsonData=> setMySkillList(jsonData.MySkillList))
  }, [])
  return(
    <ul className="bar">
      {MySkillList&&MySkillList.map((item)=>
      <li className="bar">
        <MySkill 
          name={item.name}
          percent={item.percent}
          width={item.width}
          />
      </li>
      )}
    </ul>
  );
}