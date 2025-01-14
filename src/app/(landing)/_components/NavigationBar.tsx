import Link from "next/link";
import { Button } from "~/components/ui/button";

export const NavigationBar = () => {
  return (
    <nav className="flex h-20 items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">Taskure</h1>
      <div className="flex gap-4">
        <Button variant="ghost" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Get started</Link>
        </Button>
      </div>
    </nav>
  );
};
