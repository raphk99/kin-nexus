"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  if (pathSegments.length === 0) return null;

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-lime-cyber transition-colors"
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const formattedName = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={segment}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-neutral-600 mx-1" />
                {isLast ? (
                  <span className="text-sm font-medium text-white">{formattedName}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-sm font-medium text-neutral-400 hover:text-lime-cyber transition-colors"
                  >
                    {formattedName}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
