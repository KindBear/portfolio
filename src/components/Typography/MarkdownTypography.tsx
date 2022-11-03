import React, { FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import { Element } from "react-markdown/lib/rehype-filter";
import "./MarkdownTypography.scss";

const variantsMapping: { [key: string]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

type MarkdownTypographyProps = {
  children: ReactNode;
  node: Element;
} & HTMLAttributes<HTMLParagraphElement>;

const MarkdownTypography: FC<MarkdownTypographyProps> = ({
  children,
  className,
  node,
  ...otherProps
}) => {
  const Component = variantsMapping[node.tagName] || "p";

  return (
    // @ts-ignore
    <Component className={cn("markdown-text", className)}>{children}</Component>
  );
};

export default MarkdownTypography;
