"use client";

import Link from 'next/link';

export default function ServicesPage() {
  const navLinks = [
    { name: "首页", href: "/" },
    { name: "关于我们", href: "/about" },
    { name: "技术服务", href: "/services" },
    { name: "项目案例", href: "/#portfolio" },
    { name: "客户评价", href: "/#testimonials" },
    { name: "联系我们", href: "/#contactus" },
  ];

  const services = [
    { 
      slug: "exterior-wall",
      title: "建筑外墙安全检测",
      icon: "🏢",
      desc: "利用格通太赫兹雷达技术，对高层建筑外墙进行非接触式扫描，精准识别空鼓、裂纹及内部结构缺陷。",
      details: ["亚毫米级损伤识别", "数字化检测报告", "高空坠物隐患排查"]
    },
    {
      slug: "spectrum-analysis",
      title: "太赫兹频谱分析",
      icon: "🔬",
      desc: "针对复合材料、危化品及生物样品提供“指纹”频谱分析，支持高精度的物质识别与纯度鉴定。",
      details: ["无损、无电离辐射", "快速建立物质数据库", "实验室级分析精度"]
    },
    {
      slug: "custom-solutions",
      title: "行业定制化方案",
      icon: "💡",
      desc: "为工业无损探伤、6G通信研究、生物医疗等领域提供定制化太赫兹技术咨询与系统研发支持。",
      details: ["深度应用场景适配", "软硬件一体化开发", "全生命周期技术支持"]
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ position: "relative" }}>
      
      {/* --- 1. 顶部导航栏 (保持与 About 页面完全一致) --- */}
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
        <nav className="container mx-auto px-6 md:px-12" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ flexShrink: 0 }}>
            <Link href="/">
              <img 
                src="/images/logo1.png" 
                alt="GRIDLINK" 
                style={{ height: "140px", width: "auto", display: "block" }} 
              />
            </Link>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "30px", fontSize: "14px", fontWeight: "bold" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: "#2D5A27", textDecoration: "none", borderBottom: "2px solid transparent" }} className="hover:border-[#38B44A] transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/login" style={{ backgroundColor: "#2D5A27", color: "white", padding: "8px 24px", borderRadius: "99px", fontWeight: "bold", textDecoration: "none", fontSize: "14px" }} className="hover:bg-[#38B44A] shadow-md transition-all">
              登录系统
            </Link>
          </div>
        </nav>
      </header>

      {/* --- 2. 主体内容 --- */}
      <main style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-6 md:px-12" style={{ maxWidth: "1280px" }}>
          
          {/* 标题区：风格同步 About 页面 */}
          <div style={{ position: "relative", marginBottom: "80px", height: "80px" }}>
            <span style={{ 
              position: "absolute", 
              top: "-15px", 
              left: 0, 
              fontSize: "80px", 
              fontWeight: 900, 
              color: "#F9F9F9", 
              zIndex: 0,
              pointerEvents: "none",
              whiteSpace: "nowrap"
            }}>
              SERVICES
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
              技术服务
            </h1>
          </div>

                    {/* 服务矩阵网格 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: "40px", 
                  backgroundColor: "#F9FBF9", 
                  borderRadius: "20px",
                  border: "1px solid #EDF2F7",
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }} className="hover:shadow-xl hover:-translate-y-2 group">
                  
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "20px",
                    width: "70px",
                    height: "70px",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "15px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
                  }}>
                    {service.icon}
                  </div>

                  <h4 style={{ fontSize: "24px", color: "#1A202C", marginBottom: "15px", fontWeight: "bold" }}>
                    {service.title}
                  </h4>
                  
                  <p style={{ color: "#4A5568", fontSize: "16px", lineHeight: "1.7", marginBottom: "25px", textAlign: "justify" }}>
                    {service.desc}
                  </p>

                  <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "20px" }}>
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", fontSize: "14px", color: "#2D5A27", fontWeight: "bold" }}>
                        <span style={{ color: "#38B44A" }}></span> {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <footer style={{ padding: "40px 0", backgroundColor: "#F7FAFC", borderTop: "1px solid #EDF2F7", textAlign: "center", color: "#A0AEC0", fontSize: "12px" }}>
        <p>© 2026 深圳格通太赫兹智能科技有限公司 GRIDLINK. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}