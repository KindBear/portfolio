import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import "./Typography.scss";

type TypographyProps = {
  variant?: "header" | "subheader" | "body" | "label" | "code";
  color?: "white" | "lynch" | "indigo" | "coral";
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  variant = "body",
  color = "white",
  children,
  className,
  ...otherProps
}) => {
  const paragraphClassName = classNames(
    "text",
    `text-variant-${variant}`,
    `text-color-${color}`,
    className,
  );
  return (
    <p
      className={paragraphClassName}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Typography;
