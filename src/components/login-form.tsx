import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid gap-6 p-6 md:p-8 lg:p-10", className)} {...props}>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold uppercase">
            Welcome to Itinererary
          </h1>
          <h1 className="text2xl font-bold uppercase"> Tracking system</h1>
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
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required />
            <a href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Button type="submit" variant="outline" className="cursor-pointer">
            Login
          </Button>
          <Button variant="outline" className="w-ful">
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
