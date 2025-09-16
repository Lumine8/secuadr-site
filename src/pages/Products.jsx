// src/pages/Product.jsx
export default function Product() {
  return (
    <section className='container' style={{ padding: "48px 0 64px" }}>
      <h2>How it works</h2>
      <p>
        Custom CNN models analyze gesture trajectories and fuse signals with a
        geometric $1 recognizer for robust verification.
      </p>
      <h3>API</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        POST /api/authenticate
        {"{"}
        "gestureData": [x, y, timestamp...], "userId": "user123", "sessionId":
        "session456"
        {"}"}
      </pre>
      <p>
        Responses include authenticated and confidence fields with a short‑lived
        token for session handoff.
      </p>
    </section>
  );
}
