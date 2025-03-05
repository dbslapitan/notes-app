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
                  <TabsTrigger value={tab.value} className={`relative w-full h-full p-0 rounded-1 data-[state=active]:shadow-none data-[state=active]:bg-blue-50 before:cotent-[" "] before:absolute before:top-0 before:left-0 before:w-full before:h-full ${tab.class} before:bg-neutral-950 before:[mask-position:center] before:[mask-repeat:no-repeat] data-[state=active]:before:bg-blue-700 md:w-20`}>
      
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