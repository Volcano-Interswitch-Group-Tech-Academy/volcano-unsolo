import React from 'react';

const Gap = (props: { className?: string; v?: number; h?: number }): JSX.Element => {
  const { v, h, className } = props;

  let defaulClassName = className || '';

  if (v) {
    defaulClassName += ' vgap-' + (v - 1 < 0 ? '-' + v * 10 : v) + 'x';
  }

  if (h) {
    defaulClassName += ' hgap-' + (h - 1 < 0 ? '-' + h * 10 : h) + 'x';
  }

  return <div className={defaulClassName} />;
};

export default Gap;
