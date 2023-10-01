import styled from '@emotion/styled';
import React from 'react';

const BaseAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2196f3;
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;

  .alert-title {
    font-weight: bold;
  }

  .alert-content {
    margin-top: 0.5rem;
  }
`;

type Props = {
  title?: string;
  content?: string;
};

function Alert({
  title = 'Hello 👋',
  content = 'This app uses the Next.js App Router and Emotion.',
}: Props) {
  return (
    <BaseAlert>
      <div className='alert-title'>{title}</div>
      <div className='alert-content'>{content}</div>
    </BaseAlert>
  );
}

export default Alert;
