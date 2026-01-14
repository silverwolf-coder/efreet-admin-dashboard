import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const from = loc.state?.from || "/dashboard";

  const [email, setEmail] = useState("admin@demo.com");
  const [password, setPassword] = useState("password");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login({ email, password });
      nav(from, { replace: true });
    } catch (e2) {
      setErr(e2?.message || "Login gagal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-title">
          <div className="brand-dot" />
          <h2>Sign in</h2>
          <p className="muted">Efreet Version 1.0</p>
        </div>

        <form onSubmit={onSubmit} className="auth-form">
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </label>

          <label>
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </label>

          {err && <div className="alert">{err}</div>}

          <button className="btn primary" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>

          <p className="muted" style={{ marginTop: 10 }}>
            Demo: isi apa saja, login akan sukses.
          </p>
        </form>
      </div>
    </div>
  );
}
