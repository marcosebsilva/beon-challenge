import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';

export default function setup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
