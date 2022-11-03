import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/FiraCode-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="FiraCode"
    />,
  ])
}