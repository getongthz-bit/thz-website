"use client";

import Link from 'next/link';

export default function AboutPage() {
  const navLinks = [
    { name: "首页", href: "/" },
    { name: "关于我们", href: "/about" },
    { name: "技术服务", href: "/services" },
    { name: "项目案例", href: "/#portfolio" },
    { name: "客户评价", href: "/#testimonials" },
    { name: "联系我们", href: "/#contactus" },
  ];

  const honors = [
    { src: "/images/honor1.jpg", desc: "国家领导人在人民大会堂接见外国专家" },
    { src: "/images/honor2.jpg", desc: "时任国家副总理马凯为布兰卡教授颁奖" },
    { src: "/images/honor3.jpg", desc: "全国政协副主席接见格通科技CEO" },
    { src: "/images/honor4.jpg", desc: "参与闽商产业联盟成立仪式" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ position: "relative" }}>
      
      {/* --- 1. 顶部导航栏：强行固定高度、背景和层级 --- */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center"
      }}>
        <nav className="container mx-auto px-6 md:px-12" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}>
          {/* Logo 区域：强行限制高度为 45px，防止撑爆页面 */}
          <div style={{ flexShrink: 0 }}>
            <Link href="/">
              <img 
                src="/images/logo1.png" 
                alt="GRIDLINK" 
                style={{ height: "140px", width: "auto", display: "block" }} 
              />
            </Link>
          </div>
          
          {/* 右侧：菜单 + 按钮 */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            {/* 导航菜单：移除隐藏类，确保一直显示 */}
            <ul style={{ 
              display: "flex", 
              listStyle: "none", 
              margin: 0, 
              padding: 0, 
              gap: "30px",
              fontSize: "14px",
              fontWeight: "bold"
            }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    style={{ color: "#2D5A27", textDecoration: "none", borderBottom: "2px solid transparent" }}
                    className="hover:border-[#38B44A] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* 登录按钮 */}
            <Link 
              href="/login" 
              style={{
                backgroundColor: "#2D5A27",
                color: "white",
                padding: "8px 24px",
                borderRadius: "99px",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "14px"
              }}
              className="hover:bg-[#38B44A] shadow-md transition-all"
            >
              登录系统
            </Link>
          </div>
        </nav>
      </header>

      {/* --- 2. 主体内容：设置巨大的 pt 避开导航栏 --- */}
      <main style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-6 md:px-12" style={{ maxWidth: "1280px" }}>
          
          {/* 标题区：修复重合问题 */}
          <div style={{ position: "relative", marginBottom: "60px", height: "80px" }}>
            <span style={{ 
              position: "absolute", 
              top: "-15px", 
              left: 0, 
              fontSize: "80px", 
              fontWeight: 900, 
              color: "#F9F9F9", // 极其浅的灰色
              zIndex: 0,
              pointerEvents: "none"
            }}>
              ABOUT US
            </span>
            <h1 style={{ 
              position: "relative", 
              zIndex: 10, 
              fontSize: "42px", 
              fontWeight: "bold", 
              color: "#2D5A27", 
              borderLeft: "8px solid #2D5A27", 
              paddingLeft: "20px",
              margin: 0 
            }}>
              企业简介
            </h1>
          </div>

          {/* 核心布局：左文字 (55%) vs 右图片 (45%) */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
            
            {/* 左侧文字区 */}
            <div style={{ flex: "1.2", minWidth: "350px", fontSize: "17px", lineHeight: "1.8", color: "#4A5568" }}>
              <p style={{ marginBottom: "30px", textAlign: "justify" }}>
                <strong style={{ fontSize: "24px", color: "#1A202C", display: "block", marginBottom: "10px" }}>格通科技</strong>
                格通科技，成立于2012年，是中共中央组织部千人计划引进人才团队创立的，从事6G无线通信、人工智能及相关领域关键技术研发和产业化的高科技公司。公司拥有国际领先的技术研发实力，自落地中国以来，公司团队专注于物联网机器对机器通信、6G无线通信、太赫兹雷达、超低延时超可靠网络、人工智能模型等先进技术研发，为创新医疗、城市更新、数字家庭提供先进的产业解决方案。
              </p>
              
              <div style={{ borderTop: "1px solid #EDF2F7", paddingTop: "30px" }}>
                <p style={{ marginBottom: "15px" }}><strong style={{ color: "#2D5A27" }}>数字能源</strong> 格通科技团队代表悉尼大学同IBM、GE通用电气、兰吉尔电气和Google等顶级研究机构共同参与了总投资30亿澳币的澳大利亚悉尼国家智慧城市智慧电网示范项目。</p>
                <p style={{ marginBottom: "15px" }}><strong style={{ color: "#2D5A27" }}>数字家庭</strong> 格通科技与阿里、京东、华为、日立、大金深度合作，连接了上万种电器产品，分别完成了万科、蓝光集团、首都开发集团、金地集团等大型地产整装级项目。</p>
                <p style={{ marginBottom: "15px" }}><strong style={{ color: "#2D5A27" }}>创新医疗</strong> 我们在太赫兹雷达、主动医疗人工智能大语言模型、主动医疗管理等方面有着领先的技术和应用。</p>
                <p style={{ marginBottom: "15px" }}><strong style={{ color: "#2D5A27" }}>城市更新</strong> 格通科技在桩基监测、钢结构监测、韧性城市方面有着领先的技术和产业解决方案。</p>
              </div>
            </div>

            {/* 右侧照片墙：强行 2x2 网格并限制图片大小 */}
            <div style={{ flex: "1", minWidth: "350px", paddingTop: "80px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {honors.map((item, index) => (
                  <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ 
                      aspectRatio: "4/3", 
                      width: "100%", 
                      overflow: "hidden", 
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                    }}>
                      <img 
                        src={item.src} 
                        alt="荣誉" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x300?text=Honor+Photo"; }} 
                      />
                    </div>
                    <p style={{ marginTop: "10px", fontSize: "12px", color: "#718096", textAlign: "center", lineHeight: "1.4" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer style={{ padding: "40px 0", backgroundColor: "#F7FAFC", borderTop: "1px solid #EDF2F7", textAlign: "center", color: "#A0AEC0", fontSize: "12px" }}>
        <p>© 2026 深圳格通太赫兹智能科技有限公司 GRIDLINK. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}