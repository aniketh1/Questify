module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Covers your React components in the src folder
  theme: {
    extend: {
      colors: {
        green: {
          custom: '#a3c348', 
          custom1: '#27ab83'// This creates a class named `text-green-custom` for text, `bg-green-custom` for background, etc.
        },
        blue:{
          custom: '#2682b6',
          custom1: '#24afe1'
        },
      },
    },
  },
  plugins: [],
}
