import Image from "next/image";
import Link from "next/link";
import lightLogo from "/public/icons/light-logo.svg";
import darkLogo from "/public/icons/dark-logo.svg";

export default function Header(){
  return(
    <header className="px-4 py-3">
      <Link href={`/`}>
        <Image src={lightLogo} className="dark:hidden" alt="quill on the left and a word notes on the right in long hand" priority/>
        <Image src={darkLogo} className="hidden dark:inline" alt="quill on the left and a word notes on the right in long hand" priority/>
      </Link>
    </header>
  );
}