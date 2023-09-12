import { AboutUs } from "@/components/AboutUs/app";
import { Header } from "@/components/Header/app";
import { HomeContent } from "@/components/HomeContent/app";
import { Team } from "@/components/Team/app";

export default function Home() {
  return (
    <>
      <Header />
      <HomeContent />
      <AboutUs />
      <Team />
    </>
  )
}
