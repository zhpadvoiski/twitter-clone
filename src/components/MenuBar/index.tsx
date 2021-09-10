import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Lists</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/7442958?v=4"
            alt="Yauheni Padvoiski"
          />
        </Avatar>

        <ProfileData>
          <strong>Yauheni Padvoiski</strong>
          <span>@yauheni_padvoiski</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
