// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      style={{ marginTop: 64, borderTop: "1px solid rgba(2,229,255,0.12)" }}
    >
      <div
        className='container'
        style={{
          padding: "28px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>© {new Date().getFullYear()} SecuADR</span>
        <a href='mailto:atlas.adr11@gmail.com'>Contact</a>
      </div>
    </footer>
  );
}
