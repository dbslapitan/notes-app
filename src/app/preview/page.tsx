import { URI } from "@/lib/constants";
import MobileLayout from "@/ui/mobile-layout";
import axios from "axios";

export default async function Page() {
  
  const {data: notes} = await axios.get(`${URI}/api/v1/preview`);

  return (
    <>
      <MobileLayout notes={notes}/>
    </>
  );
}