import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#252525',
        bg2: '#212121',
        bg3: '#181818',
        bg4: '#1A1A1A',
        button: '#3A3B3C',
        danger: '#fe6854',
        fontPrimary: '#e5e7eb',
        textSecondary: '#B0B3B8',
        textPrimary: '#FFFFFF',
        textLight: '#f8f8f8',
        background: '#FBFBFD',
        greenDark: '#27AE60',
        greenLight: '#dbe1e8',
        primary: '#7263F3',
        primary2: '#705DF2',
        greyDark: '#131313',
        grey0: '#f8f8f8',
        grey1: '#dbe1e8',
        grey2: '#b2becd',
        grey3: '#6c7983',
        grey4: '#454e56',
        grey5: '#2a2e35',
        grey6: '#12181b',
        primaryGreen: '#6FCF97',
        icons: 'rgba(249,249,249, 0.35)',
        icons2: 'rgba(249,249,249, 0.75)',
        icons3: 'rgba(249,249,249, 0.08)',
        icons4: 'rgba(0,0,0, 0.3)',
        bgLink1: "rgba(249,249,249, 0.03)",
        bgLink2: "rgba(249,249,249, 0.08)",
        
      },
      borderColor: {
        border1: 'rgba(249,249,249, 0.08)',
        border2: 'rgba(249,249,249, 0.03)',
      },
      boxShadow: {
        shadow7: '1px 7px 12px rgba(8, 18, 69, 0.1)',
        shadow1: '4px 4px 84px rgba(16, 10, 86, 0.04)',
        shadow2: '0px 48px 77px rgba(8, 18, 69, 0.07)',
        shadow3: '0 14px 40px rgb(0 0 0 / 25%)',
        shadow8: '0px 48px 77px rgba(8, 18, 69, 0.16)',
        shadow5: '0px 4px 0px rgba(249,249,249, 0.35)',
        shadow6: '0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        sidebarWidth: '15rem',
        sidebarCollapsed: '5.4rem',
        gridGap: '2rem',
        padLRSm: '0 2rem',
        marLRSm: '0 1rem',
      },
      fontSize: {
        h4: '19px',
        small: '14px',
        small2: '15px',
      },
      gradientColorStops: {
        gradient: {
          'gradient': 'linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)',
        },
      },
      backgroundImage: {
        gradient: 'linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)',
      },
    },
  },
  plugins: [],
};
export default config;
