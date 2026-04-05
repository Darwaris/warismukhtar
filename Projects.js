export default function Loader() {
  return (
    <div className="loader">
      <h1>Initializing Darz...</h1>
      <style jsx>{`
        .loader {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
          color: #00ffe0;
          font-size: 2rem;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.3 }
          50% { opacity: 1 }
          100% { opacity: 0.3 }
        }
      `}</style>
    </div>
  );
}

