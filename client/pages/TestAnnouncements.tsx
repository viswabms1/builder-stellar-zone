import { useEffect, useState } from "react";

export default function TestAnnouncements() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://72.61.225.136:1340/api/announcements?filters[department_code][$eq]=aero")
      .then((res) => res.json())
      .then((json) => {
        console.log("Strapi response:", json);
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  const announcements = Array.isArray(data) ? data : (data?.data || []);

  if (!data || announcements.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Test Announcements - Aerospace</h1>
        <p>No data received from Strapi</p>
        <pre className="mt-4 bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Aerospace Department Announcements</h1>
      <p className="mb-4">Found {announcements.length} announcements</p>

      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements yet for Aerospace department.</p>
      ) : (
        <ul className="space-y-4">
          {announcements.map((item: any) => (
            <li key={item.id} className="border p-4 rounded">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-400 mt-2">
                Department: {item.department_code} | Status: {item.status}
              </p>
              {item.attachment && (
                <a
                  href={item.attachment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm mt-2 inline-block"
                >
                  📎 Download Attachment
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
      
      <details className="mt-8">
        <summary className="cursor-pointer font-bold">Raw Strapi API Response</summary>
        <pre className="mt-4 bg-gray-100 p-4 rounded overflow-auto text-xs">
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>
    </section>
  );
}
