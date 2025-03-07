import { text } from "@/lib/css-presets";
import { INote } from "@/models/note";

export default function Notes({notes}: {notes: INote[]}){

  return(
    <>
      <h1 className={`${text["preset-1"]}`}>Notes</h1>
    </>
  );
}