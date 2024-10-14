import { css } from "@linaria/core";
import { cssu } from "@/styles/utils";

const styles = {
  page: css`
    background-color: #ffffff;
    height: 100dvh;
    ${cssu.mqdown.md} {
      background-color: #000000;
    }

    /* @media (hover: hover) {
&:hover {
background: rgba(0, 0, 0, 0.7);
}
} */
  `,

  copy: css`
    font-size: ${cssu.vunitPc(80)};
  `,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.copy}>oimooimo!</h1>
    </div>
  );
}
