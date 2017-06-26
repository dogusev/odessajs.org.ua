$(document).ready(function() {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','//connect.facebook.net/en_US/fbevents.js');
// Insert Your Facebook Pixel ID below.
  fbq('init', '549071635216417');
  fbq('track', 'PageView');

  fbq('track', 'ViewContent', {
    content_name: 'OdessaJS',
    content_ids: ['1234'],
    content_type: 'product',
    value: 0.50,
    currency: 'USD'
  });

  $('.registration-btn, .menu__register-btn').click(function() {
    fbq('track', 'Purchase', {
      content_name: 'OdessaJS',
      content_ids: ['1234'],
      content_type: 'product',
      value: 2.99,
      currency: 'USD'
    });
  });

  $('.subscribe-button').click(function() {
    fbq('track', 'Lead', {
      content_name: 'OdessaJS',
      content_ids: ['1234'],
      content_type: 'product',
      value: 1.50,
      currency: 'USD'
    });
  });


});
