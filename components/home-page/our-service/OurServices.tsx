import { ourServiceData } from "@/lib/storage/ourServiceData"
import Image from "next/image"
import Link from "next/link"
export default function OurServices() {
    return (
        <>
        <div className="mt-[100px] container">
            <h1 className="text-[50px]">Our service</h1>
            <div className="grid grid-cols-2 items-center justify-items-center gap-y-2 mt-[50px]">
                {ourServiceData.map((item, el)=> (
                  <Link className="relative hover:bg-black/60 bg-blend-overlay z-10" 
                  href={item.name}
                  key={el}>
                  <Image 
                  src={item.url}
                  width={400}
                  height={250}
                  alt=""
                  className="relative  hover:bg-black/60 bg-blend-overlay"
                  />
                  <p className="absolute block w-full bottom-0 text-white bg-black/60 bg-blend-overlay p-2 z-0">{item.desc}</p>
                  </Link>  
                ))}
                

            </div>
        </div>
        </>
    )
}