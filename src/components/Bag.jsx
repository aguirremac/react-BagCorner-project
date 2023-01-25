import React, { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { data } from '../data/data.js';

const Bag = () => {
  const [bags, setBags] = useState(data);

  //filter by category
  const filterType = (category) => {
    setBags(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //search box

  // const [searchValue, setSearchValue] = useState('');

  // const handleSearchChange = e => {
  //   setSearchValue(e.target.value)
  //   setBags (
  //     data.filter((item) =>{
  //       return item.category.toLowerCase.indexOf(searchValue) !== -1
  //     }))}
  



  //filter by range
  // {bags.map((item) => {
  //   let minPrice = Math.min(item.price)
  //   let maxPrice = Math.max(item.price)
  //   console.log(minPrice)
  // })}



  // const [rangeValue, setRangeValue] = useState(minRange);


  // const handleRangeChange = (e) => {
  //   setRangeValue(e.target.value);
  //   const filteredProducts = data.filter(
  //     (product) => product.price <= maxRange && product.price >= rangeValue
  //   );
  // };

  return (
    <div className="max-w-[1640px] mx-auto p-3">
      {/* filter row*/}
      <p className=" text-center text-2xl md:text-3xl lg:text-4xl font-bold text-green-500">
        Choose Your Style
      </p>
      <div className="flex flex-col items-center md:flex-row gap-1 w-full h-full">
        <div className="w-full p-3">
          <h2 className="text-sm md:text-xl pb-2">Filter Type</h2>
          <div className="flex justify-evenly gap-0.5 text-sm md:text-base lg:text-xl">
            <button
              onClick={() => setBags(data)}
              className="px-2 md:px-4 text-green-500 marker:-500 border-green-500 hover:bg-green-500 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType('Totes')}
              className="px-2 md:px-4 text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
            >
              Totes
            </button>
            <button
              onClick={() => filterType('Back Pack')}
              className="px-2 md:px-4 text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
            >
              Back Pack
            </button>
            <button
              onClick={() => filterType('Traveling Bag')}
              className="px-2 md:px-4 text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
            >
              Travel
            </button>
            <button
              onClick={() => filterType('Hand Bag')}
              className="px-2 md:px-4 text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
            >
              Hand Bag
            </button>
          </div>
        </div>

        <div className="w-full">
          <h3 className=" text-sm md:text-xl md:text-center">Maximum Price</h3>
          <div className="flex w-full justify-center">
            <input
              
              type="range"
              className="w-1/2 px-4 accent-green-500"
            ></input>
            <p className="pl-2 text-green-500 text-sm md:text-xl"></p>
          </div>
        </div>
      </div>

      {/* mapped products */}

      <div className="max-w-[1640px] mx-auto p-3 grid grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
        {bags.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-xl hover:scale-105 duration-200 drop-shadow-md "
          >
            <img
              className="rounded-t-xl w-full h-[150px] object-cover"
              src={item.image}
              alt={item.name}
            ></img>
            <div className="bg-white w-full px-3 py-4 flex justify-between items-center">
              <h3 className="font-bold">{item.name}</h3>
              <p className="bg-green-500 rounded-full text-sm px-2 text-white py-1">
                &#8369;{item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bag;
