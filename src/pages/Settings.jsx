import React, { useState } from "react";

export default function Settings() {
  const [company, setCompany] = useState("PT Contoh Sukses");
  const [timezone, setTimezone] = useState("Asia/Jakarta");
  const [emailNotif, setEmailNotif] = useState(true);

  return (
    <div className="stack">
      <div className="page-head">
        <h1>Settings</h1>
        <p className="muted">Konfigurasi aplikasi (dummy).</p>
      </div>

      <div className="grid settings">
        <div className="card">
          <div className="card-head">
            <h3>General</h3>
            <span className="muted">Basic preferences</span>
          </div>

          <label className="field">
            Company name
            <input className="input" value={company} onChange={(e) => setCompany(e.target.value)} />
          </label>

          <label className="field">
            Timezone
            <input className="input" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
          </label>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Notifications</h3>
            <span className="muted">Email preferences</span>
          </div>

          <label className="toggle">
            <input type="checkbox" checked={emailNotif} onChange={(e) => setEmailNotif(e.target.checked)} />
            <span>Enable email notifications</span>
          </label>

          <div className="muted" style={{ marginTop: 10 }}>
            (Ini placeholder. Nanti bisa disambung ke backend.)
          </div>
        </div>
      </div>
    </div>
  );
}
