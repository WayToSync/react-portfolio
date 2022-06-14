import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chevronRight from '../../../assets/common/chevron-right.svg';
import mouse from '../../../assets/common/mouse.svg';

type WorksImageProps = {
  imageUrl: string;
};

const WorksCard = ({ imageUrl }: WorksImageProps) => {
  return (
    <WorksLink to='/works'>
      <WorksWrapper>
        <img src={imageUrl} alt='Work 1' />
      </WorksWrapper>
      <WorkTitle>Musubu LP</WorkTitle>
      <WorkContent>Coding / Gatsby</WorkContent>
      <ChevronButton />
    </WorksLink>
  );
};

const WorksLink = styled(Link)`
  text-decoration: none;
  cursor: url(${mouse}), auto;
`;

const WorksWrapper = styled.div`
  width: 100%;
  height: 275px;
  margin-bottom: 24px;
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${props => props.theme.fonts.weight.large};
  font-size: ${props => props.theme.fonts.sizes.medium};
  color: ${props => props.theme.colors.black};
`;

const WorkContent = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.black};
`;

const ChevronButton = styled.div`
  position: absolute;
  left: 47%;
  bottom: 7.11px;
  background-image: url(${chevronRight});
  width: 12.91px;
  height: 20.89px;
`;

export default WorksCard;
