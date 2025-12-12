import * as React from "react";

import { cn } from "./utils";

function Card({ className, children, ...props }: React.ComponentProps<"div">) {
  const bubbles = [
    { position: "-right-8 -top-10", size: "size-20", gradient: "from-slate-600/35 via-slate-700/28 to-slate-800/22", animation: "group-hover/card:animate-[bubble-wander-1_1.5s_ease-in-out]" },
    { position: "-left-12 -bottom-12", size: "size-22", gradient: "from-slate-700/32 via-slate-600/26 to-slate-800/20", animation: "group-hover/card:animate-[bubble-wander-2_1.75s_ease-in-out]" },
    { position: "-right-6 bottom-8", size: "size-18", gradient: "from-gray-600/30 via-gray-700/24 to-slate-800/18", animation: "group-hover/card:animate-[bubble-wander-3_1.6s_ease-in-out]", hidden: "max-[700px]:hidden" },
    { position: "-left-8 top-6", size: "size-16", gradient: "from-slate-700/28 via-gray-700/22 to-slate-800/16", animation: "group-hover/card:animate-[bubble-wander-4_1.8s_ease-in-out]", hidden: "max-[1050px]:hidden" },
    { position: "-right-4 -bottom-6", size: "size-20", gradient: "from-gray-700/32 via-slate-600/26 to-slate-800/20", animation: "group-hover/card:animate-[bubble-wander-5_1.55s_ease-in-out]", hidden: "max-[1050px]:hidden" },
  ];

  return (
    <div
      data-slot="card"
      className={cn(
        "@container bg-card text-card-foreground relative isolate flex flex-col gap-6 overflow-hidden rounded-xl border group/card group",
        className,
      )}
      {...props}
    >
      {bubbles.map((bubble, idx) => (
        <span
          key={idx}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute rounded-full bg-gradient-to-br blur-lg opacity-95 mix-blend-screen transition-transform duration-250 ease-out will-change-transform",
            bubble.position,
            bubble.size,
            bubble.gradient,
            bubble.animation,
            bubble.hidden,
          )}
        />
      ))}
      <div className="relative z-10">{children}</div>
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
