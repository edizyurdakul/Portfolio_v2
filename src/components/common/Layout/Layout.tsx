import { styled } from "@/stitches";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayout = styled("div", {
  maxWidth: "1145px",
  mx: "auto",
  mt: "16rem",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
