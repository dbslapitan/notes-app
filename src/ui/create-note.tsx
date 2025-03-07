"use client";

import Image from "next/image";
import plus from "../../public/icons/icon-plus.svg";

export default function CreateNote(){
  return(
    <>
      <button className="p-4 w-fit rounded-full bg-blue-500 absolute bottom-4 right-4">
        <Image src={plus} alt=""/>
      </button>
    </>
  );
}