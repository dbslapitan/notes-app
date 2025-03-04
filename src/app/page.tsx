export default function Home() {

  return (
    <>
      <header className="hidden">
        Header
      </header>
      <main className="grow-1 2xl:grid 2xl:grid-cols-[fit-content(0)_fit-content(0)_auto_fit-content(0)] 2xl:grid-rows-[fit-content(0)_fit-content(0)_auto_fit-content(0)]">
        <div className="bg-amber-50 order-1">home</div>
        <div className="bg-amber-500 order-3 justify-self-end">search</div>
        <div className="bg-blue-400 order-5">archived</div>
        <div className="bg-cyan-300 order-2 2xl:row-span-4">notes</div>
        <div className="bg-emerald-200 order-6 2xl:row-span-3 2xl:col-span-2">note</div>
        <div className="bg-fuchsia-300 order-7">tags</div>
        <div className="bg-lime-200 order-4">settings</div>
      </main>
    </>
  );
    
}
