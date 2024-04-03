export default function Orden() {
    return(
        <div className="flex flex-col p-4 ">
            <div className="mb-4 grid grid-cols-4 items-center bg-yellow-100 rounded-lg">
                <div className="p-3 rounded-xl shrink-0">
                <img className="w-24" src="/frito.png" alt=""/>
                </div>
                <div className="col-span-2 pl-3">
                   <div className="pb-2">
                        <h3 className="font-bold text-lg">Pollo frito</h3>
                   </div>
                    <div className="grow pb-3">₡2000</div>
                </div>
                <div className="flex flex-col ">
                    <div className="pb-2" >
                            <button className="bg-custom-yellow  hover:bg-yellow-600  px-2 rounded-lg text-white ">-</button>
                                <span className="px-2">
                                    02
                                </span>
                                <button className="bg-custom-yellow  hover:bg-yellow-600  px-2 rounded-lg text-white">+</button>
                        </div>
                        <div className="grow font-bold text-yellow-800">Remover</div>

                    </div>
            </div>
            <div className="mb-4 grid grid-cols-4 items-center bg-yellow-100 rounded-lg">
                <div className="p-3 rounded-xl shrink-0">
                <img className="w-24" src="/frito.png" alt=""/>
                </div >
                <div className="col-span-2 pl-3">
                   <div className="pb-2">
                        <h3 className="font-bold text-lg">Pollo frito</h3>
                   </div>
                    <div className="grow pb-3">₡1000</div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="pb-2">
                        <button className=" bg-custom-yellow hover:bg-yellow-600 px-2 rounded-lg text-white">-</button>
                        <span className="px-2">
                            01
                        </span>
                        <button className=" bg-custom-yellow hover:bg-yellow-600 px-2 rounded-lg text-white">+</button>
                    </div>
                    <div className="grow font-bold text-yellow-800">Remover</div>
                </div>

            </div>
                     
        


            
    </div>
    
        
        
        
    );
}