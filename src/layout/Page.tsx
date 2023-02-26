import React from 'react'

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <main className="min-w-full min-h-max bg-primary">
        {children}
    </main>
  )
}
