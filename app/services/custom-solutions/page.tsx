"use client";

import Link from 'next/link';

export default function ServiceDetail() {
  const navLinks = [
    { name: "首页", href: "/" },
    { name: "关于我们", href: "/about" },
    { name: "技术服务", href: "/services" },
    { name: "项目案例", href: "/#portfolio" },
    { name: "客户评价", href: "/#testimonials" },
    { name: "联系我们", href: "/#contactus" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ position: "relative" }}>
      
      {/* --- 1. 顶部导航栏 (保持全站一致) --- */}
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
              <img src="/images/logo1.png" alt="GRIDLINK" style={{ height: "140px", width: "auto", display: "block" }} />
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "30px", fontSize: "14px", fontWeight: "bold" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: "#2D5A27", textDecoration: "none" }} className="hover:text-[#38B44A] transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* --- 2. 主体内容 --- */}
      <main style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-6 md:px-12" style={{ maxWidth: "1200px" }}>
          
          {/* 面包屑导航 */}
          <div style={{ marginBottom: "30px", fontSize: "14px", color: "#A0AEC0" }}>
            <Link href="/services" style={{ color: "#38B44A", textDecoration: "none" }}>技术服务</Link>
            <span style={{ margin: "0 10px" }}>/</span>
            <span>建筑外墙安全检测</span>
          </div>

          {/* 标题区：风格同步 */}
          <div style={{ position: "relative", marginBottom: "60px" }}>
             <h1 style={{ 
              fontSize: "42px", 
              fontWeight: "bold", 
              color: "#2D5A27", 
              borderLeft: "8px solid #2D5A27", 
              paddingLeft: "20px" 
            }}>
              建筑外墙安全检测服务
            </h1>
            <p style={{ marginTop: "20px", fontSize: "18px", color: "#4A5568", maxWidth: "800px", lineHeight: "1.6" }}>
              利用自主研发的太赫兹雷达系统，为城市建筑提供毫米级精度的非接触式“体检”，精准识别肉眼不可见的内部缺陷。
            </p>
          </div>

          {/* 核心内容布局：左文右图 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", marginBottom: "80px" }}>
            <div style={{ flex: "1.2", minWidth: "350px" }}>
              <h2 style={{ fontSize: "28px", color: "#1A202C", marginBottom: "20px", fontWeight: "bold" }}>技术优势</h2>
              <div style={{ backgroundColor: "#F9FBF9", padding: "30px", borderRadius: "20px", border: "1px solid #EDF2F7" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { t: "高穿透力", d: "可穿透多种建筑饰面材料，检测厚度达数厘米。" },
                    { t: "高分辨率", d: "亚毫米级识别精度，捕捉极细微的空鼓与裂缝。" },
                    { t: "即时成像", d: "现场实时生成检测图谱，效率比传统方式提升 5 倍。" },
                    { t: "100% 安全", d: "无电离辐射，对环境及行人完全无害。" }
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: "20px" }}>
                      <strong style={{ color: "#2D5A27", display: "block", fontSize: "18px" }}>{item.t}</strong>
                      <span style={{ color: "#718096" }}>{item.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ flex: "1", minWidth: "350px" }}>
              <div style={{ 
                borderRadius: "20px", 
                overflow: "hidden", 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "4px solid white"
              }}>
                {/* 放服务的实景图或检测原理图 */}
                <img src="/images/banner.jpg" alt="检测现场" style={{ width: "100%", height: "auto", display: "block" }} 
                     onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800?text=Service+Image"; }} />
              </div>
            </div>
          </div>

          {/* 应用场景区：荣誉陈列风格 */}
          <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "60px" }}>
            <h2 style={{ fontSize: "28px", color: "#1A202C", marginBottom: "40px", textAlign: "center", fontWeight: "bold" }}>应用场景</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
              {["高层住宅外墙定期体检", "既有建筑加固前勘测", "历史保护建筑结构评估", "新建工程验收质量抽检"].map((scene, i) => (
                <div key={i} style={{ 
                  textAlign: "center", 
                  padding: "30px", 
                  border: "1px solid #EDF2F7", 
                  borderRadius: "15px" 
                }}>
                  <div style={{ color: "#38B44A", fontSize: "24px", marginBottom: "15px" }}>●</div>
                  <p style={{ fontWeight: "bold", color: "#2D5A27" }}>{scene}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 底部行动条 */}
          <div style={{ marginTop: "100px", textAlign: "center" }}>
            <Link href="/#contactus" style={{ 
              backgroundColor: "#2D5A27", 
              color: "white", 
              padding: "15px 50px", 
              borderRadius: "99px", 
              fontSize: "18px", 
              fontWeight: "bold", 
              textDecoration: "none",
              boxShadow: "0 10px 20px rgba(56,180,74,0.2)"
            }} className="hover:bg-[#38B44A] transition-all">
              立即咨询解决方案
            </Link>
          </div>

        </div>
      </main>

      {/* --- 3. 页脚 (全站一致) --- */}
      <footer style={{ padding: "40px 0", backgroundColor: "#F7FAFC", borderTop: "1px solid #EDF2F7", textAlign: "center", color: "#A0AEC0", fontSize: "12px" }}>
        <p>© 2026 深圳格通太赫兹智能科技有限公司 GRIDLINK. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}