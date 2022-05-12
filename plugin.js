const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, theme }) {
    addBase({
      [`.snap`]: {
        scrollSnapType: `x mandatory`,
        scrollBehavior: `smooth`,
      },

      [`.snap::-webkit-scrollbar`]: {
        display: "none",
      },

      [`.snap > img`]: {
        scrollSnapAlign: "center",
      },

      [`body`]: {
        fontFamily: `'Roboto Mono', monospace`,
      },

      [`.navbarTogglerActive > span:nth-child(1)`]: {
        transform: `rotate(45deg)`,
        top: `7px`,
      },

      [`.navbarTogglerActive > span:nth-child(2)`]: {
        opacity: "0",
      },

      [`.navbarTogglerActive > span:nth-child(3)`]: {
        top: `-8px`,
        transform: `rotate(135deg)`,
      },

      [`input:checked ~ .dot`]: {
        background: "#3056D3",
        transform: `translateX(100%)`,
      },

      [`input:checked ~ .dot .active`]: {
        display: "block",
      },

      [`input:checked ~ .dot .inactive`]: {
        display: "none",
      },

      [`input#toggleFour:checked ~ .box`]: {
        background: "#3056D3",
      },

      [`input#toggleFour:checked ~ .dot`]: {
        background: "#fff",
        transform: `translateX(100%)`,
      },

      [`input#toggleFive:checked ~ .dot`]: {
        background: "#fff",
        transform: `translateX(100%)`,
      },

      [`input#toggleFive:checked ~ .dot > span`]: {
        background: "#3056D3",
      },

      [`input#toggleSix:checked ~ .dot`]: {
        background: "#fff",
        transform: `translateX(100%)`,
      },

      [`input#toggleEight:checked ~ .box`]: {
        background: "#EAEEFB",
      },

      [`input#toggleEight:checked ~ .dot`]: {
        background: "#3056D3",
      },

      [`input#toggleEight:checked ~ .dot span`]: {
        background: "#3056D3",
        borderColor: "#fff",
      },

      [`input#toggleNine:checked ~ .dot span `]: {
        background: "#fff",
      },

      [`input#toggleNine:checked ~ .dot`]: {
        background: "#3056D3",
      },

      [`input:checked ~ .box`]: {
        borderColor: "#3056D3",
      },

      [`input#checkboxLabelOne:checked ~ .box`]: {
        borderColor: "#3056D3",
      },

      [`input#checkboxLabelOne:checked ~ .box .dot`]: {
        background: "#3056D3",
      },

      [`input#checkboxLabelTwo:checked ~ .box span`]: {
        opacity: "100%",
      },

      [`input#checkboxLabelThree:checked ~ .box span`]: {
        opacity: "100%",
      },

      [`input#checkboxLabelFour:checked ~ .box`]: {
        borderColor: "#3056D3",
      },

      [`input#checkboxLabelFour:checked ~ .box span`]: {
        background: "#3056D3",
      },

      [`input#checkboxLabelFive:checked ~ .box`]: {
        background: "#3056D3",
      },

      [`.shape-gradient`]: {
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(196, 196, 196, 0) 100%)`,
      },
    });
  },
  {
    theme: {
      screens: {
        xs: "400px",
        // => @media (min-width: 400px) { ... }

        sm: "540px",
        // => @media (min-width: 540px) { ... }

        md: "720px",
        // => @media (min-width: 720px) { ... }

        lg: "960px",
        // => @media (min-width: 960px) { ... }

        xl: "1140px",
        // => @media (min-width: 1240px) { ... }

        "2xl": "1320px",
        // => @media (min-width: 1320px) { ... }
      },
      container: {
        center: true,
        padding: "16px",
      },
      extend: {
        borderRadius: {
          extraLarge: '12rem'
        },
        colors: {
          'sweet-corn': {
            '50': '#fffef9', 
            '100': '#fffef3', 
            '200': '#fffbe2', 
            '300': '#fff9d0', 
            '400': '#fef5ad', 
            '500': '#fef08a', 
            '600': '#e5d87c', 
            '700': '#bfb468', 
            '800': '#989053', 
            '900': '#7c7644'
        },'clam-shell': {
            '50': '#fdfcfb', 
            '100': '#fbf8f7', 
            '200': '#f4eeeb', 
            '300': '#ede3df', 
            '400': '#e0cfc8', 
            '500': '#d2bab0', 
            '600': '#bda79e', 
            '700': '#9e8c84', 
            '800': '#7e706a', 
            '900': '#675b56'
        },'pickled-bluewood': {
          '50': '#f5f6f7', 
          '100': '#ebecee', 
          '200': '#ccd0d5', 
          '300': '#adb3bb', 
          '400': '#707a88', 
          '500': '#334155', 
          '600': '#2e3b4d', 
          '700': '#263140', 
          '800': '#1f2733', 
          '900': '#19202a'
      },'lochmara': {
          '50': '#f2f9fc', 
          '100': '#e6f3f9', 
          '200': '#c0e0f1', 
          '300': '#9acee9', 
          '400': '#4ea9d8', 
          '500': '#0284c7', 
          '600': '#0277b3', 
          '700': '#026395', 
          '800': '#014f77', 
          '900': '#014162'
      },'emerald': {
            '50': '#f4fcf7', 
            '100': '#e9f9ef', 
            '200': '#c8f1d7', 
            '300': '#a7e8bf', 
            '400': '#64d68e', 
            '500': '#22c55e', 
            '600': '#1fb155', 
            '700': '#1a9447', 
            '800': '#147638', 
            '900': '#11612e'
        },
          dark: "#090E34",
          "dark-700": "#090e34b3",
          main: "#1a9447",
          primary: "#0284c7",
          secondary: "#13C296",
          "body-color": "#637381",
          warning: "#F9C107",
          danger: "#DC3545",
          success: "#3CA745",
          info: "#3BA2B8",
          light: "#efefef",
          "form-stroke": "#E0E0E0",
          "tg-bg": "#f7f8fa",
          black: "#212B36",
        },

        boxShadow: {
          input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
          pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
          "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
          "testimonial-4": "0px 60px 120px -20px #EBEFFD",
          "testimonial-5": "0px 10px 39px rgba(92, 115, 160, 0.08)",
          "contact-3": "0px 4px 28px rgba(0, 0, 0, 0.08)",
          "contact-6": "0px 2px 4px rgba(0, 0, 0, 0.05)",
          card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
          "card-2": "0px 1px 10px -2px rgba(0, 0, 0, 0.15)",
        },
        fontSize: {
          'xs': '.875rem',
          'tiny': '.875rem',
          'sm': '1rem',
          'base': '1.125rem',
          'lg': '1.25rem',
          'xl': '1.5rem',
          '2xl': '1.875rem',
          '3xl': '2.25rem',
          '4xl': '3rem',
          '5xl': '4rem',
          '6xl': '5rem',
          '7xl': '6rem',
        }
      },
    },
  }
);