'use client'

import Link from "next/link"
import { IoAccessibilityOutline, IoAmericanFootball, IoCloseOutline, IoLogInOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicket } from "react-icons/io5"

export const Sidebar = () => {


  return (
    <>
        {/* Background black */}
        <div className="fixed top-0 w-screen h-screen z-10 bg-black opacity-30"></div>

        {/* Blur */}
        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>

        {/* Sidemenu */}
        <nav className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">

            <IoCloseOutline
                size={50}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => console.log("Click")}
            />
            {/* INput */}

            <div className="relative mt-14">
                <IoSearchOutline size={20} className="absolute top-2 left-2"/>
                <input type="text" 
                    placeholder="Buscar"
                    className="w-full bg-gray-50 rounded pl-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Menu */}
            <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoLogInOutline size={30} />
                <span className="ml-3 text-xl">Ingresar</span>
            </Link>
            <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoPersonOutline size={30} />
                <span className="ml-3 text-xl">Perfil</span>
            </Link>
            <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoAccessibilityOutline size={30} />
                <span className="ml-3 text-xl">Ingresar</span>
            </Link>
            <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoAmericanFootball size={30} />
                <span className="ml-3 text-xl">Ingresar</span>
            </Link>


             {/* Separator section */}

            <div className="w-full h-px bg-gray-200 my-10"></div>

             <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoShirtOutline size={30} />
                <span className="ml-3 text-xl">Productos</span>
            </Link>


            <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoTicket size={30} />
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>

            <Link className="flex items-center p-2 my-5 hover:bg-gray-100 rounded transition-all duration-300" href={'/'}>
                <IoPeopleOutline size={30} />
                <span className="ml-3 text-xl">Usuarios</span>
            </Link>
        </nav>


        
    </>
  )
}
