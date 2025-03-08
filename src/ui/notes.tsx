"use client";

import { text } from "@/lib/css-presets";
import { INote } from "@/models/note";
import { ScrollArea } from "./scroll-area";
import { RefObject, useEffect, useRef, useState } from "react";

export default function Notes({notes, bottomRef}: {notes: INote[], bottomRef: RefObject<null | HTMLDivElement>}){

  const scrollRef = useRef<null | HTMLDivElement>(null);
  const initialLoadRef = useRef(false);

  useEffect(() => {
    const setScrollHeight = () => {
      const top = (scrollRef.current as HTMLDivElement)?.getBoundingClientRect().top;
      const bottom = (bottomRef.current as HTMLDivElement)?.getBoundingClientRect().height;
      (scrollRef.current as HTMLDivElement).setAttribute("style", `height: ${window.innerHeight - top - bottom}px`);
    }

    if(!initialLoadRef.current){
      window.addEventListener("resize", setScrollHeight);
    }

    initialLoadRef.current = true;

    return () => {
      window.removeEventListener("resize", setScrollHeight);
    }
  });

  return(
    <>
      <h1 className={`${text["preset-1"]}`}>Notes</h1>
      <ScrollArea ref={scrollRef} className="h-0">
        <ul>
          {
            <li>
              
            </li>
          }
        </ul>
      </ScrollArea>
    </>
  );
}