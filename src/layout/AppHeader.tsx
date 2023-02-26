import { Nav } from './Nav';

export type AppHeaderProps = {
  headerRightMenu: React.ReactNode;
};

export const AppHeader = ({headerRightMenu}: AppHeaderProps) => {
  return (
    <div className="w-full bg-navbar fixed flex items-center justify-between p-2 shadow-md">
        <p className="text-2xl font-semibold">FA</p>
        <Nav>{headerRightMenu}</Nav>
    </div>
  );
};