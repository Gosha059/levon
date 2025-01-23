import Image from "next/image"

export default function SectionOne () {
    return (
        <div className="relative bg-[url('/slide-1.jpg')] bg-no-repeat bg-cover bg-center lg:h-[600px] bg-black/60 bg-blend-overlay">  
            <div className="realtive container h-full flex flex-col justify-around items-start">
                <h1 className="lg:text-[50px]  text-white">
                    <span className="text-[#EF7F04]">Levon Constraction - </span>
                    <br />
                    <span>A professional approach to repair and construction</span>
                    </h1>
                <div className="flex justify-start gap-10">
                    <div className="flex flex-col gap-5 w-[250px]">
                        <Image 
                        src="/slide-img/best-price.png"
                        width={100}
                        height={50}
                        alt="1"
                        />
                        <h2 className="text-white text-[25px] w-[250px]">Affordable prices for you</h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image 
                        src="/slide-img/certificate.png"
                        width={100}
                        height={50}
                        alt="1"
                        />
                        <h2 className="text-white text-[25px] w-[250px]">General construction licence</h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image 
                        src="/slide-img/maintenance.png"
                        width={100}
                        height={50}
                        alt="1"
                        />
                        <h2 className="text-white text-[25px] w-[250px]">Quality above all</h2>
                    </div>
                </div>
            </div>
           
        </div>
    )
}