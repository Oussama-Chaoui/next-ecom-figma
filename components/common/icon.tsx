import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import SVG from "./svg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you want
});

const Icon = ({ title }: { title?: string }) => {
  if (!title) return <SVG name="logo" />;
  return (
    <div className="flex items-center gap-1">
      <SVG name="logo" />

      <h1 className={cn("text-[34px] font-bold", montserrat.className)}>
        {title}
      </h1>
    </div>
  );
};

export default Icon;
