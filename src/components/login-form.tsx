import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid gap-6 p-6 md:p-8 lg:p-10", className)} {...props}>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/assets/climbs-logo.jpg"
          alt="Climbs Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
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
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
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
