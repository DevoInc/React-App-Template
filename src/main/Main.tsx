import { EmptyObject } from '../model/common';
import { FunctionComponent } from 'react';
import { usePromise } from '../hooks/usePromise';
import {
  DevoAppProvider,
  NotiPopRequest,
  UserInfo,
} from '@devoinc/app-developer-kit';

type MainComponentProps = EmptyObject;

const fetchUserInfo = () => {
  const dApp = DevoAppProvider.getInstance();
  return dApp.getUserInfo();
};

const MainComponent: FunctionComponent<MainComponentProps> = () => {
  const [userInfo] = usePromise<UserInfo | undefined>(
    fetchUserInfo,
    undefined,
    [DevoAppProvider]
  );
  const name = userInfo?.name;

  const onClick = () => {
    const dApp = DevoAppProvider.getInstance();
    const request: NotiPopRequest = {
      title: 'Title',
      text: 'Content text',
      subtitle: 'Subtitle',
      type: 'success',
      position: 'top-center',
      size: 'lg',
      timer: 2000,
    };
    dApp.createNotiPop(request);
  };

  return (
    <div data-testid="my-test-id">
      <span>
        Hi!
        <code>{name}</code>
      </span>
      <button onClick={onClick}> Send a Notipop!</button>
    </div>
  );
};

export default MainComponent;
