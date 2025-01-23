import Image from "next/image"
import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function ContactMenu( ) {
    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex items-center gap-2 py-2 px-5 rounded-[5px] bg-[#EF7F04] text-white">
                <FaPhoneSquareAlt/>
                <a href="tel:+123456789">Call Us</a>
            </div>
            <div className="flex items-center gap-2 py-2 px-5 rounded-[5px] bg-[#3B3A63] text-white">
                <IoIosMail/>
                <a href="mailto:example@example.com">Send Email</a>
            </div>
        </div>
    )
}