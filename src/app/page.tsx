import LoginForm from "@/components/Login";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-100">
        {/* Container for split screen */}
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left side - Image/Content */}
          <div className="lg:w-1/2 md:w-full sm:w-full bg-white flex items-center justify-center p-8">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4 text-black">
                Insert Image
              </h1>

              {/* Optional: Add an image here */}
              {/* <img src="/your-image.jpg" alt="Decorative" className="mt-8 mx-auto max-w-xs lg:max-w-md" /> */}
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="lg:w-1/2 md:w-full sm:w-full bg-white flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                Welcome back to <span className="text-[#7747ff]">CLIMBS</span>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
