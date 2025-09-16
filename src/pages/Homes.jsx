import React from "react";
import logo from "../assets/logo1.png";
const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: "linear-gradient(135deg, #e0fcff 0%, #e6fffa 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <img
        src={logo}
        alt='SecuADR Logo'
        style={{
          width: "130px",
          height: "130px",
          marginBottom: "28px",
          backgroundColor: "#00a9b7",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,169,183,0.14)",
        }}
      />
      <h1
        style={{
          color: "#00a9b7",
          fontSize: "2.6rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          letterSpacing: "1.5px",
          textAlign: "center",
        }}
      >
        Welcome to SecuADR
      </h1>
      <p
        style={{
          color: "#d1cbcbff",
          fontSize: "1.13rem",
          textAlign: "center",
          maxWidth: "370px",
          lineHeight: 1.65,
          marginBottom: "2.2rem",
        }}
      >
        AI-powered gesture authentication for enterprise and fintech.
        <br />
        Security as seamless as a wave of your hand.
      </p>
      <button
        style={{
          // background: "#00a9b7",
          color: "#fff",
          fontSize: "1.1rem",
          padding: "0.8rem 2rem",
          border: "none",
          borderRadius: "999px",
          letterSpacing: "0.5px",
          cursor: "pointer",
          fontWeight: 600,
          boxShadow: "0 2px 8px rgba(0,169,183,0.13)",
          marginBottom: "8px",
          transition: "background 0.2s",
        }}
        onClick={() => (window.location.href = "/login")}
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
