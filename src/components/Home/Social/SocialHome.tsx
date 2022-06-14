import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../../assets/home/facebook.svg';
import instagramIcon from '../../../assets/home/instagram.svg';
import twitterIcon from '../../../assets/home/twitter.svg';
import mouse from '../../../assets/common/mouse.svg';

const SocialHome = () => {
  return (
    <ActivityWrapper>
      <a target='_blank' rel='noreferrer' href='http://www.facebook.com/'>
        <FacebookIcon />
      </a>
      <a target='_blank' rel='noreferrer' href='http://www.instagram.com/'>
        <InstagramIcon />
      </a>
      <a target='_blank' rel='noreferrer' href='http://www.twitter.com/'>
        <TwitterIcon />
      </a>
    </ActivityWrapper>
  );
};

const ActivityWrapper = styled.div`
  height: 280px;
  width: 1200px;
  background-color: ${props => props.theme.colors.whiteSmoke};
`;

const FacebookIcon = styled.div`
  position: absolute;
  left: 509px;
  top: 3187px;
  background-image: url(${facebookIcon});
  width: 40px;
  height: 40px;
  cursor: url(${mouse}), auto;
`;

const InstagramIcon = styled.div`
  position: absolute;
  left: 580px;
  top: 3187px;
  background-image: url(${instagramIcon});
  width: 40px;
  height: 40px;
  cursor: url(${mouse}), auto;
`;

const TwitterIcon = styled.div`
  position: absolute;
  left: 649px;
  top: 3187px;
  background-image: url(${twitterIcon});
  width: 40px;
  height: 40px;
  cursor: url(${mouse}), auto;
`;

export default SocialHome;
