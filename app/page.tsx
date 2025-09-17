import Image from "next/image";
import { Metadata } from "next";

export default async function Home() {
  return (
    <main>
      <Image
        src="https://bit.ly/react-cover"
        alt="react cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}

export const metadata: Metadata = {
  title: '...',
  description: '...',
}
