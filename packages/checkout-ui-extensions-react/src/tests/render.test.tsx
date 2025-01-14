import {render} from '../render';

const {extend} = jest.requireMock('@shopify/checkout-ui-extensions') as {
  extend: jest.Mock;
};

jest.mock('@shopify/checkout-ui-extensions', () => ({
  extend: jest.fn(),
}));

describe('render()', () => {
  it('calls extend() with the extension point', () => {
    render('Checkout::Dynamic::Render', () => <></>);
    expect(extend).toHaveBeenCalledWith(
      'Checkout::Dynamic::Render',
      expect.any(Function),
    );
  });
});
