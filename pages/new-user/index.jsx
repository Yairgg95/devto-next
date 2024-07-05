import Link from "next/link"

export default function Register() {
    return (
        <main className="flex flex-col justify-items-center items-center p-8">
           <div className="flex flex-col justify-items-center items-center mb-5">
           <img
          className="h-[50px] w-[60px] mb-5"
          src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt="Logo"
        />
        <h1 className="font-bold text-4xl mb-1">Join the DEV Community</h1>
        <h4 className=" opacity-60 text-lg">
          DEV Community is a community of 1,709,848 amazing developers
        </h4>
      </div>
      <div className="flex flex-col justify-items-center items-center w-full md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] p-2 ">
        <button className="flex flex-row border rounded-md w-full mb-3 justify-evenly h-[50px] items-center">
          <img
            className="h-[20px] w-[20px] ml-3"
            src="https://turbologo.com/articles/wp-content/uploads/2018/03/apple-logo-black.png"
            alt="Apple"
          />
          <p className="flex-1">Sign up with Apple</p>
        </button>
        <button className="flex flex-row border rounded-md w-full mb-3 justify-evenly h-[50px] items-center">
          <img
            className="h-[40px] w-[40px] ml-1"
            src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
            alt="Facebook"
          />
          <p className="flex-1">Sign up with Facebook</p>
        </button>
        <button className="flex flex-row border rounded-md w-full mb-3 justify-evenly h-[50px] items-center">
          <img
            className="h-[25px] w-[25px] ml-3 rounded-md"
            src="https://avatars.githubusercontent.com/u/65030610?s=200&v=4"
            alt="Forem"
          />
          <p className="flex-1">Sign up with Forem</p>
        </button>
        <button className="flex flex-row border rounded-md w-full mb-3 justify-evenly h-[50px] items-center">
          <img
            className="h-[25px] w-[25px] ml-3"
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
            alt="GitHub"
          />
          <p className="flex-1">Sign up with GitHub</p>
        </button>
        <button className="flex flex-row border rounded-md w-full mb-3 justify-evenly h-[50px] items-center">
          <img
            className="h-[30px] w-[30px] ml-2.5"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
          />
          <p className="flex-1">Sign up with Google</p>
        </button>
        <button className="flex flex-row border rounded-md w-full mb-3 justify-evenly h-[50px] items-center">
          <img
            className="h-[30px] w-[40px] ml-1.5"
            src="https://t3.ftcdn.net/jpg/06/28/21/10/360_F_628211083_PCJPCvA0I32B6ZCQPOiGVkNnqiSjzFCL.png"
            alt="Twiiter"
          />
          <p className="flex-1">Sign up with Twitter (X)</p>
        </button>
        <Link href="/new-user/register-user" className="flex flex-row border rounded-md w-full mb-3 h-[50px] justify-evenly items-center">
            <div className="flex ml-[0.800rem] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" class="crayons-icon crayons-icon--default">
                <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z"></path>
                </svg>
            </div>
            <p className="flex-1 text-center">Sign up whit Email</p> 
        </Link>
            <div className="p-8 border-b-gray-400/50 border-b-[1px]">
                <p className="text-center"><em>By signing up you are agreeing to our <a className="text-blue-600" href="">privacy policy</a>, <a className="text-blue-600" href="">terms of use</a> and <a className="text-blue-600" href="">code of conduct.</a></em></p>
            </div>
            <p className="w-full text-center p-8">Already have an account? <Link className="text-blue-600" href="/login">Log in</Link></p>
           </div>
        </main>
    )
}