import { Component } from "@/components/Component";
import { PrimaryButton } from "@/components/parts/button/PrimaryButton";
import { css } from "@linaria/core";
import { cssu } from "@/styles/utils";

const styles = {
  wrap: css`
    width: 100%;
    height: 100dvh;
    background-color: #000;
  `,
};
export default function Home() {
  return (
    <>
      <PrimaryButton text="Hello World" />
      <Component>Hello World</Component>
    </>
  );
}
