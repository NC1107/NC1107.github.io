import Image from "next/image";
import { ContactLinks } from "@/components/ContactLinks";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)]">
      <div className="text-center">
        <Image
          src="/images/headshot.png"
          alt="Nicholas Conn"
          width={200}
          height={200}
          className="rounded-full border-[5px] border-bone mx-auto mb-8"
          priority
        />
        <ContactLinks />
      </div>
    </div>
  );
}
