import { addPrefix, text } from "@/lib/css-presets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

export default async function Page() {

  const tabs = [{ value: "home", class: `before:[mask-image:url("/icons/icon-home.svg")]` }, { value: "search", class: `before:[mask-image:url("/icons/icon-search.svg")]` }, { value: "archived", class: `before:[mask-image:url("/icons/icon-archive.svg")]` }, { value: "tags", class: `before:[mask-image:url("/icons/icon-tag.svg")]` }, { value: "settings", class: `before:[mask-image:url("/icons/icon-settings.svg")]` }];

  return (
    <>
      <Tabs defaultValue="home" className="h-full gap-0">
        <TabsList className="order-1 w-full bg-neutral-0 px-4 py-3 h-fit rounded-none border-t-neutral-200 border-t md:px-0 md:py-3">
          {
            tabs.map(tab => {
              return(
                <div key={tab.value} className="w-full h-8 text-center md:h-12.25 md:border-r md:border-r-neutral-200 md:last:border-0">
                  <TabsTrigger value={tab.value} className={`relative w-full h-full p-0 rounded-1 data-[state=active]:before:bg-blue-700 ${tab.class} ${addPrefix("data-[state=active]:", "bg-blue-50 shadow-none text-blue-700")} ${addPrefix("before:", "cotent-[' '] absolute top-0 left-0 w-full h-full bg-neutral-950 [mask-position:center] [mask-repeat:no-repeat]")} ${addPrefix("md:", "w-20 before:[mask-position:center_0.25rem]")}`}>
                    <span className={`absolute bottom-1 capitalize invisible ${addPrefix("md:", "visible")} ${text["preset-6"]}`}>{tab.value}</span>
                  </TabsTrigger>
                </div>
              )
            })
          }
        </TabsList>
        <TabsContent value="home">Make changes to your account here.</TabsContent>
        <TabsContent value="search">Change your password here.</TabsContent>
        <TabsContent value="archived">Change your password here.</TabsContent>
        <TabsContent value="tags">Change your password here.</TabsContent>
        <TabsContent value="settings">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}