import { motion } from "framer-motion";

export type AppHeaderProps = {
  headerRightMenu: React.ReactNode;
  showNavbarBorder?: boolean;
};

export const AppHeader = ({
  headerRightMenu,
  showNavbarBorder,
}: AppHeaderProps) => {
  return (
    <div
      className={`hidden sm:flex flex-col w-full bg-transparent z-30 fixed items-center justify-center backdrop-filter backdrop-blur-sm`}
    >
      <div>{headerRightMenu}</div>
      <motion.div
        className=" h-0.5 w-full bg-secondary"
        initial={{ width: 0 }}
        animate={{ width: showNavbarBorder ? "100%" : 0 }}
      />
    </div>
  );
};
