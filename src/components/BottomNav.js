import React from 'react';
import BottomNavigation, {BottomNavigationButton } from 'material-ui/BottomNavigation';

const BottomNav = props => (
  <BottomNavigation>
    <BottomNavigationButton
      label="Upcoming"
      icon={<i className="material-icons">event</i>}
    />

    <BottomNavigationButton
      label="Recent"
      icon={<i className="material-icons">done</i>}
    />

  </BottomNavigation>
);

export default BottomNav;
