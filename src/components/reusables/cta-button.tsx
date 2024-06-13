import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CTAButton({ className }: { className?: string }) {
  return (
    <>
      <Button className={cn("bg-red-500 text-white w-full", className)}>
        REGISTER NOW
      </Button>
    </>
  );
}
