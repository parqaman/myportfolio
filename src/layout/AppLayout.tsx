import { BaseLayout, BaseLayoutProps } from './BaseLayout';

export type AppLayoutProps = Partial<BaseLayoutProps>;
import React from 'react';
import { Link } from 'react-scroll';

const headerRightMenu = (
  <ul className="menu-horizontal py-3">
    <li><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md' smooth to={'home'}>
      Home
    </Link></li>

    <li><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md' smooth to={'about'}>
      About
    </Link></li>

    <li><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md' smooth to={'projects'}>
        Projects
    </Link></li>

    <li><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md' smooth to={'contact'}>
      Contact
    </Link></li>
  </ul>
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