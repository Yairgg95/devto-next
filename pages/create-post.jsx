import { useForm } from "react-hook-form";
import { getUsers, newPost } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const { handleSubmit, register, formState: { errors } } = useForm();

  async function onSubmit(data) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token) {
      try {
        const response = await getUsers(token);
        if (response && response.data && Array.isArray(response.data.Users)) {
          const users = response.data.Users;
          const user = users.find(user => user.email === email);

          if (user) {
            await newPost(data.title, data.image, data.body, user._id, token);
            router.push("/");
          } else {
            console.error("User not found");
          }
        } else {
          console.error("Invalid response structure:", response);
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    } else {
      console.error("Token not found");
    }
  }

  return (
    <main className="bg-[#F5F5F5] max-h-fit">
      <button onClick={() => router.push("/")}>
        <img
          className="h-[40px] w-[45px] md:h-[45px] md:w-[50px] md:m-2"
          src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt="logo"
        />
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border mt-[50px] md:mt-[80px] relative rounded-md md:w-[100%] h-[700px] bg-white lg:ml-[90px] lg:w-[66%] 2xl:w-[60%] 2xl:ml-[150px]"
      >
        <div className="flex flex-col w-full md:top-[8%] md:left-[13%]">
          <input
            type="text"
            placeholder="Add a cover photo"
            className="h-[40px] w-[83%] md:w-[50%] border rounded-lg p-3 text-center text-md"
            {...register("image", { required: false })}
          />
          <input
            className="font-bold w-full text-center overflow-hidden text-ellipsis text-3xl mt-6 mb-4 md:text-5xl"
            type="text"
            placeholder="New post title here..."
            {...register("title", { required: true })}
          />
        </div>
        <div className="bg-[#F5F5F5] absolute top-[34%] w-[100%] h-[60px] md:top-[39%] md:p-4 items-center border flex flex-row">
          <img
            className="h-[30px] w-[30px] mr-4 hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-1"
            src="https://img.icons8.com/?size=100&id=Ao9Capo3tPjH&format=png&color=000000"
            alt=""
          />
          <img
            className="h-[30px] w-[30px] mr-4 hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
            src="https://img.icons8.com/?size=100&id=78944&format=png&color=000000"
            alt=""
          />
          <img
            className="h-[30px] w-[30px] mr-4 hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
            src="https://img.icons8.com/?size=100&id=16073&format=png&color=000000"
            alt=""
          />
          <img
            className="h-[30px] w-[30px] mr-4 hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
            src="https://img.icons8.com/?size=100&id=11266&format=png&color=000000"
            alt=""
          />
          <img
            className="h-[30px] w-[30px] mr-4 hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
            src="https://img.icons8.com/?size=100&id=8800&format=png&color=000000"
            alt=""
          />
          <img
            className="h-[30px] w-[30px] mr-4 hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
            src="https://img.icons8.com/?size=100&id=88166&format=png&color=000000"
            alt=""
          />
        </div>
        <input
          type="text"
          placeholder="Write your post content here..."
          className="absolute top-[49%] h-[51%] w-[100%] text-2xl p-3 align-top"
          {...register("body", { required: true })}
        />
        <div className="absolute top-[100%] flex flex-row">
          <button type="submit" className="bg-[#3B49DF] text-white ml-2 h-[45px] mt-4 rounded-md w-[100px]">
            Publish
          </button>
          <button className="ml-3 hover:text-[#8892ff] hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 h-[45px] mt-4 rounded-md w-[100px]">
            Save draft
          </button>
        </div>
      </form>
    </main>
  );
}