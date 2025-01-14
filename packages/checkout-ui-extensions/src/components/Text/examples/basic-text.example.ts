import {extend, Text, BlockStack} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const text = root.createComponent(BlockStack, undefined, [
    root.createComponent(Text, {size: 'extraSmall'}, 'Total'),
    root.createComponent(Text, {size: 'small'}, 'Total'),
    root.createComponent(Text, {size: 'base'}, 'Total'),
    root.createComponent(Text, {size: 'medium'}, 'Total'),
    root.createComponent(Text, {size: 'large'}, 'Total'),
    root.createComponent(Text, {size: 'extraLarge'}, 'Total'),
  ]);

  root.appendChild(text);
});
