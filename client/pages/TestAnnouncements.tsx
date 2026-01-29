import { useEffect, useState } from "react";

export default function TestAnnouncements() {
  const [allData, setAllData] = useState<any>(null);
  const [filteredData, setFilteredData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First fetch all announcements
    Promise.all([
      fetch("http://72.61.225.136:1340/api/announcements"),
      fetch("http://72.61.225.136:1340/api/announcements?filters[department_code][$eq]=cse")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([json1, json2]) => {
        console.log("All announcements:", json1);
        console.log("Filtered CSE announcements:", json2);
        setAllData(json1);
        setFilteredData(json2);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  const allAnnouncements = Array.isArray(allData) ? allData : (allData?.data || []);
  const cseAnnouncements = Array.isArray(filteredData) ? filteredData : (filteredData?.data || []);

  return (
    <section className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Strapi Announcements Test</h1>

        <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
          <h2 className="text-xl font-bold mb-2">All Announcements</h2>
          <p className="mb-2">Total: <strong>{allAnnouncements.length}</strong></p>
          {allAnnouncements.length === 0 ? (
            <p className="text-gray-500">No announcements found</p>
          ) : (
            <ul className="space-y-2">
              {allAnnouncements.map((item: any) => (
                <li key={item.id} className="bg-white p-2 rounded border">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Department: {item.department_code || item.department || 'N/A'}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-6 p-4 bg-green-50 rounded border border-green-200">
          <h2 className="text-xl font-bold mb-2">CSE Department Announcements (Filtered)</h2>
          <p className="mb-2">Total: <strong>{cseAnnouncements.length}</strong></p>
          {cseAnnouncements.length === 0 ? (
            <p className="text-gray-500">No CSE announcements found</p>
          ) : (
            <ul className="space-y-2">
              {cseAnnouncements.map((item: any) => (
                <li key={item.id} className="bg-white p-3 rounded border">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Department: {item.department_code || item.department || 'N/A'} | Status: {item.status || 'N/A'}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <details className="border rounded p-4">
        <summary className="cursor-pointer font-bold text-lg mb-2">Raw API Responses</summary>

        <div className="space-y-4 mt-4">
          <div>
            <h3 className="font-bold mb-2">All Announcements Response:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-auto text-xs max-h-96">
              {JSON.stringify(allData, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="font-bold mb-2">CSE Filtered Response:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-auto text-xs max-h-96">
              {JSON.stringify(filteredData, null, 2)}
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
