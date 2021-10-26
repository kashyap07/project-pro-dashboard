import Dashboard from "../components/Dashboard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProjectPro Dashboard</title>
      </Head>
      <div className="flex flex-col">
        <header className="bg-gray-200 w-full h-20 text-3xl p-4">
          Project Pro
        </header>
        <div className="flex w-full h-full">
          <nav className="hidden xl:block w-1/6 h-screen border-r-8 text-3xl p-4">
            Navigation
          </nav>
          <main className="flex-grow">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
}
