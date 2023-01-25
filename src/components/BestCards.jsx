import React from "react";




const BestCards = () => {
    return (

        // Container
        <div className="p-4 max-w-[1640px] mx-auto grid md:grid-cols-3 gap-5">

            {/* cards */}
            <div className="relative rounded-xl hover:scale-105 duration-200">
                {/* overlay */}
                <div className="absolute bg-black/50 w-full h-full rounded-xl p-3">
                    <h1 className="text-white font-bold text-2xl md:text-xl">New Arrivals</h1>
                    <h1 className="text-white">Added Daily</h1>
                    <button className="text-white border-white absolute bottom-3 hover:bg-white/10">Explore</button>
                </div>
                <img className="max-h-[150px] w-full md:max-h-[200px] object-cover  rounded-xl" src="https://images.pexels.com/photos/575435/pexels-photo-575435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

            </div>

            
            {/* cards */}
            <div className="relative rounded-xl hover:scale-105 duration-200">
                {/* overlay */}
                <div className="absolute bg-black/50 w-full h-full rounded-xl p-3">
                    <h1 className="text-white font-bold text-2xl md:text-xl">Best Sellers</h1>
                    <h1 className="text-white">This Week</h1>
                    <button className="text-white border-white absolute bottom-3 hover:bg-white/10">Explore</button>
                </div>
                <img className="max-h-[150px] w-full md:max-h-[200px] object-cover  rounded-xl" src="https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

            </div>

            
            {/* cards */}
            <div className="relative rounded-xl hover:scale-105 duration-200">
                {/* overlay */}
                <div className="absolute bg-black/50 w-full h-full rounded-xl p-3">
                    <h1 className="text-white font-bold text-2xl md:text-xl">Recommended For You</h1>
                    <h1 className="text-white">Hot Picks</h1>
                    <button className="text-white border-white absolute bottom-3 hover:bg-white/10">Explore</button>
                </div>
                <img className="max-h-[150px] w-full md:max-h-[200px] object-cover  rounded-xl" src="https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

            </div>

        </div>



    )

}

export default BestCards;