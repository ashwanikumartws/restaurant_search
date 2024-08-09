import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NoRoute = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NoRoute;
