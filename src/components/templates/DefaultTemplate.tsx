'use client';

import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 425px;
  margin: 0 auto;
  padding: 8px 12px;
`;

type Props = {
  children: React.ReactNode;
};

function BaseTemplate({ children }: Props) {
  return <Container>{children}</Container>;
}

export default BaseTemplate;
