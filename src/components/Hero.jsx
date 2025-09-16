// src/components/Hero.jsx
export default function Hero({ title, subtitle, ctaText, ctaHref }) {
  return (
    <section className='hero container' style={{ padding: "80px 0 48px" }}>
      <h1 style={{ fontSize: 56, margin: "0 0 12px" }}>{title}</h1>
      <p style={{ fontSize: 20, opacity: 0.9, margin: "0 0 24px" }}>
        {subtitle}
      </p>
      {ctaText && (
        <a className='btn' href={ctaHref}>
          {ctaText}
        </a>
      )}
    </section>
  );
}
