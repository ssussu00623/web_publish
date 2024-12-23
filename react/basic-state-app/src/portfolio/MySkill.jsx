import React from 'react';

export default function MySkill ({name, percent, classname}){
  return (
    <>
      <div className="bar__metadata"><span>{name}</span><span>{percent}</span></div>
      <div className="bar__bg"><div className={classname}></div></div>
    </>
  )
}

