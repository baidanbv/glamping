import Image from "next/image";
import Link from "next/link";

const Logo = ({width = 52,height = 52}) => {
  return (
    <Link href="/" className="relative">
      <Image width={width} height={height} src="/images/logo.png" alt="Glamping logo" />
    </Link>
  );
}

export default Logo