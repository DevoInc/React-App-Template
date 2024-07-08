import React from 'react';
import { EmptyObject } from '../model/common';
import { FunctionComponent, useState } from 'react';
import {
  AppBar,
  AppLayout,
  Grid,
  Panel,
  useTabsAccessibility,
} from '@devoinc/genesys-ui';
import { Tabs } from '@devoinc/genesys-ui';
import Tab1 from './tab1/Tab1';
import Tab2 from './tab2/Tab2';

type MainComponentProps = EmptyObject;

const MainComponent: FunctionComponent<MainComponentProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabsRef = React.useRef<HTMLDivElement>({} as HTMLDivElement);
  useTabsAccessibility({ activeTab, tabsRef });

  return (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar sticky>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider />
          <AppBar.Navigation id="bar-navigation">
            <Tabs>
              <Tabs.List activeTabIndex={0} ref={tabsRef}>
                <Tabs.Item
                  label="Tab 1"
                  onClick={() => setActiveTab(0)}
                  state={activeTab === 0 ? 'selected' : undefined}
                />
                <Tabs.Item
                  label="Tab 2"
                  onClick={() => setActiveTab(1)}
                  state={activeTab === 1 ? 'selected' : undefined}
                />
              </Tabs.List>
            </Tabs>
          </AppBar.Navigation>
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Content>
        <Panel height="100%">
          <Panel.Body>
            <Grid
              gridTemplateAreas="sidebar header sidebar main"
              gridTemplateColumns="auto"
              gridTemplateRows="auto"
            >
              <Grid.Item
                as="main"
                gridArea="main"
                gridColumn="1 / 1"
                gridRow="1 / 1"
              >
                {activeTab == 0 && <Tab1 />}
                {activeTab == 1 && <Tab2 />}
              </Grid.Item>
            </Grid>
          </Panel.Body>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  );
};

export default MainComponent;
