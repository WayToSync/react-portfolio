import React from 'react';
import styled from 'styled-components';

type CategoryTitleProps = {
  icon: string;
  categoryTitle: string;
};

const CategoryTitle = ({ icon, categoryTitle }: CategoryTitleProps) => {
  return (
    <>
      {icon ? (
        <TitleIcon>
          <img src={icon} alt='icon' />
        </TitleIcon>
      ) : (
        <></>
      )}

      <TitleText>{categoryTitle}</TitleText>
      <TitleHorizontalLine />
    </>
  );
};

const TitleIcon = styled.div`
  position: absolute;
  top: 3px;
  width: 14.12px;
  height: 16px;
`;

const TitleText = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.medium};
  font-weight: ${props => props.theme.fonts.weight.large};
  color: ${props => props.theme.colors.darkCyan};
  left: 32px;
  width: 520px;
  text-align: left;
  height: 28px;
`;

const TitleHorizontalLine = styled.div`
  position: absolute;
  width: 520px;
  height: 0px;
  border-top: 1px solid ${props => props.theme.colors.silver};
  transform: rotate(0deg);
  bottom: 0px;
  left: 32px;
`;

export default CategoryTitle;
