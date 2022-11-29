import { LayoutProps } from "@/models/common";
import * as React from "react";

export interface IEmptyLayoutProps {}

export default function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
