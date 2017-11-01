import React from 'react';
import BottomNavigation, {BottomNavigationButton } from 'material-ui/BottomNavigation';

/**
 * Navigation bar on the bottom of the screen that takes users to key locations.
 * @method BottomNav
 * @param {Object} props - Data passed in from parent component as properties.
 */
const BottomNav = props => (
  <BottomNavigation showLabels>
    {/* Takes user to Upcoming page. */}
    <BottomNavigationButton
      label="Upcoming"
      icon={<i className="material-icons">event</i>}
    />

    {/* Takes user to Recent page. */}
    <BottomNavigationButton
      label="Recent"
      icon={<i className="material-icons">restore</i>}
    />

  </BottomNavigation>
);

export default BottomNav;
