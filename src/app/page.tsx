import { css } from '@linaria/core';
import { cssu } from '@/styles/utils';

const styles={
  page:css`
  height: 100dvh;
  background-color: #fff;
  ${cssu.mqdown.md}{
    background-color: #000;
  }
  /* @media (hover: hover) {
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  } */
  `,
  
  copy:css`
  font-size: 60px;
  `
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.copy}>oimooimo!</h1>
    </div>
  );
}
