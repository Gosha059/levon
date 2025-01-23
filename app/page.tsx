import SectionOne from "@/components/home-page/Slider";
import OurServices from "@/components/home-page/our-service/OurServices";
import Reviews from "@/components/home-page/reviews/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <SectionOne/>
    <OurServices/>
    <Reviews/>
    </>
  )
}
