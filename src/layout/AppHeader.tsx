export type AppHeaderProps = {
  headerRightMenu: React.ReactNode;
};

export const AppHeader = ({headerRightMenu}: AppHeaderProps) => {
  return (
    <div className="hidden sm:flex w-full bg-primary z-10 border-b-navbar border-b-1.5 fixed items-center justify-center p-2">
        {headerRightMenu}
    </div>
  );
};