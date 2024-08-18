import LayoutSite from "@/components/site/layout/LayoutSite";
import React, { FC, ReactNode } from "react";

interface LayoutType {
  children: ReactNode;
}

const layout: FC<LayoutType> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
