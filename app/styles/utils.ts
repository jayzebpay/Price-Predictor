import { css, SerializedStyles } from "@emotion/react";

import { REFERENCE_FONT_SIZE } from "../styles/general";

export enum ZIndexLevels {
  layout = "layout",
  content = "content",
  sidePanelUnderlay = "side-panel_underlay",
  sidePanel = "side-panel",
  dropdownLevel1 = "dropdown_level-1",
  dropdownLevel2 = "dropdown_level-2",
  modal = "modal"
}

const generateSpacingUtils = (
  attribute: "padding" | "margin",
  side: "top" | "bottom" | "left" | "right"
): ((value: number) => SerializedStyles) => {
  const capitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (value: number) =>
    css({
      [`${attribute}${capitalizeFirstLetter(side)}`]: utils.remConverter(value)
    });
};

const utils = {
  remConverter: (value: number) => {
    return `${value / REFERENCE_FONT_SIZE}rem`;
  },
  widthPercentage: (value: number) => {
    return css({
      width: `${value}%`
    });
  },
  heightPercentage: (value: number) => {
    return css({
      height: `${value}%`
    });
  },
  mr: generateSpacingUtils("margin", "right"),
  ml: generateSpacingUtils("margin", "left"),
  mt: generateSpacingUtils("margin", "top"),
  mb: generateSpacingUtils("margin", "bottom"),
  pr: generateSpacingUtils("padding", "right"),
  pl: generateSpacingUtils("padding", "left"),
  pt: generateSpacingUtils("padding", "top"),
  pb: generateSpacingUtils("padding", "bottom"),
  getZIndex: (element: ZIndexLevels): number => {
    const elements = Object.values(ZIndexLevels);
    const zIndex = (elements.indexOf(element) + 1) * 10;
    return zIndex;
  },
  getGridTemplateColumns: (columns: number, gap: string) => {
    const width =
      columns > 1 ? `calc((100% / ${columns}) - ${gap} / ${columns})` : "100%";
    return `repeat(${columns}, ${width})`;
  }
};

export default utils;
