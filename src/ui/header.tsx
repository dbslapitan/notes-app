import Image from "next/image";
import Link from "next/link";
import logo from "/public/icons/logo.svg";

export default function Header(){
  return(
    <header className="px-4 py-3">
      <Link href={`/`} className={``}>
        <Image src={logo} alt="quill on the left and a word notes on the right in long hand"/>
      </Link>
    </header>
  );
}