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
    console.log(`dApp was unmounted`);
  };

  if (__STANDALONE__) {
    DevoAppProvider.init({
      onAppUnmount,
      standaloneDependencies,
    });
    console.log(`dApp was mounted in standalone mode`);
  } else {
    DevoAppProvider.init({
      onAppUnmount,
    });
    console.log(`dApp was mounted`);
  }
} else {
  console.log(`dApp couldn't be mounted. Root not found`);
}
