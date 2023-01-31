module.exports = {
  content: ["./scss/**/*.{html,js,scss}"],
  theme: {
    fontFamiliy: {
      'display': ['Open Sans'],
      'body': ['Open Sans'],
    },
    extend: {
      colors: {
        primary: "#11999E",
        secondary: {
          DEFAULT: "#40514E",
          dark: "#364643"
        },
        white: "#ffffff",
        success: "rgb(34 197 94)",
        warning: "rgb(250 204 21)",
        danger: "rgb(239 68 68)",
        info: "rgb(59 130 246)",
      },
    },
  },
  variants: {},
}