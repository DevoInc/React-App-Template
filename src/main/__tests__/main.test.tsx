import { DevoAppProvider } from '@devoinc/app-developer-kit';
import { render, screen } from '@testing-library/react';

test('check Main div text', () => {
  DevoAppProvider.init();

  render(
    <div>
      <span data-testid="my-test-id"></span>
    </div>,
  );

  expect(screen.getByTestId('my-test-id')).toBeDefined();
});
