"use client";

import "./globals.css";
import Link from 'next/link'; 
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [filter, setFilter] = useState('all');
  // 1. 启动自动播放的函数
  const startAutoPlay = () => {
    stopAutoPlay(); // 先清理旧的，防止重叠
    autoPlayTimerRef.current = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 8000); // 正常每 8 秒轮播一次
  };
  // 2. 停止所有计时器的函数
  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };
  // 3. 核心交互函数：点击后暂停 10 秒再恢复
  const handleInteraction = (index?: number) => {
    stopAutoPlay(); // 立即停止当前滚动
    
    if (typeof index === 'number') {
      setActiveProduct(index); // 如果点击的是进度条，切换到对应图片
    }
    // 设置 20 秒后继续
    resumeTimerRef.current = setTimeout(() => {
      startAutoPlay();
    }, 20000); // 10000 毫秒 = 10 秒
  };
    useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // 页面关掉时清理内存
  }, []);

  const navLinks = [
    { name: "首页", href: "#" },
    { name: "关于我们", href: "/about" },
    { name: "技术服务", href: "#services" },
    { name: "项目案例", href: "#portfolio" },
    { name: "客户评价", href: "#testimonials" },
    { name: "联系我们", href: "#contact" },
  ];


  const products = [
    {
      id: 1,
      title: "格通太赫兹外墙检测雷达",
      tag: "外墙检测",
      img: "/images/THZD.png",
      desc: "精准探测外墙隐患，太赫兹雷达守护安全",
      features: ["更好的穿透力", "更高的分辨率", "更好的环境适应性", "即时成像"]
    },
    {
      id: 2,
      title: "格通太赫兹心电雷达",
      tag: "健康医疗",
      img: "/images/health.png",
      desc: "实现更精准、更连续无间断的生命体征监测功能",
      features: ["无感测量", "可靠稳定", "体积小，成本低", "安全隐私"]
    },
    // 你可以继续增加更多产品...
  ];

  
    
   

    



  const team = [
      { 
        id: 1, 
        name: "布兰卡 武切蒂奇", 
        role: "格通科技董事、首席科学家 ", 
        img: "/images/布兰卡.png", 
        honors: [
                "中华入民共和国国家友谊奖",
                "全球WIFI发明人之一",
                "中组部千人计划外国专家",
                "中国科学院第一批特聘外籍专家",
                "澳大利亚科学院皇家桂冠院士",
                "澳大利亚国家工程院院士",
                "IEEE FELLOW 国际电气工程师协会会士"
        ]
      },
      { 
        id: 2, 
        name: "黄文著", 
        role: "格通科技首席执行官", 
        img: "/images/黄文著.png", 
        honors: [
          "全国青年联合会委员",
          "全国工商联物联网委员会委员",
          "福建省百人计划引进专家",
          "福建省青年联合会常委",
          "福州市政协委员"
        ]
      },
      { 
        id: 3, 
        name: "李永会", 
        role: "格通科技董事、首席科学家", 
        img: "/images/李永会.png", 
        honors: [
          "全国青年联合会委员",
          "全国工商联物联网委员会委员",
          "福建省百人计划引进专家",
          "福建省青年联合会常委",
          "福州市政协委员"
        ]
      },
    ];



  const projects = [
    { id: 1, cat: 'building', title: '外墙缺陷扫描', desc: '亚毫米级空鼓检测', img: '/images/men.jpg' },
    { id: 2, cat: 'material', title: '复合材料透视', desc: '损伤识别', img: '/images/danger.jpg' },
    { id: 3, cat: 'analysis', title: '频谱指纹分析', desc: '成分鉴定', img: '/images/phone.jpg' },
    { id: 4, cat: 'building', title: '结构安全评估', desc: '非接触体检', img: '/images/men.jpg' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#38B44A] font-sans overflow-x-hidden relative">
      
      {/* 绝对定位导航栏*/}
      <header className="absolute top-0 left-0 w-full z-[100]">
        <nav className="w-full flex flex-wrap justify-between items-center px-4 md:px-8 py-1">
          
          <div className="flex-shrink-0">
            <img src="/GetongLogo.png" alt="GRIDLINK" className="h-32 md:h-48 w-auto object-contain transition-transform hover:scale-105" />
          </div>
          
          {/* 右侧：菜单 + 按钮 */}
          {/* 加入 marginRight 强制将整个右侧内容向左推 */}
          <div className="flex items-center justify-end flex-1" style={{ gap: "30px", marginRight: "80px" }}>
            
            {/* 菜单列表 */}
            <ul className="flex flex-row list-none m-0 p-0 text-base md:text-lg font-bold uppercase tracking-widest">
              {navLinks.map((link) => (
                <li key={link.name} style={{ marginRight: "40px" }}>
                  
                  {/* 🛡️ 核心修复：直接给 Link 强行指定绿色 text-[#38B44A] 和去下划线 no-underline */}
                  <Link 
                    href={link.href}
                    className="text-[#38B44A] no-underline hover:brightness-150 cursor-pointer transition-all border-b-2 border-transparent hover:border-[#38B44A] pb-1 whitespace-nowrap block"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}
            </ul>
            
            {/* 登录按钮 */}
            <Link 
              href="/login" 
              className="text-[#38B44A] font-black text-base md:text-xl whitespace-nowrap hover:brightness-150 transition-all active:scale-95 no-underline flex-shrink-0 drop-shadow-[0_0_12px_rgba(56,180,74,0.8)]"
            >
              登录系统
            </Link>
          </div>
        </nav>
      </header>

      {/* --- 2. Hero 区域 --- */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-fixed bg-center" 
               style={{ backgroundImage: "url('/images/Topbg.jpg')" }}>
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 text-center px-4 mt-16 text-[#38B44A]">
          <h2 className="text-4xl md:text-6xl font-light mb-4 uppercase tracking-tighter">
            WELCOME TO <span className="font-bold">GRIDLINK</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            引领太赫兹无损检测新时代，看见 <span className="font-black brightness-125">隐形</span> 之伤。
          </p>
          <div className="mt-8 animate-bounce">
          <a 
              href="#about" 
              className="cursor-pointer hover:brightness-150 transition-all inline-block"
            >
              <img 
                src="/images/down.png" 
                alt="Scroll" 
                className="w-8 mx-auto opacity-70" 
                style={{ filter: 'opacity(0.5) drop-shadow(0 0 0 #38B44A)' }} 
              />
            </a>

          </div>
        </div>
      </section>

      {/* --- 3. 技术优势：自动播放单卡片模式 --- */}
      <section id="about" className="pt-12 pb-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <small className="font-black tracking-widest block mb-2 uppercase text-[#38B44A]">PRODUCT SHOWCASE</small>
            <h3 className="text-4xl font-bold text-[#38B44A] border-l-4 border-[#38B44A] pl-6">核心技术与产品</h3>
          </div>

          {/*  轮播主容器：固定高度防止跳动 */}
          <div className="relative w-full min-h-[600px] md:min-h-[450px]">
            {products.map((item, index) => (
              <div 
                key={item.id} 
                //  点击整个卡片触发 10 秒暂停及切换
                onClick={() => handleInteraction(index)}
                className={`absolute inset-0 w-full h-full transition-all duration-[2500ms] ease-in-out flex flex-col md:flex-row bg-[#0B0E14] rounded-[32px] overflow-hidden shadow-2xl border border-[#38B44A]/20 cursor-pointer ${
                  index === activeProduct 
                    ? "opacity-100 translate-x-0 z-10" 
                    : "opacity-0 translate-x-10 z-0 pointer-events-none"
                }`}
              >
                {/* 左侧：图片区域 */}
                <div className="w-full md:w-2/5 bg-white/5 flex items-center justify-center p-12">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-auto max-h-[280px] object-contain drop-shadow-[0_0_30px_rgba(56,180,74,0.4)] transition-transform duration-700 hover:scale-105" 
                  />
                </div>

                {/* 右侧：文字内容区域 */}
                <div className="w-full md:w-3/5 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#38B44A] text-[#0B0E14] text-[10px] font-black rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-[#38B44A]/40 text-xs font-mono">
                      0{index + 1} / 0{products.length}
                    </span>
                  </div>
                  
                  <h4 className="text-3xl font-bold text-[#38B44A] mb-4">{item.title}</h4>
                  <p className="text-[#38B44A]/80 text-base mb-8 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                  
                  {/* 功能列表网格 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-[#38B44A]">
                        <span className="w-6 h-6 bg-[#38B44A] text-[#0B0E14] rounded-full flex items-center justify-center text-[10px]">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🛡️ 底部进度条/指示器 */}
          <div className="flex justify-center gap-4 mt-10">
            {products.map((_, index) => (
              <button
                key={index}
                // ✅ 点击小条也触发 10 秒暂停逻辑
                onClick={() => handleInteraction(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === activeProduct ? "w-12 bg-[#38B44A]" : "w-3 bg-[#38B44A]/20"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. 联合创始人：荣誉陈列版 --- */}
      <section id="team" className="pt-4 pb-16 bg-[#0B0E14] border-t border-[#38B44A]/20">
        <div className="container mx-auto px-6 text-center text-[#38B44A]">
          
          <h3 className="text-4xl font-light mb-2 uppercase">
            <span className="font-bold">联合创始人</span>
          </h3>
          <div className="w-48 h-1 bg-[#38B44A] mx-auto mb-16"></div>
          
          <div className="flex flex-row flex-wrap justify-center items-start w-full" style={{ gap: "100px" }}>
            {team.map((member) => (
              // 🛡️ 宽度增加到 280px 以容纳较长的荣誉头衔
              <div key={member.id} className="flex flex-col items-center group w-[280px]">
                
                {/* 🛡️ 头像框：方正、发光，比例适配 541:678 (约 180x225) */}
                <div 
                  className="border-2 border-[#38B44A]/80 overflow-hidden transition-all shadow-[0_0_20px_rgba(56,180,74,0.4)] group-hover:scale-105 duration-500"
                  style={{ width: "180px", height: "225px", marginBottom: "24px" }} 
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* 🛡️ 姓名：删除了 -mt-4 避免重叠 */}
                <h6 className="text-2xl font-bold mb-1 text-[#38B44A]">
                  {member.name}
                </h6>
                
                {/* 🛡️ 职位：加粗显示 */}
                <p className="text-xs tracking-widest uppercase mb-4 font-black opacity-90">
                  {member.role}
                </p>

                {/* 🛡️ 核心修改：荣誉陈列区域 */}
                <div className="flex flex-col items-center gap-1 w-full">
                  {member.honors.map((honor, hIdx) => (
                    <p 
                      key={hIdx} 
                      className="text-[11px] leading-tight text-center text-[#38B44A]/90 font-medium tracking-tighter"
                    >
                      {honor}
                    </p>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. 技术成果 (Portfolio) --- */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center text-[#38B44A]">
          <h3 className="text-3xl font-light mb-2 uppercase tracking-tighter">成果展示 <span className="font-bold">PORTFOLIO</span></h3>
          <div className="w-16 h-0.5 bg-[#38B44A] mx-auto mb-10"></div>
          
          <div className="flex justify-center gap-6 mb-10 text-[10px] md:text-xs font-black uppercase tracking-widest">
            {['all', 'building', 'material', 'analysis'].map((c) => (
              <button key={c} onClick={() => setFilter(c)} 
                      className={`pb-1 border-b-2 transition-all outline-none ${filter === c ? 'border-[#38B44A] scale-110' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                {c === 'all' ? '全部' : c === 'building' ? '建筑' : c === 'material' ? '材料' : '频谱'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProjects.map((p) => (
              <div key={p.id} className="group relative aspect-square overflow-hidden bg-[#0B0E14] shadow-2xl border border-[#38B44A]/20">
                <img src={p.img} className="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700" alt={p.title} />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                  <h5 className="text-lg font-black mb-2 text-center text-[#38B44A]">{p.title}</h5>
                  <p className="text-[10px] font-bold text-[#38B44A]">GRIDLINK THz SYSTEM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 bg-[#0B0E14] border-t border-[#38B44A]/30 text-center text-[#38B44A] text-[10px] tracking-[0.2em]">
        <p>© 2026 深圳格通太赫兹智能科技有限公司 GRIDLINK. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}