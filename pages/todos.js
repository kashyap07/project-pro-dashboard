import Todo from "../components/Todo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="bg-gray-200 w-full h-20 text-3xl p-4">
        Project Pro
      </header>
      <div className="flex w-full h-full">
        <nav className="hidden xl:block w-1/6 h-screen border-r-8 text-3xl p-4">
          Navigation
        </nav>
        <main className="flex-grow">
          <Todo />
        </main>
      </div>
    </div>
  );
}
