import NextLink from "next/link";
import { useRouter } from "next/router";
type LinkProps = {
  href: string;
  children: React.ReactNode;
};
import { styled } from "@/stitches";

const Link = styled(NextLink, {
  fontSize: "$2",
  fontFamily: "$lora",
  fontWeight: "500",
  color: "$gray11",
  textDecoration: "none",
  transitionProperty: "all",
  transitionTimingFfunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",

  p: ".5rem",
  variants: {
    color: {
      default: {
        color: "$gray11",
        "&:hover": {
          color: "$gray12",
        },
      },
      active: {
        color: "$gray12",
      },
    },
  },
});

const NavLink = ({ href, children }: LinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} color={router.asPath === href ? "active" : "default"}>
      {children}
    </Link>
  );
};

const List = styled("ul", {
  display: "flex",
  gap: "$1",
  height: "100%",
  py: "1rem",
});

const Navbar = () => {
  return (
    <nav>
      <List>
        <li>
          <NavLink href="/">About</NavLink>
        </li>
        <li>
          <NavLink href="/work">Work</NavLink>
        </li>
        <li>
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </List>
    </nav>
  );
};

export default Navbar;
