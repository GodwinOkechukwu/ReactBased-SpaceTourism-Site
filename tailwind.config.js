/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        desktopImg:
          "url('/src/assets/home/homeImage/background-home-desktop.jpg')",
        mobileImg:
          "url('/src/assets/home/homeImage/background-home-mobile.jpg')",
        tabletImg:
          "url('/src/assets/home/homeImage/background-home-tablet.jpg')",
        crewDeskTopImg:
          "url('/src/assets/crew/crewImage/background-crew-desktop.jpg')",
        crewTabletImg:
          "url('/src/assets/crew/crewImage/background-crew-tablet.jpg')",
        crewMobileImg:
          "url('/src/assets/crew/crewImage/background-crew-mobile.jpg')",
        destinationDesktopImg:
          "url('/src/assets/destination/destinationImage/background-destination-desktop.jpg')",
        destinationTabletImg:
          "url('/src/assets/destination/destinationImage/background-destination-tablet.jpg')",
        destinationMobileImg:
          "url('/src/assets/destination/destinationImage/background-destination-mobile.jpg')",
        technologyDesktopImg:
          "url('/src/assets/technology/technologyImage/background-technology-desktop.jpg')",
        technologyTabletImg:
          "url('/src/assets/technology/technologyImage/background-technology-tablet.jpg')",
        technologyMobileImg:
          "url('/src/assets/technology/technologyImage/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
