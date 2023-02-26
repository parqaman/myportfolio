import { BaseLayout, BaseLayoutProps } from './BaseLayout';

export type AppLayoutProps = Partial<BaseLayoutProps>;
import React from 'react';

const headerRightMenu = (
    <div>
        <ul className="menu menu-horizontal px-1">
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
)

export const AppLayout = (props: AppLayoutProps) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BaseLayout headerRightMenu={headerRightMenu}>
        {props.children}
    </BaseLayout>
  );
};