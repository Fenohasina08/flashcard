import Image from "next/image";
import Loading from "@/components/Loading";
import Flashcard from "@/components/Flashcard";
import Content from "@/components/Content";

export default function Home() {
  return (
  <div className="w-full h-screen flex items-center justify-center background-primary text-black">
    <div className="flex flex-col w-[80%] h-[80%]">
      <div className="h-[5%] bg-red-500">
        <Flashcard />
      </div>
      <div className="h-[10%] bg-yellow-400">
        <Loading />
      </div>
      <div className="h-[85%] bg-amber-950">
        <Content />
      </div>
    </div>
  </div>
  );
}
