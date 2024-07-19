"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="grid grid-rows-3">
      <Link href="/">top</Link>
      <Link href="/aboutme">about me</Link>
      <Link href="/link">linl</Link>
    </div>
  );
}

export default Header;
