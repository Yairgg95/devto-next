import Posts from "./Posts";

export default function MainContent({ posts, users }) {
  return (
    <main className="col-start-1 md:col-start-2 md:col-end-3  row-start-2 p-4 ">
      <div className="">
        <header className="flex flex-row ">
          <button className="ml-2 text-xl">Relevant</button>
          <button className="ml-4 text-xl">Latest</button>
          <button className="ml-4 text-xl">Top</button>
        </header>
        <Posts posts={posts} users={users} />
      </div>
    </main>
  );
}