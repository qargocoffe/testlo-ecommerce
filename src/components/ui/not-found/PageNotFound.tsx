import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
            <h2 className={`${titleFont.className} antialiased font-bold text-9xl`}>404</h2>
        </div>
        
        <h1>Not Found Page</h1>
      <Link href={'/'} >Regresar</Link>
    </div>
  )
}
