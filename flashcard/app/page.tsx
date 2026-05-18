import Image from "next/image";

export default function Home() {
  return (
  <div className=" w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className="flex w-[80%] h-[5%] bg-red-500 text-black">Flash Card</div>
      <div className="flex w-[80%] h-[10%] bg-yellow-400">Loading</div>
      <div className="flex w-[80%] h-[85%] bg-amber-950">Content</div> 
  </div>
  );
}
