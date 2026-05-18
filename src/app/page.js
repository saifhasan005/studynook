import HeroBanner from "@/Component/HeroBanner";
import LatestRoom from "@/Component/LatestRoom";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <LatestRoom/>
    </div>
  );
}
