import { render, describe, test, expect } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  test('renders Banner component', () => {
    const { getByTestId } = render(<Banner />);
    const bannerElement = getByTestId('banner');
    expect(bannerElement).toBeInTheDocument();
  });

});