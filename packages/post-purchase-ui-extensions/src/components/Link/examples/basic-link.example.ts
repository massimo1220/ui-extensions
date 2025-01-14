import {extend, Link} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const link = root.createComponent(
    Link,
    {
      to: 'https://shopify.com',
    },
    'Shopify',
  );

  root.appendChild(link);
});
