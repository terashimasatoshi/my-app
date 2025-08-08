export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Welcome to My App</h1>

      {/* 在庫管理リンク追加 */}
      <a
        href="/inventory.html"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#4CAF50",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "20px",
        }}
      >
        在庫管理システムを開く
      </a>
    </main>
  );
}
