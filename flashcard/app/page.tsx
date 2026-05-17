import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-col w-full h-screen">
    <div className="flex w-full h-[10%] bg-red-500 text-black">Flash Card</div>
    <div className="flex w-full h-[10%] bg-yellow-400">Loading</div>
    <div className="flex w-full h-[80%] bg-amber-950">Content</div>
  </div>
  );
}
