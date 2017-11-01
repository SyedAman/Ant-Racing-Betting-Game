import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const TabBar = props => (
  <Tabs>
    {/* Navigation to the Upcoming page. */}
    <Tab
      label="Upcoming"
      icon={<FontIcon className="material-icons">event</FontIcon>}
    />

    {/* Navigation to the Recent page. */}
    <Tab
      label="Recent"
      icon={<FontIcon className="material-icons">done</FontIcon>}
    />
  </Tabs>
);

export default TabBar;
