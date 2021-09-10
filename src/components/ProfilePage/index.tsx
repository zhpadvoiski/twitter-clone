import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/7442958?v=4"
            alt="Yauheni Padvoiski"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>Yauheni Padvoiski</h1>
        <h2>@yauheni_padvoiski</h2>

        <p>
          Developer at{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.linkedin.com/in/ypadvoiski/" target="_blank">
            @EmploSoft
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Chicago, Il
          </li>
          <li>
            <CakeIcon />
            Born on July 2, 1993
          </li>
        </ul>

        <Followage>
          <span>
            <strong>98 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
