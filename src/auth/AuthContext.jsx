import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const LS_KEY = "demo_auth_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = async ({ email, password }) => {
    // Demo auth: ganti ini ke API sungguhan nanti
    if (!email || !password) {
      throw new Error("Email dan password wajib diisi.");
    }
    const fakeUser = {
      id: "u_1",
      name: "Admin",
      email,
      role: "admin",
    };
    setUser(fakeUser);
    localStorage.setItem(LS_KEY, JSON.stringify(fakeUser));
    return fakeUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LS_KEY);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth harus dipakai di dalam AuthProvider");
  return ctx;
}
