import React from "react";
import "./Documentation.scss";

const Documentation = () => {
  return (
    <div className='documentation'>
      {/* Hero Section */}
      <section className='docs__hero'>
        <div className='container'>
          <h1>SecuADR Documentation</h1>
          <p className='docs__subtitle'>
            Complete developer guide for integrating SecuADR authentication into
            your applications.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className='docs__content'>
        <div className='container'>
          {/* Quick Start Section */}
          <div className='docs__section'>
            <h2>Quick Start</h2>
            <p>Get up and running with SecuADR in minutes.</p>

            <h3>Installation</h3>
            <pre className='docs__code'>
              <code>{`npm install secuadr-sdk
# or
yarn add secuadr-sdk`}</code>
            </pre>

            <h3>Basic Setup</h3>
            <pre className='docs__code'>
              <code>{`import { SecuADR } from 'secuadr-sdk';

const secuadr = new SecuADR({
  apiKey: 'your-api-key',
  endpoint: 'https://api.secuadr.com'
});

// Initialize authentication
await secuadr.initialize();`}</code>
            </pre>
          </div>

          {/* Authentication Flow Section */}
          <div className='docs__section'>
            <h2>Authentication Flow</h2>
            <p>Implement gesture-based authentication in your application.</p>

            <pre className='docs__code'>
              <code>{`// Start gesture capture
const session = await secuadr.startAuthentication({
  userId: 'user123',
  sessionTimeout: 30000
});

// Handle gesture events
session.onGesture((gestureData) => {
  console.log('Gesture captured:', gestureData);
});

// Authentication result
session.onResult((result) => {
  if (result.authenticated) {
    console.log('User authenticated successfully');
    console.log('Confidence:', result.confidence);
  }
});`}</code>
            </pre>
          </div>

          {/* API Reference Section */}
          <div className='docs__section'>
            <h2>API Reference</h2>

            <h3>Authentication Endpoint</h3>
            <div className='docs__api-endpoint'>
              <code>POST /api/v1/authenticate</code>
            </div>

            <h4>Request Body</h4>
            <pre className='docs__code'>
              <code>{`{
  "userId": "string",
  "gestureData": [
    { "x": 100, "y": 150, "timestamp": 1234567890 },
    { "x": 110, "y": 160, "timestamp": 1234567891 }
  ],
  "sessionId": "string"
}`}</code>
            </pre>

            <h4>Response</h4>
            <pre className='docs__code'>
              <code>{`{
  "success": true,
  "authenticated": true,
  "confidence": 0.94,
  "token": "jwt-token-here",
  "expiresIn": 3600
}`}</code>
            </pre>
          </div>

          {/* Configuration Section */}
          <div className='docs__section'>
            <h2>Configuration Options</h2>

            <table className='docs__table'>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>apiKey</td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>required</td>
                  <td>Your SecuADR API key</td>
                </tr>
                <tr>
                  <td>endpoint</td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>api.secuadr.com</td>
                  <td>API endpoint URL</td>
                </tr>
                <tr>
                  <td>timeout</td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>30000</td>
                  <td>Authentication timeout (ms)</td>
                </tr>
                <tr>
                  <td>minConfidence</td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>0.8</td>
                  <td>Minimum confidence threshold</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Integration Examples Section */}
          <div className='docs__section'>
            <h2>Integration Examples</h2>

            <h3>React Integration</h3>
            <pre className='docs__code'>
              <code>{`import React, { useEffect, useState } from 'react';
import { SecuADR } from 'secuadr-sdk';

function LoginComponent() {
  const [secuadr, setSecuadr] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initSecuADR = async () => {
      const instance = new SecuADR({
        apiKey: process.env.REACT_APP_SECUADR_API_KEY,
        endpoint: 'https://api.secuadr.com'
      });
      
      await instance.initialize();
      setSecuadr(instance);
    };
    
    initSecuADR();
  }, []);

  const handleAuthentication = async () => {
    const result = await secuadr.authenticate({
      userId: 'current-user-id'
    });
    
    setIsAuthenticated(result.authenticated);
  };

  return (
    <div>
      <button onClick={handleAuthentication}>
        Authenticate with Gesture
      </button>
      {isAuthenticated && <p>✅ Authenticated successfully!</p>}
    </div>
  );
}`}</code>
            </pre>

            <h3>Node.js Backend</h3>
            <pre className='docs__code'>
              <code>{`const express = require('express');
const { SecuADRServer } = require('secuadr-server-sdk');

const app = express();
const secuadr = new SecuADRServer({
  apiKey: process.env.SECUADR_API_KEY,
  secretKey: process.env.SECUADR_SECRET_KEY
});

app.post('/auth/gesture', async (req, res) => {
  try {
    const { userId, gestureData } = req.body;
    
    const result = await secuadr.verify({
      userId,
      gestureData
    });
    
    if (result.authenticated) {
      // Generate session token
      const token = jwt.sign(
        { userId, confidence: result.confidence },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      
      res.json({ success: true, token });
    } else {
      res.status(401).json({ 
        success: false, 
        error: 'Authentication failed' 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});`}</code>
            </pre>
          </div>

          {/* Support Section */}
          <div className='docs__section'>
            <h2>Support & Resources</h2>
            <p>Need help? We're here to assist you with SecuADR integration.</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#f7fafc",
                  borderRadius: "12px",
                  border: "1px solid rgba(160, 174, 192, 0.2)",
                }}
              >
                <h4 style={{ color: "#1a365d", marginBottom: "1rem" }}>
                  📧 Email Support
                </h4>
                <p style={{ marginBottom: "0.5rem" }}>Technical Support:</p>
                <a
                  href='mailto:atlas.adr11@gmail.com'
                  style={{ color: "#3182ce", fontWeight: "600" }}
                >
                  atlas.adr11@gmail.com
                </a>
                <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                  General Inquiries:
                </p>
                <a
                  href='mailto:sankargopan1@gmail.com'
                  style={{ color: "#3182ce", fontWeight: "600" }}
                >
                  sankargopan1@gmail.com
                </a>
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#f7fafc",
                  borderRadius: "12px",
                  border: "1px solid rgba(160, 174, 192, 0.2)",
                }}
              >
                <h4 style={{ color: "#1a365d", marginBottom: "1rem" }}>
                  💻 Developer Resources
                </h4>
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <a
                      href='https://github.com/Lumine8/SecuADR'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: "#3182ce", fontWeight: "600" }}
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <a
                      href='/examples'
                      style={{ color: "#3182ce", fontWeight: "600" }}
                    >
                      Code Examples
                    </a>
                  </li>
                  <li>
                    <a
                      href='/api-reference'
                      style={{ color: "#3182ce", fontWeight: "600" }}
                    >
                      Full API Reference
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
