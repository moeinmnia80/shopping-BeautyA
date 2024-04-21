import { FC, ReactNode } from "react";

import Header from "@layouts/header/Header";
import Footer from "@layouts/footer/Footer";
import { scrollToTop } from "@utils/helper";

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => {
  scrollToTop();

  return (
    <>
      <Header />
      <main className="bg-background pb-14">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
