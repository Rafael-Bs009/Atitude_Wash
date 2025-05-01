import { ReactNode } from "react";

export type Service = {
  title: string;
  description: string | ReactNode;
  icon: ReactNode;
  linkText: string;
};
