import { LayoutProps } from "@/models/common";
import Link from "next/link";
import * as React from "react";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  );
}
