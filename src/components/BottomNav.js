import React from 'react';
import BottomNavigation, {BottomNavigationButton } from 'material-ui/BottomNavigation';
import EventIcon from 'material-ui-icons/Event';
import RestoreIcon from 'material-ui-icons/Restore';

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
      icon={<EventIcon />}
    />

    {/* Takes user to Recent page. */}
    <BottomNavigationButton
      label="Recent"
      icon={<RestoreIcon />}
    />
  </BottomNavigation>
);

export default BottomNav;
