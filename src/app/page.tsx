import LoginForm from "@/components/Login";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen bg-gray-100">
        {/* Container for split screen */}
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left side - Image/Content */}
          <div className="lg:w-1/2 md:w-full sm:w-full bg-white flex items-center justify-center">
            <img
              src="/assets/background-image.jpg"
              alt="Decorative"
              className="w-full h-full object-cover" // Key styles
            />
          </div>

          {/* Right side - Login Form */}
          <div className="lg:w-1/2 md:w-full sm:w-full bg-white flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex justify-center mb-4">
                <img
                  src="/assets/climbs-logo.jpg"
                  alt="Decorative"
                  className="w-30 h-full object-cover" // Key styles
                />
              </div>
              <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                Welcome back to{" "}
                <Link href="/climbs/dashboard">
                  <span className="text-[#1c3df5]"> CLIMBS</span>
                </Link>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
