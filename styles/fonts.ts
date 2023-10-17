import localFont from "next/font/local";

export const kamzic = localFont({
  src: [
    {
      path: "../assets/fonts/kamzic_R.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/kamzic_B.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/kamzic_L.ttf",
      weight: "300",
      style: "light",
    },
  ],
});

export const chameleon = localFont({
  src: [
    {
      path: "../assets/fonts/chameleon_R.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/chameleon_B.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/chameleon_L.ttf",
      weight: "300",
      style: "light",
    },
  ],
});
