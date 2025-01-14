import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 text-center">
        <strong className="text-7xl font-extrabold">Taskure</strong>
        <p className="text-5xl font-semibold">Supercharge team productivity</p>
      </div>
      <Image
        src="https://pbxyyijrpw.ufs.sh/f/8CwjsC31EyoN1vl0l97Da6TZkfMz5s8orgGPlXnJip3UHIwh"
        alt="Image showcasing the app"
        width={1598}
        height={512}
        className="mt-12"
      />
      <p className="mt-8 max-w-sm text-center text-xl font-light md:max-w-xl lg:max-w-2xl">
        Join the ranks of successful teams who have already unlocked their full
        potential with Taskure. Sign up today and experience the future of
        collaborative task management for yourself!
      </p>
      <Button className="mb-12 mt-8" size="lg" asChild>
        <Link href="/sign-up">Get Taskure</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
