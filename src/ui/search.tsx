"use client";

import { text } from "@/lib/css-presets";
import Image from "next/image";
import search from "../../public/icons/icon-search.svg";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter } from "next/navigation";

export default function Search({className = ""}: {className?: string}) {

  const router = useRouter();
  const path = usePathname();

  const handleInputChange = useDebouncedCallback((value: string) => {
    router.push(`${path}?search=${value}`);
  }, 500);

  return(
    <div className={`relative mt-4 ${className}`}>
      <Image alt="" src={search} className="absolute left-0 top-[50%] translate-y-[-50%] ml-4"/>
      <input type="text" className={`${text["preset-5"]} w-full p-4 pl-11 leading-[1.3] border border-neutral-300 rounded-[0.5rem]`} onChange={(e) => handleInputChange(e.target.value)}/>
    </div>
  );
}