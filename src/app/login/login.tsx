"use client";
import { LoginForm } from "@/components/login-form";
import MyAnimation from "@/components/animation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2 overflow-auto scrollbar-hide items-center justify-center">
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden bg-white lg:block">
          <MyAnimation />
        </div>
      </div>
    </div>
  );
}
