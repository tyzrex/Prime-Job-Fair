import { cn } from "@/lib/utils";

export default function SectionInfo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-[14px]",
        "text-[#333] font-normal",
        "md:text-[18px]",
        "lg:text-[20px] lg:leading-[30px]",
        "lg:my-5 lg:space-y-6",
        "text-justify",
        "my-2",
        "md:my-3 md:space-y-4",
        "space-y-3"
      )}
    >
      {children}
    </div>
  );
}
