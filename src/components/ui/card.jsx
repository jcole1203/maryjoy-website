import * as React from "react";
import { cn } from "../../lib/utils";


export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card text-card-foreground shadow-sm p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
