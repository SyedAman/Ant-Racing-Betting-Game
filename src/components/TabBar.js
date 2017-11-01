import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';

const TabBar = props => (
  <Tabs>
    {/* Navigation to the Upcoming page. */}
    <Tab
      label="Upcoming"
      icon={<i className="material-icons">event</i>}
    />

    {/* Navigation to the Recent page. */}
    <Tab
      label="Recent"
      icon={<i className="material-icons">done</i>}
    />
  </Tabs>
);

export default TabBar;
