import ClientReview from "@/Component/ClientReview";
import HeroBanner from "@/Component/HeroBanner";
import LatestRoom from "@/Component/LatestRoom";
import OurServices from "@/Component/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <LatestRoom/>
      <OurServices/>
      <ClientReview/>
    </div>
  );
}
