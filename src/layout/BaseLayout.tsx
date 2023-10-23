import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { AppHeader, AppHeaderProps } from "./AppHeader";
import { Page, PageProps } from "./Page";
import { useEffect, useRef, useState } from "react";

export type BaseLayoutProps = AppHeaderProps & PageProps;

export const BaseLayout = ({
  headerRightMenu,
  ...pageProps
}: BaseLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [showNavbarBorder, setshowNavbarBorder] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 750) setshowNavbarBorder(true);
    else setshowNavbarBorder(false);
  });

  return (
    <div className="text-white bg-primary" ref={ref}>
      <AppHeader
        headerRightMenu={headerRightMenu}
        showNavbarBorder={showNavbarBorder}
      />
      <Page {...pageProps} />
    </div>
  );
};
