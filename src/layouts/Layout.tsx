import { FC, ReactNode } from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-background pb-14">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
