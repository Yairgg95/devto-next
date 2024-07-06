import Link from "next/link";

export default function Posts({ posts }) {
  console.log(posts);

  function handleClick() {}

  return (
    <section className="mt-4">
      {posts.map((post, idx) => {
        const user = post.user;
        return (
          <Link key={`post-link-${post._id}`} href={`/posts/${post._id}`}>
            <article
              className="border rounded-md mb-3 bg-white cursor-pointer"
              onClick={handleClick}
            >
              {idx === 0 && (
                <img
                  src={post.image}
                  alt=""
                  className="border rounded-md w-full"
                />
              )}
              <div className="m-5">
                {user && (
                  <div className="flex items-center">
                    <img
                      src={user.profilePic}
                      alt={user.userName}
                      className="rounded-full h-10 w-10"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">{user.userName}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
                <h2 className="mt-2 mb-4 text-xl font-semibold">{post.title}</h2>
                <p className="mb-4">{post.body}</p>
                <div className="m-5 flex flex-row ">
                  {post.tags?.map((tag, tagIdx) => (
                    <div key={`tag-${tagIdx}`} className="mr-5">
                      <p>#{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="m-5 flex flex-row  ">
                  <div className="flex flex-row items-center">
                    <img
                      src="https://img.icons8.com/?size=100&id=AiTe9HD0R6qV&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=MiaB7VmxAIAO&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=VPImuRG4xXS2&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=101728&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=V6zmBDTUPL-g&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]   "
                    />
                    <p className="ml-2 text-xs hidden md:block">135 Reactions</p>
                  </div>
                  <div className=" flex flex-row ml-[10%] md:ml-[5%]">
                    <img
                      src="https://img.icons8.com/?size=100&id=547sAUNETri4&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] mr-2 md:h-[17px] md:w-[17px]"
                    />
                    <p className="text-xs">24</p><span className="text-xs hidden md:block">Comments</span>
                  </div>
                  <div className=" ml-[23%] md:ml-[10%] flex flex-row">
                    <p className="text-sm mr-4 md:text-xs">5 min read</p>
                    <img
                      src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] md:h-[17px] md:w-[17px]"
                    />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}