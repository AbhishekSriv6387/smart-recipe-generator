"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChefHat, Heart, Home, Utensils } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const link = (href: string, label: string, Icon: any) => (
    <Link
      key={href}
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800",
        pathname === href && "bg-gray-100 dark:bg-neutral-800 font-medium"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold">
          <ChefHat className="h-5 w-5" /> Smart Recipe
        </Link>
        <div className="hidden gap-1 md:flex">
          {link("/", "Home", Home)}
          {link("/recipes", "Recipes", Utensils)}
          {link("/favorites", "Favorites", Heart)}
        </div>
      </nav>
    </header>
  );
}
