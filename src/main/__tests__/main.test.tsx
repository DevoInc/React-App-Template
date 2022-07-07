import { DevoAppProvider } from '@devo/applications-developer-kit';
import { render, screen } from '@testing-library/react';
import MainComponent from '../Main';

test('check Main div text', () => {
  DevoAppProvider.init();

  render(<MainComponent />);

  expect(screen.getByTestId('my-test-id')).toBeDefined();
});
