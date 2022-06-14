import React from 'react';
import HeaderHome from '../components/Home/Header/HeaderHome';
import WorksHome from '../components/Home/Works/WorksHome';
import ActivityHome from '../components/Home/Activity/ActivityHome';
import SocialHome from '../components/Home/Social/SocialHome';

const Home = () => {
  return (
    <>
      <HeaderHome />
      <WorksHome />
      <ActivityHome />
      <SocialHome />
    </>
  );
};

export default Home;
