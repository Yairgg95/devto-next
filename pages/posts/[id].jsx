import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getPostByID } from "@/lib/api";

export default function PostDetail({ posts }) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!id) return;

    const token = localStorage.getItem("token");

    getPostByID(id)
      .then((postData) => {
        setPost(postData.data?.post || {});
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const user = post.user;

  return (
    <>
      <main className="col-start-1 col-end-11 grid grid-rows-10 bg-[#F5F5F5]">
        <Navbar />
        <div className="grid grid-cols-9 mt-[7%]">
          <div className="col-start-1 flex flex-col">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="col-start-2 col-end-7 rounded-md border flex flex-col bg-white w-[100%] h-[750px]">
            {post.image && <img src={post.image} alt="" className="rounded" />}
            <div className="pl-10 pt-4">
              {user && (
                <div className="flex flex-row mb-3">
                  <img
                    src={user.profilePic}
                    alt={user.userName}
                    className="rounded-full h-10 w-10"
                  />
                  <div className="flex flex-col ml-1">
                    <p>{user.userName}</p>
                    <p className="opacity-30 text-xs">
                      {new Date(post.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
              )}
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <div className="flex flex-row mt-3.5 mb-10">
                {post.tags?.map((tag) => (
                  <div className="mr-5" key={`tag-${tag}`}>
                    <p>#{tag}</p>
                  </div>
                ))}
              </div>
              <p>{post.body}</p>
            </div>
          </div>
          <div className="col-start-7 col-end-9 rounded-md border flex flex-col ml-5 bg-white w-[100%] h-[400px] pl-5 pr-5 pt-3">
            {user && (
              <div className="flex flex-row mb-3">
                <img
                  src={user.profilePic}
                  alt={user.userName}
                  className="rounded-full h-10 w-10"
                />
                <div className="flex flex-col ml-1 self-end">
                  <p>{user.userName}</p>
                </div>
              </div>
            )}
            <button className="bg-[#3B49DF] text-white rounded-md h-[10%]">
              Follow
            </button>
            <div className="flex flex-col mt-3">
              <p className="opacity-50 mb-4">Frontend Developer</p>
              <p className="font-semibold text-md">Location</p>
              <p className="mb-2">Congo (RDC)</p>
              <p className="font-semibold text-md">Education</p>
              <p className="mb-2">Kadea Academy</p>
              <p className="font-semibold text-md">Joined</p>
              <p className="mb-2">Jul 12, 2023</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
