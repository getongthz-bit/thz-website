import type { Config } from "tailwindcss";

const config: Config = {
  // 1. 强制模式：确保 Tailwind 优先级最高，压过浏览器默认样式
  important: true, 

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // 补齐目录
    "app/**/*.{js,ts,jsx,tsx,mdx}",     // 去掉点斜杠的备选路径
  ],
  theme: {
    // 💡 关键改动：将 screens 放入 extend 内部
    // 如果放在外面，它会彻底覆盖 Tailwind 的默认断点（sm, md...）
    // 这有时会导致编译器在计算工具类时出现逻辑混乱
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1170px', // 你的 Bootstrap 标准
        '2xl': '1496px',
      },
      colors: {
        'grid-black': '#0B0E14',
        'grid-green': '#38B44A',
        'spirit-orange': '#fcac45',
        'spirit-grey': '#5a5a5a',
      },
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      // 🛡️ 额外保险：手动声明一下 3xl，防止它被意外覆盖
      fontSize: {
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
    },
  },
  plugins: [],
};

export default config;