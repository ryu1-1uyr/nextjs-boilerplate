import Image from "next/image";
import image from "@/public/konoka2.jpg";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <p>こにちわ～</p>
      <Image src={image.src} alt="" width={500} height={500} />
    </main>
  );
}
