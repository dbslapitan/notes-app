import { text } from "@/lib/css-presets";
import Header from "./header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import Notes from "./notes";
import { INote } from "@/models/note";
import CreateNote from "./create-note";

export default function MobileLayout({notes}: {notes: INote[]}){

  const tabs = [{ value: "home", class: `before:[mask-image:url("/icons/icon-home.svg")]` }, { value: "search", class: `before:[mask-image:url("/icons/icon-search.svg")]` }, { value: "archived", class: `before:[mask-image:url("/icons/icon-archive.svg")]` }, { value: "tags", class: `before:[mask-image:url("/icons/icon-tag.svg")]` }, { value: "settings", class: `before:[mask-image:url("/icons/icon-settings.svg")]` }];

  return(
    <>
      <Header />
      <main className="h-full">
        <Tabs defaultValue="home" className="h-full gap-0">
          <TabsList className="order-1 w-full bg-neutral-0 px-4 py-3 h-fit rounded-none shadow-sm dark:shadow-d-sm border-t-neutral-200 border-t md:px-0 md:py-3 dark:bg-neutral-950 dark:border-t-neutral-800">
            {
              tabs.map(tab => {
                return(
                  <div key={tab.value} className="w-full h-fit text-center border-r border-r-transparent last:border-0 md:border-r-neutral-200 md:dark:border-r-neutral-800">
                    <TabsTrigger value={tab.value} className={`relative w-full h-clamp1 p-0 rounded-1 max-w-20 m-auto ${tab.class} data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 before:content-[" "] before:block before:w-full before:h-full before:bg-neutral-950 before:[mask-position:center_0.25rem] before:[mask-repeat:no-repeat] data-[state=active]:before:bg-blue-700 data-[state=active]:dark:shadow-none dark:data-[state=active]:bg-neutral-700 dark:text-[#99A0AE] dark:before:bg-[#99A0AE] dark:data-[state=active]:text-blue-500`}>
                      <span className={`absolute bottom-1 capitalize invisible md:visible ${text["preset-6"]} md:`}>{tab.value}</span>
                    </TabsTrigger>
                  </div>
                )
              })
            }
          </TabsList>
          <TabsContent value="home" className={`grow relative bg-neutral-0 rounded-t-[8px] dark:bg-neutral-950 py-5 px-4`}>
            <Notes notes={notes}/>
            <CreateNote />
          </TabsContent>
          <TabsContent value="search" className={`grow bg-neutral-0 rounded-t-[8px] dark:bg-neutral-950`}>Change your password here.</TabsContent>
          <TabsContent value="archived" className={`grow bg-neutral-0 rounded-t-[8px] dark:bg-neutral-950`}>Change your password here.</TabsContent>
          <TabsContent value="tags" className={`grow bg-neutral-0 rounded-t-[8px] dark:bg-neutral-950`}>Change your password here.</TabsContent>
          <TabsContent value="settings" className={`grow bg-neutral-0 rounded-t-[8px] dark:bg-neutral-950`}>Change your password here.</TabsContent>
        </Tabs>
      </main>
    </>
  );
}