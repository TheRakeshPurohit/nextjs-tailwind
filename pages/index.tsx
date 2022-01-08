import Head from "next/head";

const NavBar = () => (
  <div className="absolute top-0 flex items-center justify-">
    <div className="p-5 bg-purple-600 hover:bg-purple-700 cursor-pointer ">
      Home
    </div>
    <div className="p-5 bg-purple-600 hover:bg-purple-700 cursor-pointer ">
      About
    </div>
    <div className="p-5 bg-purple-600 hover:bg-purple-700 cursor-pointer ">
      Contact
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJs + Tailwind + TypeScript | TheRakeshPurohit</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
  name="description"
  content="NextJS demo with Tailwind CSS and Typescript by TheRakeshPurohit">
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <NavBar />
        
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </div>
  );
}
