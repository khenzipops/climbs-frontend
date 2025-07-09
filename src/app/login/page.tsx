import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid h-screen w-full lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
      <div className="hidden bg-gray-100 lg:block">
        <Image
          src="/assets/background-Image.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
