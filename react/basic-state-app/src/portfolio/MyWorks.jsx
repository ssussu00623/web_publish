import React, { useEffect, useState } from 'react';
import MyWorksContentList from './MyWorksContentList';

export default function MyWorks() {
  const [work, setWork]=useState([])
  const [category, setCategory]=useState('total')

  useEffect(()=>{
    fetch("/data/portfolio.json")
      .then(data => data.json())
      .then(jsonData => 
        { 
          if(category === 'total'){
            setWork(jsonData.work)
          } else {
            const filterWorks = jsonData.work.filter((work)=> work.category === category);
            setWork(filterWorks)
          }
        })
      .catch(error=> console.log(error))
  }, [category]);

  const handleClick=(event)=>{
    setCategory(event.target.value)
  }

    return (
        <section id="work" className="section max max-container ">    
        <h2 class="title">My work</h2>
        <p class="description">Projects</p>
        <ul class="categories">
          <li>
            <button class="category category--selected" name='type' value="total" click={handleClick}>
            All<span class="category__count">8</span></button></li>
          <li><button class="category" name='type' value="frontend" click={handleClick}>
            Front-end<span class="category__count">4</span></button></li>
          <li><button class="category" name='type' value="backend" click={handleClick}>
            Back-end<span class="category__count">2</span></button></li>
          <li><button class="category" name='type' value="mobile" click={handleClick}>
            Mobile<span class="category__count">2</span></button></li>
        </ul>
          <MyWorksContentList />
      </section>
    );
}

