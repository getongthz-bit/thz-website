"use client";

import "./globals.css";
import Link from 'next/link'; 
import { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState('all');

  const navLinks = [
    { name: "首页", href: "#" },
    { name: "关于我们", href: "/about" },
    { name: "技术服务", href: "#services" },
    { name: "项目案例", href: "#portfolio" },
    { name: "客户评价", href: "#testimonials" },
    { name: "联系我们", href: "#contact" },
  ];

  const team = [
    { id: 1, name: "胖猫", role: "算法工程师", img: "/images/p3.jpg" },
    { id: 2, name: "范小勤",role: "算法工程师", img: "/images/p2.jpg" },
    { id: 3, name: "表哥", role: "算法工程师", img: "/images/p1.jpg" },
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
      
      {/* --- 1. 绝对定位导航栏：彻底解除隐藏封印 --- */}
      <header className="absolute top-0 left-0 w-full z-[100]">
        <nav className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-12 py-8">
          
          <div className="flex-shrink-0">
            <img src="/GetongLogo.png" alt="GRIDLINK" className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105" />
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
               style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 text-center px-4 mt-16 text-[#38B44A]">
          <h2 className="text-4xl md:text-6xl font-light mb-4 uppercase tracking-tighter">
            WELCOME TO <span className="font-bold">GRIDLINK</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            引领太赫兹无损检测新时代，看见 <span className="font-black brightness-125">隐形</span> 之伤。
          </p>
          <div className="mt-8 animate-bounce">
             <img src="/images/down.png" alt="Scroll" className="w-8 mx-auto opacity-70" style={{ filter: 'opacity(0.5) drop-shadow(0 0 0 #38B44A)' }} />
          </div>
        </div>
      </section>

      {/* --- 3. 技术优势 --- */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img src="/images/tv.png" alt="Technology" className="w-full max-w-[420px] mx-auto drop-shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 text-[#38B44A]">
            <small className="font-black tracking-widest block mb-2 uppercase text-base">ABOUT GRIDLINK</small>
            <h3 className="text-4xl font-bold mb-6 border-l-4 border-[#38B44A] pl-6">核心技术优势</h3>
            <ul className="space-y-4 mb-8 font-bold text-lg list-none p-0">
              <li className="flex items-center gap-4">
                <span className="w-7 h-7 bg-[#0B0E14] border border-[#38B44A] text-[#38B44A] rounded-full flex items-center justify-center text-[10px] shadow-lg flex-shrink-0">✓</span>
                亚毫米级精度：捕捉微米级结构隐患
              </li>
              <li className="flex items-center gap-4">
                <span className="w-7 h-7 bg-[#0B0E14] border border-[#38B44A] text-[#38B44A] rounded-full flex items-center justify-center text-[10px] shadow-lg flex-shrink-0">✓</span>
                非接触探测：对人体与环境 100% 安全
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 4. 专家团队 --- */}
      <section id="team" className="py-16 bg-[#0B0E14] border-t border-[#38B44A]/20">
        <div className="container mx-auto px-6 text-center text-[#38B44A]">
          <h3 className="text-4xl font-light mb-2 uppercase">我们的 <span className="font-bold">专家团队</span></h3>
          <div className="w-20 h-1 bg-[#38B44A] mx-auto mb-16"></div>
          
          <div className="flex flex-row flex-wrap justify-center items-start w-full" style={{ gap: "150px" }}>
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center group w-[220px]">
                
                {/* 完美锁死正圆的头像框保持不变 */}
                <div 
                  className="rounded-full border-4 border-[#38B44A]/50 group-hover:border-[#38B44A] overflow-hidden mb-6 transition-all transform group-hover:scale-105 shadow-2xl flex-shrink-0 flex items-center justify-center m-auto"
                  style={{ width: "180px", height: "180px" }}
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </div>

                <h6 className="text-xl font-bold mb-1">{member.name}</h6>
                <p className="text-xs tracking-widest uppercase mb-4 font-black">{member.role}</p>
                <p className="text-sm italic opacity-80 text-center">“致力于太赫兹领域的精度突破。”</p>
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