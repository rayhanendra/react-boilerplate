import React, { Fragment } from 'react';
import ColorCard from '../molecules/ColorCard';
import styled from '@emotion/styled';
import TypeCard from '../molecules/TypeCard';

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 1px solid;
  border-color: #eaeaea;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 8px #eaeaea;

  .title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .content {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
`;

type Props = {};

function Dashboard({}: Props) {
  const colors = [
    {
      name: 'Yellow',
      hex: '#FAEDCB',
    },
    {
      name: 'Green',
      hex: '#C9E4DE',
    },
    {
      name: 'Blue',
      hex: '#C6DEF1',
    },
    {
      name: 'Purple',
      hex: '#DBCDF0',
    },
    {
      name: 'Red',
      hex: '#F2C6DE',
    },
    {
      name: 'Orange',
      hex: '#F7D9C4',
    },
  ];

  const colorList = colors.map((color, index) => {
    return (
      <Fragment key={index}>
        <ColorCard name={color.name} hex={color.hex} />
      </Fragment>
    );
  });

  return (
    <StyledDashboard>
      <div>
        <h3 className='title'>Organism</h3>
        <div className='content'>
          This is an organism component that contains multiple molecules
        </div>

        <div>
          <h4 className='title'>Molecules</h4>
          <div className='container'>{colorList}</div>
        </div>
      </div>
      <TypeCard
        title='Molecule'
        content='This is molecule is inside an organisms component'
      />
    </StyledDashboard>
  );
}

export default Dashboard;
