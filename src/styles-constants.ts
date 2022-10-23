import { BaseThemedCssFunction, css } from "styled-components";

export const breakpoints = {
  XXXXL: 1920,
  XXXL: 1456,
  XXL: 1358,
  XL: 1248,
  L: 1080,
  M: 832,
  S: 624,
  XS: 360,
};

export const media = Object.fromEntries(
  Object.entries(breakpoints).map(([breakpointName, breakpointValue]) => {
    const fn = (...args: Parameters<BaseThemedCssFunction<any>>) => css`
      @media (min-width: ${breakpointValue}px) {
        ${css(...args)};
      }
    `;

    return [breakpointName, fn];
  }),
) as Record<keyof typeof breakpoints, BaseThemedCssFunction<any>>;