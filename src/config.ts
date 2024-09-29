export type BreakpointType = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
export class Conf {
  public static PATH_IMG: string = '/assets/images/';

  // ブレイクポイント
  public static MQ_UP:BreakpointType = {
    sm: 540,
    md: 768,
    lg: 1024,
    xl: 1100,
  };
  public static MQ_DOWN:BreakpointType = {
    sm: 539,
    md: 767,
    lg: 1023,
    xl: 1099,
  };

  // PSDサイズ
  public static LG_PSD_WIDTH = 1366;
  public static LG_PSD_HEIGHT = 768;
  public static XS_PSD_WIDTH = 375;
  public static XS_PSD_HEIGHT = 667;

  constructor() {}
}
