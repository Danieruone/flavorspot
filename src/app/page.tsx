import { Navbar } from "@/components/layout/Navbar";
import { Feed } from "@/components/sections/Feed";

export default function Home() {
  return (
    <div className="bg-[#FCFAF8] pt-16">
      <Navbar />
      <div className="px-4 md:px-[30%] py-10">
        <Feed />
      </div>
    </div>
  );
}
