import { typeMenu } from "./typeMenu"
import Link from "next/link"


export default function MainMenu ({menu}: {menu:typeMenu}) {
    return (
        <ul className="flex  gap-5">
        {
            menu.map((item)=> (
                <li key={item.name}
                
                className="p-1 no-underline hover:underline hover:text-[#EF7F04]">
                    <Link
                    href={item.name}
                    >
                    {item.name.toUpperCase()}
                    </Link>
                </li>
            ))
        }
        </ul>
    )
}