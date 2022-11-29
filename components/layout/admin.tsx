import { LayoutProps } from "@/models/common";
import * as React from "react";

export interface IAdminLayoutProps {}

export default function AdminLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
