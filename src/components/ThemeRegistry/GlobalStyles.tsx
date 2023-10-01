import { CSSObject, Global } from '@emotion/react';

const resetStyles: CSSObject = {
  '*': {
    boxSizing: 'inherit',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  'html, body': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};

const baseStyles: CSSObject = {
  html: {
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  body: {
    color: '#333',
    fontFamily: '`Montserrat`, sans-serif',
    fontSize: '100%',
    lineHeight: '1.5rem',
    margin: 0,
    padding: 0,
    background: '#fff',
  },
};

type Props = {};

const GlobalStyles = (props: Props) => {
  return <Global styles={[resetStyles, baseStyles]} />;
};

export { GlobalStyles };
