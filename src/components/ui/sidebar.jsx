import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* ------------------------------------------------------------------ */
/* constants */
/* ------------------------------------------------------------------ */

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

/* ------------------------------------------------------------------ */
/* context */
/* ------------------------------------------------------------------ */

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

/* ------------------------------------------------------------------ */
/* provider */
/* ------------------------------------------------------------------ */

const SidebarProvider = React.forwardRef(function SidebarProvider(
  {
    defaultOpen = true,
    open: openProp,
    onOpenChange,
    className,
    style,
    children,
    ...props
  },
  ref
) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);

  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value) => {
      const next = typeof value === "function" ? value(open) : value;
      onOpenChange ? onOpenChange(next) : _setOpen(next);
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${next}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [open, onOpenChange]
  );

  const toggleSidebar = React.useCallback(() => {
    isMobile
      ? setOpenMobile((v) => !v)
      : setOpen((v) => !v);
  }, [isMobile, setOpen]);

  React.useEffect(() => {
    const handler = (e) => {
      if (
        e.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (e.metaKey || e.ctrlKey)
      ) {
        e.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const value = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    }),
    [state, open, openMobile, isMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>
      <TooltipProvider delayDuration={0}>
        <div
          ref={ref}
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          }}
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});

/* ------------------------------------------------------------------ */
/* sidebar */
/* ------------------------------------------------------------------ */

const Sidebar = React.forwardRef(function Sidebar(
  {
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  },
  ref
) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent
          side={side}
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
        >
          <div className="flex h-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      data-state={state}
      data-side={side}
      data-variant={variant}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      className="group peer hidden md:block"
    >
      <div
        className={cn(
          "fixed inset-y-0 z-10 flex w-[--sidebar-width] transition-all",
          side === "left" ? "left-0" : "right-0",
          state === "collapsed" && collapsible === "offcanvas" &&
            (side === "left"
              ? "-left-[--sidebar-width]"
              : "-right-[--sidebar-width]"),
          className
        )}
        {...props}
      >
        <div className="flex h-full w-full flex-col bg-sidebar">
          {children}
        </div>
      </div>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/* trigger */
/* ------------------------------------------------------------------ */

const SidebarTrigger = React.forwardRef(function SidebarTrigger(
  { className, ...props },
  ref
) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn("h-7 w-7", className)}
      onClick={toggleSidebar}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});

/* ------------------------------------------------------------------ */
/* menu button */
/* ------------------------------------------------------------------ */

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md p-2 text-sm transition hover:bg-sidebar-accent",
  {
    variants: {
      size: {
        sm: "h-7 text-xs",
        default: "h-8 text-sm",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const SidebarMenuButton = React.forwardRef(function SidebarMenuButton(
  {
    asChild = false,
    isActive,
    size,
    tooltip,
    className,
    ...props
  },
  ref
) {
  const Comp = asChild ? Slot : "button";
  const { state, isMobile } = useSidebar();

  const btn = (
    <Comp
      ref={ref}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ size }), className)}
      {...props}
    />
  );

  if (!tooltip) return btn;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{btn}</TooltipTrigger>
      <TooltipContent
        side="right"
        hidden={state !== "collapsed" || isMobile}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
});

/* ------------------------------------------------------------------ */
/* exports */
/* ------------------------------------------------------------------ */

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenuButton,
  useSidebar,
};
