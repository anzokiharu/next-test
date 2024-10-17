import React from 'react';
import { css } from '@linaria/core';

type Props = {
  children: string;
};

const styles = {
  text: css`
    color: black;
    background-color: gold;
  `,
};

export const Component: React.FC<Props> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
