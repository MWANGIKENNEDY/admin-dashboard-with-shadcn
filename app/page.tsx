import AppareaChart from "@/components/AppareaChart";
import AppbarChart from "@/components/AppbarChart";
import AppPieChart from "@/components/AppPieChart";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">

<AppbarChart/>
      </div>


      <div className="bg-primary-foreground p-4 rounded-lg">


      </div>


      <div className="bg-primary-foreground p-4 rounded-lg">

<AppPieChart/>
      </div>


      <div className="bg-primary-foreground p-4 rounded-lg">


      </div>


      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">

<AppareaChart/>
      </div>


      <div className="bg-primary-foreground p-4 rounded-lg">


      </div>

    </div>
  );
}
