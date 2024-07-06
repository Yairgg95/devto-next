import Navbar from "@/components/Navbar";
import LeftAside from "@/components/LeftAside";
import MainContent from "@/components/MainContent";
import RightAside from "@/components/RightAside";
import { getPosts, getUsers } from "@/lib/api";

export default function Home({ posts, users }) {

  
  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr_1.5fr] grid-rows-[55px_1fr]  bg-[#F5F5F5] h-lvh">
      <Navbar />
      <LeftAside />
      <MainContent posts={posts} users={users} />
      <RightAside/>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getPosts();
    const users = await getUsers();

    return {
      props: {
        posts,
        users: users || []
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        posts: [],
        users: [],
      },
    };
  }
}
