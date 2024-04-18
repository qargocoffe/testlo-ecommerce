import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { CiShoppingCart } from "react-icons/ci"
import { IoSearchOutline } from "react-icons/io5"


export const TopMenu = () => {
  return (
    
    <nav className="flex px-5 justify-between items-center w-full">
        {/*Logo */}
        <div>
            <Link className="rounded-md transition-all hover:bg-gray-100" href={'/'}>
                <span className={`${titleFont.className} antialiased font-bold`} >Tesla</span>
            </Link>
        </div>

        {/*Center Menu */}

        <div className="flex justify-center items-center">
            <Link className="rounded-md p-3 transition-all hover:bg-gray-100" href={'/category/men'}>
                Hombres
            </Link>
            <Link className="rounded-md p-3 transition-all hover:bg-gray-100" href={'/category/women'}>
                Mujeres
            </Link>
            <Link className="rounded-md p-3 transition-all hover:bg-gray-100" href={'/category/kid'}>
                Ninos
            </Link>
        </div>

        {/*Seach, Cart and Menu */}
        <div className="flex justify-center items-center">
            <Link href={'/search'} className="mx-2">
                <IoSearchOutline className="w-5 h-5" />
            </Link>

            <Link href={'/cart'}>
                <div className="relative">
                    <span className="absolute mx-2 text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">
                        3
                    </span>
                </div>
                <CiShoppingCart className="w-5 h-5" />
            </Link>
            
            <button className="m-2 block rounded-md p-3 transition-all hover:bg-gray-100 font-bold">
                Menu
            </button>

        </div>
    </nav>
  )
}
