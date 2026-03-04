import type { Config } from "tailwindcss";

const config: Config = {
  // 1. 路径修正：移除 /src，精准锁定你的根目录文件夹
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 2. 品牌色彩：整合格通品牌绿与 SPIRIT8 的经典橙色
      colors: {
        'grid-black': '#0B0E14', // 核心科技黑
        'grid-green': '#38B44A', // 格通品牌绿
        'spirit-orange': '#fcac45', // SPIRIT8 模板原本的亮色调（可用于对比）
        'spirit-grey': '#5a5a5a',  // SPIRIT8 的文字灰
      },
      // 3. 布局逻辑：模拟 Bootstrap 的容器规则
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1170px', // 完美匹配 Bootstrap 的 1170px 标准
          '2xl': '1496px',
        },
      },
      // 4. 字体设置：引入 SPIRIT8 要求的 Open Sans 风格
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;