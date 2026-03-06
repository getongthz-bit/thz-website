"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // 模拟登录
    setTimeout(() => {
      if (email === 'admin@gridlink.com' && password === '123456') {
        router.push('/');
      } else {
        setError('邮箱或密码错误，请重试');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-6">
      <div style={{ 
        width: "100%", 
        maxWidth: "450px", 
        backgroundColor: "white", 
        padding: "50px", 
        borderRadius: "30px", 
        boxShadow: "0 20px 60px rgba(0,0,0,0.05)" 
      }}>
        
        {/* Logo 部分 */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Link href="/">
            <img src="/images/logo1.png" alt="GRIDLINK" style={{ height: "100px", margin: "0 auto", display: "block" }} />
          </Link>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#2D5A27", marginTop: "20px" }}>内部管理系统</h2>
          <p style={{ color: "#A0AEC0", fontSize: "14px", marginTop: "8px" }}>请使用授权账号登录</p>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#4A5568", marginBottom: "8px", marginLeft: "4px" }}>
              账号邮箱
            </label>
            <input 
              required
              type="email" 
              placeholder="name@gridlink.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "16px", borderRadius: "15px", border: "1px solid #E2E8F0", outline: "none", fontSize: "14px" }} 
              className="focus:border-[#38B44A] transition-all"
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#4A5568", marginBottom: "8px", marginLeft: "4px" }}>
              登录密码
            </label>
            <input 
              required
              type="password" 
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "16px", borderRadius: "15px", border: "1px solid #E2E8F0", outline: "none", fontSize: "14px" }} 
              className="focus:border-[#38B44A] transition-all"
            />
          </div>

          {error && <p style={{ color: "#E53E3E", fontSize: "12px", textAlign: "center", margin: 0 }}>{error}</p>}

          <button 
            disabled={loading}
            type="submit" 
            style={{ 
              backgroundColor: "#2D5A27", color: "white", padding: "18px", borderRadius: "15px", fontWeight: "bold", fontSize: "16px", marginTop: "10px", border: "none", cursor: "pointer", width: "100%"
            }}
            className="hover:bg-[#38B44A] transition-all active:scale-[0.98] shadow-lg disabled:opacity-50"
          >
            {loading ? "验证中..." : "立即登录"}
          </button>
        </form> 

        {/* 底部链接区 */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", fontSize: "13px" }}>
          <Link href="/forgot-password" style={{ color: "#718096", textDecoration: "none" }} className="hover:text-[#2D5A27]">
            忘记密码？
          </Link>
          <div style={{ color: "#E2E8F0" }}>|</div>
          <Link href="/register" style={{ color: "#2D5A27", textDecoration: "none", fontWeight: "bold" }} className="hover:text-[#38B44A]">
            立即注册账号
          </Link>
        </div>

        {/* 分割线 */}
        <div style={{ margin: "30px 0", borderTop: "1px solid #EDF2F7" }}></div>

        {/* 返回首页 */}
        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ color: "#718096", fontSize: "13px", textDecoration: "none" }} className="hover:text-[#2D5A27]">
            ← 返回官网首页
          </Link>
        </div>
      </div>
    </div>
  );
}