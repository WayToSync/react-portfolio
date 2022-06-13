import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

type WorksImageProps = {
  imageUrl: string;
};

const WorkCard = ({ imageUrl }: WorksImageProps) => {
  console.log(imageUrl);
  return (
    <>
      <WorksWrapper>
        <img src={imageUrl} alt='Work 1' />
      </WorksWrapper>
      <WorkTitle>Musubu LP</WorkTitle>
      <WorkContent>Coding / Gatsby</WorkContent>
      <Link to='/works'>
        <ChevronButton color='pink' />
      </Link>
    </>
  );
};

const WorksWrapper = styled.div`
  width: 100%;
  height: 299px;
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${props => props.theme.fonts.weight.large};
  font-size: ${props => props.theme.fonts.sizes.medium};
  /* TODO: put off when globalStyle change */
  color: ${props => props.theme.colors.black};
`;

const WorkContent = styled.div`
  width: 100%;
  text-align: center;
  /* TODO: put off when globalStyle change */
  color: ${props => props.theme.colors.black};
`;

const ChevronButton = styled(ChevronRight)`
  color: 'pink';
`;

export default WorkCard;
