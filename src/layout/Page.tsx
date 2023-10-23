import React from "react";

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <main className="w-full min-h-max px-4 bg-transparent">{children}</main>
  );
};
