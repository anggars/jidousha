import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
  value: string;
  onValueChange: (val: string) => void;
}
const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export function Tabs({ 
  value, 
  onValueChange, 
  children, 
  className 
}: { 
  value: string; 
  onValueChange: (val: string) => void; 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 p-1 text-zinc-400 border border-zinc-800",
      className
    )}>
      {children}
    </div>
  );
}

export function TabsTrigger({ 
  value, 
  children, 
  className 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used inside Tabs");
  const isActive = context.value === value;
  
  return (
    <button
      onClick={() => context.onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        isActive ? "bg-black text-zinc-100 shadow-sm" : "hover:text-zinc-200",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ 
  value, 
  children, 
  className 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used inside Tabs");
  if (context.value !== value) return null;
  
  return (
    <div className={cn("mt-4 animate-fade-in", className)}>
      {children}
    </div>
  );
}
