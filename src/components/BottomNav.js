import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const BottomNav = props => (
  <BottomNavigation>
    <BottomNavigationItem
      label="Upcoming"
      icon={<FontIcon className="material-icons">event</FontIcon>}
    />

    <BottomNavigationItem
      label="Recent"
      icon={<FontIcon className="material-icons">done</FontIcon>}
    />

  </BottomNavigation>
);

export default BottomNav;
