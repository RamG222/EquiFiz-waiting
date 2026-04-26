import Link from "next/link";
import pool from "@/lib/db";

export const metadata = {
  title: "Admin • Waitlist",
};

function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString();
}

export default async function AdminWaitlistPage({ searchParams }) {
  const qRaw = (await searchParams)?.q;
  const q = typeof qRaw === "string" ? qRaw.trim() : "";

  const limitRaw = (await searchParams)?.limit;
  const limit = Math.max(
    1,
    Math.min(500, Number.parseInt(String(limitRaw || "100"), 10) || 100)
  );

  const query = q
    ? `
      SELECT id, email, phone, created_at
      FROM waitlist
      WHERE email ILIKE $1 OR phone ILIKE $1
      ORDER BY created_at DESC
      LIMIT $2
    `
    : `
      SELECT id, email, phone, created_at
      FROM waitlist
      ORDER BY created_at DESC
      LIMIT $1
    `;

  const params = q ? [`%${q}%`, limit] : [limit];
  let rows = [];
  let dbError = null;
  try {
    const result = await pool.query(query, params);
    rows = result.rows || [];
  } catch (err) {
    dbError = err;
  }

  return (
    <div style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
          Waitlist submissions
        </h1>
        <div style={{ color: "#666" }}>{rows.length} shown</div>
      </div>

      {dbError ? (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 12,
            border: "1px solid #f3c6c6",
            background: "#fff5f5",
            color: "#7a1f1f",
            maxWidth: 900,
          }}
        >
          <div style={{ fontWeight: 700 }}>Database connection failed</div>
          <div style={{ marginTop: 6 }}>
            Make sure Postgres is running and `DATABASE_URL` is set.
          </div>
          <div style={{ marginTop: 6, fontFamily: "ui-monospace, SFMono-Regular" }}>
            {String(dbError?.message || dbError)}
          </div>
        </div>
      ) : null}

      <form
        action="/admin/waitlist"
        method="get"
        style={{
          marginTop: 16,
          display: "flex",
          gap: 8,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          name="q"
          defaultValue={q}
          placeholder="Search email or phone…"
          style={{
            padding: "10px 12px",
            border: "1px solid #ddd",
            borderRadius: 10,
            minWidth: 260,
          }}
        />
        <input type="hidden" name="limit" value={String(limit)} />
        <button
          type="submit"
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #111",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Search
        </button>
        {q ? (
          <Link href="/admin/waitlist" style={{ color: "#111" }}>
            Clear
          </Link>
        ) : null}
      </form>

      <div
        style={{
          marginTop: 16,
          border: "1px solid #eee",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#fafafa" }}>
              <th style={{ textAlign: "left", padding: 12, fontWeight: 600 }}>
                ID
              </th>
              <th style={{ textAlign: "left", padding: 12, fontWeight: 600 }}>
                Email
              </th>
              <th style={{ textAlign: "left", padding: 12, fontWeight: 600 }}>
                Phone
              </th>
              <th style={{ textAlign: "left", padding: 12, fontWeight: 600 }}>
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} style={{ borderTop: "1px solid #f1f1f1" }}>
                <td style={{ padding: 12, whiteSpace: "nowrap" }}>
                  <Link
                    href={`/admin/waitlist/${r.id}`}
                    style={{ color: "#111", textDecoration: "underline" }}
                  >
                    {r.id}
                  </Link>
                </td>
                <td style={{ padding: 12 }}>{r.email}</td>
                <td style={{ padding: 12 }}>{r.phone || "—"}</td>
                <td style={{ padding: 12, whiteSpace: "nowrap" }}>
                  {formatDate(r.created_at)}
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td style={{ padding: 12 }} colSpan={4}>
                  No submissions found.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

