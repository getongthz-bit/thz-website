"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 🛡️ 确认密码框的独立显示状态
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("两次输入的密码不一致，请检查！");
      return;
    }
    setLoading(true);
    // 模拟注册,待改动fetch
    setTimeout(() => {
      alert("注册申请已提交！请等待管理员审核您的账号。");
      setLoading(false);
    }, 1500);
  };

  // show/hide 字体
  const toggleLabelStyle: React.CSSProperties = {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",           
    color: "#A0AEC0",           
    fontWeight: "400",          
    fontFamily: "monospace",    
    textTransform: "lowercase", 
    opacity: 0.8,
    transition: "color 0.2s"
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", 
    padding: "16px", 
    paddingRight: "70px",       
    borderRadius: "15px", 
    border: "1px solid #E2E8F0", 
    outline: "none",
    fontSize: "14px"            
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-6">
      <div style={{ width: "100%", maxWidth: "450px", backgroundColor: "white", padding: "50px", borderRadius: "30px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}>
        
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#2D5A27" }}>注册新账号</h2>
          <p style={{ color: "#A0AEC0", fontSize: "14px", marginTop: "8px" }}>加入格通太赫兹智能管理平台</p>
        </div>

        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input 
            required 
            type="text" 
            placeholder="您的姓名" 
            style={inputStyle} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
          />
          
          <input 
            required 
            type="email" 
            placeholder="工作邮箱" 
            style={inputStyle} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />

          {/* 设置密码框 */}
          <div style={{ position: "relative" }}>
            <input 
              required 
              type={showPassword ? "text" : "password"} 
              placeholder="设置密码" 
              style={inputStyle} 
              onChange={e => setFormData({...formData, password: e.target.value})} 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              style={toggleLabelStyle}
              onMouseEnter={(e) => e.currentTarget.style.color = "#2D5A27"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#A0AEC0"}
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>

          {/* 确认密码框 */}
          <div style={{ position: "relative" }}>
            <input 
              required 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="确认密码" 
              style={inputStyle} 
              onChange={e => setFormData({...formData, confirmPassword: e.target.value})} 
            />
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
              style={toggleLabelStyle}
              onMouseEnter={(e) => e.currentTarget.style.color = "#2D5A27"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#A0AEC0"}
            >
              {showConfirmPassword ? "hide" : "show"}
            </button>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            style={{ 
              backgroundColor: "#2D5A27", 
              color: "white", 
              padding: "18px", 
              borderRadius: "15px", 
              fontWeight: "bold", 
              border: "none", 
              cursor: "pointer", 
              marginTop: "10px" 
            }} 
            className="hover:bg-[#38B44A] transition-all disabled:opacity-50"
          >
            {loading ? "提交中..." : "立即注册"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <Link href="/login" style={{ color: "#718096", fontSize: "13px", textDecoration: "none" }}>
            已有账号？<span style={{ color: "#2D5A27", fontWeight: "bold" }}>立即登录</span>
          </Link>
        </div>
      </div>
    </div>
  );
}