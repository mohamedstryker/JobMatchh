import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="JobMatch">
      <Image src={logo} alt="JobMatch Logo" width={100} height={100} />
    </Link>
  );
}
