import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import SVG from "./svg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you want
});

const Icon = ({ title }: { title?: string }) => {
  if (!title) return <SVG name="logo"  />;
  return (
    <div className="flex items-center gap-1">
      <div className="md:block hidden">
        <SVG name="logo" />
      </div>
      <div className="block md:hidden">
        <SVG name="logo" height={28} width={35} />
      </div>

      <h1 className={cn("md:text-[34px] font-bold text-xl", montserrat.className)}>
        {title}
      </h1>
    </div>
  );
};

export default Icon;
