import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import { DevoAppProvider } from '@devoinc/app-developer-kit';
import { standaloneDependencies } from './standaloneDependencies';
import { ThemeProvider } from 'styled-components';
import * as brand from '@devoinc/genesys-brand-devo';
import type { Brand } from '@devoinc/genesys-tokens-types';

const appRootId = 'app';
const appRoot = document.getElementById(appRootId);

if (appRoot) {
  brand['light'];
  // initialize react app
  const reactRoot = ReactDOM.createRoot(appRoot);

  const getGenesysTheme = (): Brand => {
    let themeInfo = { meta: { scheme: 'light' } };

    document.addEventListener(
      'satellites-themes',
      (event: CustomEvent) =>
        (themeInfo = event.detail as { meta: { scheme: string } }),
    );
    document.dispatchEvent(
      new CustomEvent('get-satellites-themes', { detail: { version: 'v1' } }),
    );

    return brand[themeInfo.meta.scheme] as Brand;
  };

  reactRoot.render(
    <ThemeProvider theme={getGenesysTheme()}>
      <Main />
    </ThemeProvider>,
  );

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
