import {
  render,
  FormLayout,
  FormLayoutGroup,
  TextField,
} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <FormLayout>
      <TextField label="Address" name="address" id="address" />
      <FormLayoutGroup>
        <TextField label="City" name="city" id="city" />
        <TextField label="Postal code" name="postal" id="postal" />
      </FormLayoutGroup>
    </FormLayout>
  );
}
