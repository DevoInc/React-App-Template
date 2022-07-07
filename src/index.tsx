import ReactDOM from 'react-dom/client';
import Main from './main/Main';
import { DevoAppProvider } from '@devoinc/app-developer-kit';
import { standaloneDependencies } from './standaloneDependencies';

const appRootId = 'app';
const appRoot = document.getElementById(appRootId);

if (appRoot) {
  // initialize react app
  const reactRoot = ReactDOM.createRoot(appRoot);
  reactRoot.render(<Main />);

  const onAppUnmount = () => {
    reactRoot.unmount();
    console.log(`dApp was unmounted`); // eslint-disable-line no-console
  };

  if (__STANDALONE__) {
    DevoAppProvider.init({
      onAppUnmount,
      standaloneDependencies,
    });
    console.log(`dApp was mounted in standalone mode`); // eslint-disable-line no-console
  } else {
    DevoAppProvider.init({
      onAppUnmount,
    });
    console.log(`dApp was mounted`); // eslint-disable-line no-console
  }
} else {
  console.log(`dApp couldn't be mounted. Root not found`); // eslint-disable-line no-console
}
