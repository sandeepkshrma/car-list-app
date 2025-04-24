import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>Welcome To Car Listing App</h1>
     <Image
            aria-hidden
            src="/images/VinodImg.jpg"
            alt="File icon"
            width={500}
            height={500}
            unoptimized
          />
     <div/>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </footer>
    </div>
  );
}
