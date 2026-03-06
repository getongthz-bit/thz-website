"use client";

import "./globals.css";
import Link from 'next/link'; 
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [filter, setFilter] = useState('all');
  // 不跳转问题
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);

      if (element) {
        // 阻止 Next.js 默认的“无反应”行为
        e.preventDefault(); 
        
        // 强制浏览器再次滚动到该位置
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // 手动更新 URL 状态
        window.history.pushState(null, "", href);
      }
    }
  };
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


  //  新增：强制处理 Hash 跳转的逻辑
  useEffect(() => {
    // 定义执行滚动的函数
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // 稍微延迟 100ms 确保页面内容（如图片）已渲染
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // 监听 URL hash 变化
    window.addEventListener('hashchange', handleHashScroll);
    // 页面初次加载时也执行一次
    handleHashScroll();

    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  const navLinks = [
    { name: "首页", href: "#" },
    { name: "关于我们", href: "/about" },
    { name: "技术服务", href: "/services" },
    { name: "项目案例", href: "#portfolio" },
    { name: "客户评价", href: "#testimonials" },
    { name: "联系我们", href: "/#contactus" },     //注意这里我改成了contactus，维护需要注意
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
    // 1. 在 Home 组件顶部定义状态
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // 2. 定义提交函数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contactus', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        // 成功后清空表单，避免重复发送
        setFormData({ name: '', phone: '', email: '', message: '' });
        // 3秒后让按钮恢复原样，方便下一次点击
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("提交失败:", err);
      setStatus('error');
    }
  };

  



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
                
                {/* 绑定 handleScroll 函数 */}
                <Link 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)} 
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
      {/* --- 6. 联系我们 (首页模块版) --- */}
<section id="contactus" className="py-20 bg-[#0B0E14] border-t border-[#38B44A]/10 relative overflow-hidden scroll-mt-32">
  {/* 背景修饰：微弱的绿色光晕 */}
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38B44A]/5 rounded-full blur-[100px] -z-10"></div>
  
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-16 items-start">
      
      {/* 🛡️ 左侧：联系信息（包含二维码区域） */}
      <div className="w-full md:w-1/2">
        <small className="font-black tracking-[0.3em] block mb-2 uppercase text-[#38B44A] opacity-80 text-[10px]">GET IN TOUCH</small>
        <h3 className="text-4xl font-bold text-white mb-8">
          与 <span className="text-[#38B44A]">格通科技</span> 取得联系
        </h3>
        
        <div className="space-y-10">
          {/* 地址 */}
          <div className="flex items-start gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#38B44A]/10 border border-[#38B44A]/30 flex items-center justify-center shrink-0">
              <span className="text-[#38B44A]">📍</span>
            </div>
            <div>
              <h5 className="text-white font-bold mb-1 text-sm">公司地址</h5>
              <p className="text-[#38B44A]/70 text-xs leading-relaxed">
                广东省深圳市龙华区民治街道北站社区<br />
                龙华设计产业园总部大厦3栋1303<br />
                邮编：518083
              </p>
            </div>
          </div>

          {/* 电话与邮件 */}
          <div className="flex items-start gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#38B44A]/10 border border-[#38B44A]/30 flex items-center justify-center shrink-0">
              <span className="text-[#38B44A]">📞</span>
            </div>
            <div>
              <h5 className="text-white font-bold mb-1 text-sm">联系方式</h5>
              <p className="text-[#38B44A]/70 text-xs">
                咨询热线：+86 (0755) 8888-6666<br />
                企业邮箱：getongthz@gmail.com<br />
                官方微信号：12312312
              </p>
            </div>
          </div>

          {/* 🛡️ 3. 关注我们：二维码展示区域 */}
          <div className="flex items-start gap-4 pt-4 border-t border-[#38B44A]/10">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#38B44A]/10 border border-[#38B44A]/30 flex items-center justify-center shrink-0">
              <span className="text-[#38B44A]">📱</span>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm">关注我们</h5>
              <div className="flex gap-10">
                {/* 微信公众号 */}
                <div className="text-center group">
                  <div className="w-50 h-50 bg-white p-1.5 rounded-xl mb-2 shadow-[0_0_20px_rgba(56,180,74,0.2)] transition-transform group-hover:scale-105 duration-300">
                    <img 
                      src="/images/qrcode.jpg" 
                      alt="微信公众号" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="text-[15px] font-bold text-[#38B44A]/60 tracking-tighter uppercase">官方微信公众号</p>
                </div>

                {/* 备用二维码 */}
                <div className="text-center group">
                  <div className="w-50 h-50 bg-white p-1.5 rounded-xl mb-2 shadow-[0_0_20px_rgba(56,180,74,0.2)] transition-transform group-hover:scale-105 duration-300">
                    <img 
                      src="/images/techqr.jpg" 
                      alt="技术咨询" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="text-[15px] font-bold text-[#38B44A]/60 tracking-tighter uppercase">技术专家咨询</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧：快捷留言表单 */}
      <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-[32px] border border-[#38B44A]/20 backdrop-blur-sm shadow-2xl">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              required
              type="text" 
              placeholder="您的姓名" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-black/40 border border-[#38B44A]/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#38B44A] transition-all"
            />
            <input 
              required
              type="text" 
              placeholder="联系电话" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-black/40 border border-[#38B44A]/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#38B44A] transition-all"
            />
          </div>
          <input 
            required
            type="email" 
            placeholder="电子邮箱" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-black/40 border border-[#38B44A]/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#38B44A] transition-all"
          />
          <textarea 
            required
            placeholder="请描述您的需求..." 
            rows={4} 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full bg-black/40 border border-[#38B44A]/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#38B44A] transition-all resize-none"
          ></textarea>
          
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-[#38B44A] text-[#0B0E14] font-black rounded-xl hover:brightness-125 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(56,180,74,0.3)] disabled:opacity-50"
          >
            {status === 'sending' ? '正在发送...' : status === 'success' ? '✔ 发送成功' : '发送咨询需求'}
          </button>
          
          {status === 'error' && <p className="text-red-500 text-xs text-center">发送失败，请稍后重试</p>}
        </form>
      </div>

    </div>
  </div>
</section>      



      <footer  className="py-12 bg-[#0B0E14] border-t border-[#38B44A]/30 text-center text-[#38B44A] text-[10px] tracking-[0.2em]">
        <p>© 2026 深圳格通太赫兹智能科技有限公司 GRIDLINK. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}