import Image from "next/image";

export default function Home() {
  return (
<div className="w-full h-screen flex items-center justify-center background-primary">
  <div className="flex flex-col w-[80%] h-[80%]">
    <div className="h-[5%] bg-red-500">Flash Card</div>
    <div className="h-[10%] bg-yellow-400">Loading</div>
    <div className="h-[85%] bg-amber-950">Content</div>
  </div>
</div>
  );
}
