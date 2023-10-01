import React from 'react';
import Alert from '../atoms/Alert';
import styled from '@emotion/styled';

const StyledTypeCard = styled.div`
  border: 1px solid;
  border-color: #eaeaea;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  .title {
    margin-top: 0.5rem;
    font-weight: bold;
  }

  .content {
    margin-top: 0.5rem;
  }
`;

type Props = {
  title: string;
  content: string;
};

function TypeCard({ title, content }: Props) {
  return (
    <StyledTypeCard>
      <Alert
        title='Atom'
        content='This is an atom component. It is the smallest component in the component hierarchy.'
      />
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
    </StyledTypeCard>
  );
}

export default TypeCard;
