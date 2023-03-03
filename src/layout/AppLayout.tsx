import { BaseLayout, BaseLayoutProps } from './BaseLayout';

export type AppLayoutProps = Partial<BaseLayoutProps>;
import React from 'react';
import { Link } from 'react-scroll';

const headerRightMenu = (
  <ul className="menu-horizontal py-3">
    <li className='flex flex-col items-center justify-center'><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md text-center' smooth duration={500} to={'home'}>
      Home
    </Link></li>

    <li className='flex flex-col items-center justify-center'><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md text-center' smooth duration={500} to={'about'}>
      About
    </Link></li>

    <li className='flex flex-col items-center justify-center'><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md text-center' smooth duration={500} to={'tech-stacks'}>
        Tech Stack
    </Link></li>

    <li className='flex flex-col items-center justify-center'><Link className='p-3 mx-2 cursor-pointer hover:bg-slate-800 rounded-md text-center' smooth duration={500} to={'contact'}>
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