import { Conf } from "@/config";
import type { BreakpointType } from "@/config";
//import { css } from "@linaria/core";

export type unitType = "vw" | "vh" | "dvh" | "svh" | "lvh" | "vmax" | "vmin";
export type mqType = {
  [K in keyof BreakpointType]: string;
};
export class cssu {
  public static vunitPc(
    num: number,
    baseWidth: number | null,
    unit: unitType = "vw"
  ) {
    let base: number;

    // 単位に応じて幅または高さを基準とする
    if (unit === "vw" || unit === "vmax" || unit === "vmin") {
      base = baseWidth || Conf.LG_PSD_WIDTH;
    } else if (
      unit === "vh" ||
      unit === "dvh" ||
      unit === "svh" ||
      unit === "lvh"
    ) {
      base = baseWidth || Conf.LG_PSD_HEIGHT;
    } else {
      throw new Error("Unsupported unit type");
    }

    return (num / base) * 100 + unit;
  }

  public static vunitSp(
    num: number,
    baseWidth: number | null,
    unit: unitType = "vw"
  ) {
    let base: number;
    if (unit === "vw" || unit === "vmax" || unit === "vmin") {
      base = baseWidth || Conf.XS_PSD_WIDTH;
    } else if (
      unit === "vh" ||
      unit === "dvh" ||
      unit === "svh" ||
      unit === "lvh"
    ) {
      base = baseWidth || Conf.XS_PSD_HEIGHT;
    } else {
      throw new Error("Unsupported unit type");
    }

    return (num / base) * 100 + unit;
  }

  public static mqdown: mqType = {
    sm: `@media screen and (max-width: ${Conf.MQ_DOWN.sm}px)`,
    md: `@media screen and (max-width: ${Conf.MQ_DOWN.md}px)`,
    lg: `@media screen and (max-width: ${Conf.MQ_DOWN.lg}px)`,
    xl: `@media screen and (max-width: ${Conf.MQ_DOWN.xl}px)`,
  };
  public static mqup: mqType = {
    sm: `@media screen and (min-width: ${Conf.MQ_UP.sm}px)`,
    md: `@media screen and (min-width: ${Conf.MQ_UP.md}px)`,
    lg: `@media screen and (min-width: ${Conf.MQ_UP.lg}px)`,
    xl: `@media screen and (min-width: ${Conf.MQ_UP.xl}px)`,
  };
}
