import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import InfoDialog from "../../src/dialogs/InfoDialog";

jest.mock('../../src/img/powered_by_google_on_non_white.png', () => {});
jest.mock('../../src/img/powered_by_google_on_white.png', () => {});

test('should render component properly', () => {
  const close = jest.fn();
  const { getByText } = render(<InfoDialog close={close} />);
  userEvent.click(getByText('Close'));
  expect(close).toBeCalledTimes(1);
  expect(getByText('GitHub Repository'))
    .toBeTruthy();
});
