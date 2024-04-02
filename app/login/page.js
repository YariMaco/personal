import Image from "next/image";

export default function login(){
    return(
    <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
            <form className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                <h1 className='text-5xl font-semibold'>Inicio de sesión</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>¡Bienvenido otra vez! Por favor ingrese sus credenciales.</p>
                <div className='mt-8'>
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Usuario</label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Ingrese su usuario"/>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg font-medium'>Contraseña</label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Ingrese su contraseña"
                            type={"password"}
                        />
                    </div>
                    <div className='flex flex-col mt-4'>    
                         <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-custom-yellow rounded-xl text-white font-bold text-lg'>Ingresar</button>
                   
                    </div>
                    <div className='mt-4'>  
                      <button className='font-medium text-base text-custom-yellow'>¿Olvidaste tu contraseña?</button>
                     
                    </div>
                         
                </div>
            </form>
        </div>
        <div className="hidden items-center justify-center w-1/2 lg:flex h-full"style={{ backgroundColor: '#FEA81D' }}>
            <div>
            <Image src={'/petote.png'}  width={400} height={400}objectFit={'contain'} alt={'petote'} />

            </div>
        </div>
    </div>
    );

}