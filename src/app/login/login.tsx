"use client";
import { LoginForm } from "@/components/login-form";
import MyAnimation from "@/components/animation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="flex items-center justify-center p-4">
        <LoginForm />
      </div>
      <div className="flex justify-center">
        <div className="hidden bg-white lg:block">
          <MyAnimation />
        </div>
      </div>
    </div>
  );
}
