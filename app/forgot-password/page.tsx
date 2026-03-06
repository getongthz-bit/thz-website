"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 模拟发送邮件逻辑,待改动fetch
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-6">
      <div style={{ width: "100%", maxWidth: "450px", backgroundColor: "white", padding: "50px", borderRadius: "30px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}>
        
        <div style={{ textAlign: "center", marginBottom: submitted ? "20px" : "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#2D5A27" }}>找回密码</h2>
          <p style={{ color: "#A0AEC0", fontSize: "14px", marginTop: "8px" }}>
            {submitted ? "重置链接已发送" : "请输入注册邮箱以接收密码重置链接"}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input required type="email" placeholder="name@gridlink-thz.com" value={email} onChange={e => setEmail(e.target.value)}
                   style={{ width: "100%", padding: "16px", borderRadius: "15px", border: "1px solid #E2E8F0", outline: "none" }} />
            <button type="submit" disabled={loading} style={{ backgroundColor: "#2D5A27", color: "white", padding: "18px", borderRadius: "15px", fontWeight: "bold", border: "none", cursor: "pointer" }} className="hover:bg-[#38B44A] transition-all disabled:opacity-50">
              {loading ? "发送中..." : "发送重置链接"}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#F9FBF9", borderRadius: "15px", color: "#2D5A27", fontSize: "14px", lineHeight: "1.6" }}>
            已向 <strong>{email}</strong> 发送重置邮件。<br />请检查您的收件箱（及垃圾邮件箱）。
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/login" style={{ color: "#718096", fontSize: "13px", textDecoration: "none" }} className="hover:text-[#2D5A27]">
            ← 返回登录界面
          </Link>
        </div>
      </div>
    </div>
  );
}