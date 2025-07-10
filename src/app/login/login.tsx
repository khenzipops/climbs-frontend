"use client";
import { LoginForm } from "@/components/login-form";
// import Image from "next/image";
import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation/business-team.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);
  return (
    <div className="grid h-screen w-full lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
      <div className="hidden bg-white lg:block">
        {animationData && (
          <Lottie
            loop
            animationData={animationData}
            play
            className="w-200 flex text-center justify-center items-center"
          />
        )}
      </div>
    </div>
  );
}
