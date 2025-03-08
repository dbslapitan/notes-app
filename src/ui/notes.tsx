"use client";

import { text } from "@/lib/css-presets";
import { INote } from "@/models/note";
import { ScrollArea } from "./scroll-area";
import { RefObject, useEffect, useRef, useState } from "react";
import { Badge } from "./badge";

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
      setScrollHeight();
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
        <ul className="mt-4">
          {
            notes.map(note => {
              return(
                <li key={note._id} className="p-2 border-b border-b-neutral-200 last-of-type:border-b-0">
                  <h2 className={`${text["preset-3"]}`}>{note.title}</h2>
                  <ul className="flex mt-3 gap-1">
                    {
                      note.tags.map(tag => {
                        return <li key={tag}><Badge className={`${text["preset-6"]} bg-neutral-200 text-neutral-950`}>{tag}</Badge></li>
                      })
                    }
                  </ul>
                  <p className={`${text["preset-6"]} mt-3`}>{(new Date(note.lastEdited)).toLocaleDateString("en-GB", {day: "numeric", month: "short", year: "numeric"})}</p>
                </li>
              );
            })
          }
        </ul>
      </ScrollArea>
    </>
  );
}