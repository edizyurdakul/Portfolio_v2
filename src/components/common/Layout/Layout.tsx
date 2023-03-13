import { styled } from "@/stitches";
import NextImage from "next/image";
import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Background from "../../../../public/images/background.png";
type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayout = styled("div", {
  position: "relative",
  height: "100svh",
});

const StyledMain = styled("main", {
  maxWidth: "1145px",
  mx: "auto",
  pt: "16rem",
  zIndex: "$4",
});

const BackgroundImage = styled("div", { position: "relative" });
const Image = styled(NextImage, {
  position: "absolute",
  right: "0",
  top: "0",
  bottom: "0",
  opacity: "0.1",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Image src={Background} alt="A japanese tree illustration" />
      <StyledMain>
        <Navbar />
        <main>{children}</main>
      </StyledMain>
    </StyledLayout>
  );
};

export default Layout;
