import { EmptyObject } from '../model/common';
import { FunctionComponent } from 'react';
import { AppBar, AppLayout, Panel } from '@devoinc/genesys-ui';

type MainComponentProps = EmptyObject;

const MainComponent: FunctionComponent<MainComponentProps> = () => {
  return (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar sticky>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider />
          <AppBar.Navigation id="bar-navigation">
            <div />
          </AppBar.Navigation>
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Content>
        <Panel height="100%">
          <Panel.Body>Content</Panel.Body>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  );
};

export default MainComponent;
