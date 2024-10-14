import React from "react";
import { css } from "@linaria/core";
import { cssu } from "@/styles/utils";

export interface ButtonProps {
  onClick?: () => void;
}

const styles = {
  button: css`
    background-color: #ff0000;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    &:hover {
      background-color: #ff9999;
    }
  `,
};

/** Primary UI component for user interaction */
export const PrimaryButton = (props: ButtonProps) => {
  return (
    <button className={styles.button} onClick={props.onClick} type="button">
      うっす
    </button>
  );
};
