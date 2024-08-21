import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./NavigationBar";
import MatDotLogo from "../../../public/assets/logo/MatDotLogo.png";

export default function Header() {
  return (
    <div className="flex flex-row">
      <Link href="/">
        <div className="flex items-center ml-8 mr-8 cursor-pointer">
          <Image src={MatDotLogo} alt="MatDot Logo" width={120} height={120} />
        </div>
      </Link>
      <div className="flex flex-row">
        <NavigationBar />
      </div>
    </div>
  );
}
