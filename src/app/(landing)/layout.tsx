import { NavigationBar } from "./_components/NavigationBar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <NavigationBar />
      <main className="mt-12">{children}</main>
    </>
  );
};

export default LandingLayout;
