import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, SetshowPassword] = useState(false);

  return (
    <div className={cn("grid gap-6 p-6 md:p-8 lg:p-10", className)} {...props}>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/assets/trophy.png"
          alt="Login illustration"
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold uppercase">itraching system</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
      </div>
      <form>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="username@example.com"
              required
              className="h-10"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                className="p-2 h-10"
              />
              <button
                type="button"
                onClick={() => SetshowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-500"
                tabIndex={-1}
              >
                {showPassword ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeClosed className="w-4 h-4" />
                )}
              </button>
            </div>
            <a href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer h-10"
          >
            Login
          </Button>
          <Button variant="outline" className="w-ful h-10">
            <FaGoogle className="mr-2 text-red-600 " />
            Login with Google
          </Button>
        </div>
      </form>
      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <a href="#" className="underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
