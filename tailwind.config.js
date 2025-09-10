/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(222 47.4% 11.2%)", // fundo
        foreground: "hsl(210 40% 96.1%)",  // texto
        primary: "hsl(217.2 91.2% 59.8%)", // azul
        accent: "hsl(0 84% 60%)",          // vermelho
        muted: "hsl(220 14.3% 24%)",       // cinza
      },
    },
  },
  plugins: [],
}
