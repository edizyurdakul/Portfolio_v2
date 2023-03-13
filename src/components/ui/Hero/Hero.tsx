import Image from "next/image";
import Samurai from "../../../../public/images/hero.png";
import Profile from "../../../../public/images/github-profile-picture.png";
import { styled } from "@/stitches";
import Button from "../Button";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Instagram from "@/components/icons/Instagram";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
  gap: "2rem",
});

const GridItemImage = styled("div", {
  position: "relative",
  height: "100%",
  width: "100%",
  gridColumn: "1 / span 4",
  backgroundColor: "$gray3",

  "& img": {
    height: "100%",
    width: "100%",
  },
});

const GridItemText = styled("div", {
  gridColumn: "5 / span 8",
});

const ProfilePicture = styled("div", {
  position: "relative",
  width: "100px",
  height: "100px",
  borderRadius: "9999px",
  backgroundColor: "$gray3",
  "& img": {
    borderRadius: "9999px",
  },
});

const Intro = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "& h1": {
    fontSize: "$4",
    fontWeight: "600",
  },
});

const IntroText = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontFamily: "$lora",
  "& span": {
    fontSize: "$2",
    fontWeight: "400",
  },
});

const Paragraph = styled("p", {
  fontFamily: "$generalsans",
  fontSize: "$2",
  fontWeight: "300",
  my: "1rem",
  color: "$gray11",
  lineHeight: "1.45rem",
});

const Buttons = styled("div", {
  display: "flex",
  gap: "$2",
  my: "$2",
});

const IconLinks = styled("div", {
  display: "flex",
  gap: "$2",

  "& a": {
    transitionProperty: "all",
    transitionTimingFfunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    cursor: "pointer",
    textDecoration: "none",
    color: "$gray11",
    "&:hover": {
      color: "$gray12",
    },
  },
});

const Hero = () => {
  return (
    <section>
      <Grid>
        <GridItemImage>
          <Image src={Samurai} alt="Samurai art" />
        </GridItemImage>
        <GridItemText>
          <Intro>
            <ProfilePicture style={{ position: "relative" }}>
              <Image src={Profile} fill alt="Picture of Ediz Yurdakul" />
            </ProfilePicture>
            <IntroText>
              <h1>Ediz Yurdakul</h1>
              <span>Frontend Developer</span>
            </IntroText>
          </Intro>
          <div>
            <Paragraph>
              I&apos;m a frontend developer with a passion for creating engaging
              user experiences. I&apos;ve worked with React and Next.js to build
              responsive websites and applications.
            </Paragraph>
            <Paragraph>
              Currently working at Rygrad Studio, and working on Rygrad.
              Responsible for building and maintaining the Rygrad’s website,
              game interfaces, and wiki. I work closely with other developers,
              designers, and content creators to ensure that our products are
              consistent with the games branding.
            </Paragraph>
            <Paragraph>
              Aside from coding, I love to engage in some of my favorite
              hobbies. Fishing and enjoying the peacefulness of the great
              outdoors, or playing games like Elden Ring and Sekiro.
            </Paragraph>
          </div>
          <Buttons>
            <Button icon="arrow">Resume</Button>
            <Button variant="ghost" icon="envelope">
              Contact
            </Button>
          </Buttons>
          <IconLinks>
            <a href="https://github.com/edizyurdakul">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/edizyurdakul/">
              <LinkedIn />
            </a>
            <a href="instagram.com/edizyurdakul/">
              <Instagram />
            </a>
          </IconLinks>
        </GridItemText>
      </Grid>
    </section>
  );
};

export default Hero;
