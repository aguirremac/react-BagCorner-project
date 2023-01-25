import React from 'react';
import { useState } from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  console.log(categories);
  return (
    <div className="max-w-[1640px] bg-white mx-auto p-3 grid md:grid-cols-4 ">
      <h1>Top Rated Items</h1>
      <div>
        {categories.map((item,index) => {
          <div key={index} className="w-full rounded-xl">
            <img src={item.image}></img>
    
              <p>{item.name}</p>
              
        
          </div>;
        })}
      </div>
    </div>
  );
};

export default Category;
