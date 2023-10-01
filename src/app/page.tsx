'use client';

import * as React from 'react';
import Alert from '@/components/atoms/Alert';
import TypeCard from '@/components/molecules/TypeCard';
import Dashboard from '@/components/organisms/Dashboard';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function HomePage() {
  return (
    <Container>
      <Alert
        title='Hello 👋'
        content='This app uses the Next.js App Router and Emotion.'
      />
      <TypeCard title='Molecule' content='This is a molecule component' />
      <Dashboard />
    </Container>
  );
}
