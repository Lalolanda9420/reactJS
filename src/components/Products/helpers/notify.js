import { toast } from 'react-hot-toast';

export const notify = (success) => {
  if (success) {
    toast('Product added to shop cart.', {
      duration: 1000,
      position: 'top-center',

      // Styling
      style: {},
      className: '',

      // Custom Icon
      icon: '👏',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },

      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  } else {
    toast('Product is already exist in the shop cart.', {
      duration: 1000,
      position: 'top-center',

      // Styling
      style: {},
      className: '',

      // Custom Icon
      icon: '❌',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },

      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }
};