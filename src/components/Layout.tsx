import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  return (
    <div className="main-grid">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
