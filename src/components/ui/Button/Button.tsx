import ArrowTopRight from "@/components/icons/ArrowTopRight";
import Envelope from "@/components/icons/Envelope";
import { styled } from "@/stitches";

const StyledButton = styled("button", {
  appearance: "none",
  border: "none",
  fontFamily: "$lora",
  px: "$2",
  py: "$1",
  fontSize: "$2",
  display: "flex",
  gap: "$1",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  transitionProperty: "all",
  transitionTimingFfunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
  cursor: "pointer",
  "& span": {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  variants: {
    color: {
      default: {
        color: "$gray12",
        backgroundColor: "$gray3",
        border: "$gray3",
        "&:hover": { backgroundColor: "$gray4" },
      },
      ghost: {
        color: "$gray12",
        backgroundColor: "transparent",
        border: "1px solid $gray3",
        "&:hover": { backgroundColor: "$gray4" },
      },
    },
  },

  defaultVariants: {
    color: "default",
  },
});

const Button = ({ variant, href, icon, children }: any) => {
  return (
    <StyledButton color={variant}>
      {children}
      <span>{icon === "arrow" ? <ArrowTopRight /> : <Envelope />}</span>
    </StyledButton>
  );
};

export default Button;
