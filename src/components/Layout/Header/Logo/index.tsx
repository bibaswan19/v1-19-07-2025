import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src= {`${getImagePrefix()}images/logo/Asset 5@2x.png`}
        alt="logo"
        width={0}
        height={0}
        style={{ width: "20vh", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
