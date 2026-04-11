import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full px-4 py-2.5 rounded border border-gray-300 bg-black/5 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#002d80] focus:bg-white transition-all text-sm disabled:cursor-not-allowed disabled:opacity-50 min-h-24 resize-none",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
