import React from "react";


const Home = () => {
    return (

        
    <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative ">
            <div className="absolute flex flex-col justify-center w-full h-full max-h-[500px] bg-black/40">
                <h1 className="text-white font-bold px-3 text-5xl md:text-7xl lg:text-10xl">Carry<span className="pl-2 text-green-500">Your</span></h1>
                <h1 className="font-bold px-3 text-5xl md:text-7xl lg:text-10xl text-green-500">Own<span className="pl-2 text-white">Style</span></h1>
            </div>
            <img className="max-h-[500px] w-full object-cover" src="https://images.pexels.com/photos/981781/pexels-photo-981781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>


        </div>


    </div>


    )


}


export default Home;
