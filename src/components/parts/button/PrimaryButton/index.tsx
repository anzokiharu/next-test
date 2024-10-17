import { css } from "@linaria/core";
import { cssu } from "@/styles/utils";
import classNames from "classnames";

type PrimaryButtonProps = {
  text: string;
  colorType?: "black" | "white";
};

const styles = {
  button: css`
    cursor: pointer;

    ${cssu.mqup.sm} {
      width: 300px;
      height: 56px;
      font-size: 15px;
    }

    ${cssu.mqdown.sm} {
      width: ${cssu.vunitSp(300)};
      height: ${cssu.vunitSp(56)};
      font-size: ${cssu.vunitSp(15)};
    }
  `,

  black: css`
    color: ${cssu.color.white};
    background-color: ${cssu.color.black};
  `,
  white: css`
    color: ${cssu.color.black};
    background-color: ${cssu.color.white};
    border: 1px solid ${cssu.color.black};
  `,
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[props.colorType || "black"])}
      type="button"
    >
      {props.text}
    </button>
  );
};
