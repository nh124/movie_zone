import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export const PageLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className="w-full h-[130vh] sm:h-[120vh] bg-[#283747] flex flex-col justify-center items-center sm:py-[2%]">
      <Navbar />
      <div className="bg-[#283747] w-full h-full max-w-[1920px]">
        <div className="w-full h-full flex flex-col gap-3 px-2 py-2 bg-[#283747]">
          {props.children}
        </div>
      </div>
    </div>
  );
};
