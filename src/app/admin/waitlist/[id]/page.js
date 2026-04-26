import Link from "next/link";
import pool from "@/lib/db";

export const metadata = {
  title: "Admin • Waitlist Detail",
};

function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString();
}

export default async function AdminWaitlistDetailPage({ params }) {
  const { id } = await params;

  let row = null;
  let dbError = null;
  try {
    const result = await pool.query(
      `SELECT id, email, phone, created_at FROM waitlist WHERE id = $1 LIMIT 1`,
      [id]
    );
    row = result.rows?.[0] || null;
  } catch (err) {
    dbError = err;
  }

  return (
    <div style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
          Waitlist submission
        </h1>
        <Link href="/admin/waitlist" style={{ color: "#111" }}>
          Back
        </Link>
      </div>

      <div
        style={{
          marginTop: 16,
          border: "1px solid #eee",
          borderRadius: 12,
          padding: 16,
          maxWidth: 720,
        }}
      >
        {dbError ? (
          <div>
            <div style={{ fontWeight: 700, color: "#7a1f1f" }}>
              Database connection failed
            </div>
            <div style={{ marginTop: 6 }}>
              Make sure Postgres is running and `DATABASE_URL` is set.
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: "ui-monospace, SFMono-Regular",
                color: "#7a1f1f",
              }}
            >
              {String(dbError?.message || dbError)}
            </div>
          </div>
        ) : !row ? (
          <div>Not found.</div>
        ) : (
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              rowGap: 10,
              columnGap: 12,
              margin: 0,
            }}
          >
            <dt style={{ color: "#666" }}>ID</dt>
            <dd style={{ margin: 0 }}>{row.id}</dd>

            <dt style={{ color: "#666" }}>Email</dt>
            <dd style={{ margin: 0 }}>{row.email}</dd>

            <dt style={{ color: "#666" }}>Phone</dt>
            <dd style={{ margin: 0 }}>{row.phone || "—"}</dd>

            <dt style={{ color: "#666" }}>Created</dt>
            <dd style={{ margin: 0 }}>{formatDate(row.created_at)}</dd>
          </dl>
        )}
      </div>
    </div>
  );
}

