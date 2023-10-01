import styled from '@emotion/styled';
import React from 'react';

type StyledColorCardProps = {
  hex: string;
};

const StyledColorCard = styled.div<StyledColorCardProps>`
  border: 1px solid;
  border-color: #eaeaea;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 0 8px ${(props) => props.hex};
  background-color: ${(props) => props.hex};

  .title {
    margin-top: 0.5rem;
    font-weight: bold;
  }

  .content {
    margin-top: 0.5rem;
  }
`;

type Props = {
  name: string;
  hex: string;
};

function ColorCard({ name, hex }: Props) {
  return (
    <StyledColorCard className='color-card' hex={hex}>
      <div className='title'>{name}</div>
      <div className='content'>{hex}</div>
    </StyledColorCard>
  );
}

export default ColorCard;
