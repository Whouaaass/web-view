import * as React from "react";

import { cn } from "./utils";

function Card({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground relative isolate flex flex-col gap-6 overflow-hidden rounded-xl border group/card",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-400/16 to-cyan-400/18 blur-3xl opacity-60 transition-transform duration-700 ease-out group-hover/card:translate-x-4 group-hover/card:translate-y-3 group-hover/card:scale-105"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 -bottom-20 size-32 rounded-full bg-gradient-to-tr from-amber-400/20 via-rose-400/16 to-fuchsia-500/18 blur-3xl opacity-55 transition-transform duration-700 ease-out group-hover/card:-translate-x-3 group-hover/card:-translate-y-2 group-hover/card:scale-105"
      />
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
