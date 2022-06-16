import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chevronRight from '../../../assets/common/chevron-right.svg';

const HeaderWorks = () => {
  return (
    <HeaderWorksWrapper>
      <ReturnLink to='/'>
        <ReturnChevronButton />
        <HeaderWorksContent>Guillaume MORVAN</HeaderWorksContent>
      </ReturnLink>
    </HeaderWorksWrapper>
  );
};

const HeaderWorksWrapper = styled.div`
  width: 1200px;
  height: 65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const ReturnLink = styled(Link)`
  text-decoration: none;
`;

const ReturnChevronButton = styled.div`
  position: absolute;
  left: 31px;
  top: 22px;
  background-image: url(${chevronRight});
  width: 12.91px;
  height: 20.89px;
  transform: rotate(180deg);
`;

const HeaderWorksContent = styled.div`
  color: ${props => props.theme.colors.matterhorn};
  position: absolute;
  width: 185px;
  height: 26px;
  left: 67px;
  top: 21px;
  font-size: ${props => props.theme.fonts.sizes.mediumInter};
  line-height: ${props => props.theme.lineHeight.largeInter};
`;

export default HeaderWorks;
