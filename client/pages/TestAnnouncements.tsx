import { useEffect, useState } from "react";

/**
 * Converts Strapi rich text format to plain text
 */
function normalizeDescription(description: any): string {
  if (!description) return "";

  if (typeof description === "string") return description;

  if (Array.isArray(description)) {
    return description
      .map((block: any) => {
        if (block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }
        return "";
      })
      .join(" ");
  }

  return "";
}

/**
 * Normalize Strapi announcement to standard format
 */
function normalizeAnnouncement(item: any) {
  let attachment = null;
  let image = null;
  const strapiBaseUrl = "http://72.61.225.136:1340";

  // Handle image from Strapi
  if (item.Image?.url) {
    const imagePath = item.Image.url;
    image = imagePath.startsWith('http') ? imagePath : `${strapiBaseUrl}${imagePath}`;
  } else if (item.image && typeof item.image === 'string') {
    image = item.image.startsWith('http') ? item.image : `${strapiBaseUrl}${item.image}`;
  }

  // Handle pdf_link object from Strapi
  if (item.pdf_link?.url) {
    const pdfPath = item.pdf_link.url;
    console.log("PDF path from Strapi:", pdfPath);
    // Use direct Strapi URL since public access is now enabled
    attachment = {
      url: `${strapiBaseUrl}${pdfPath}`,
      name: item.pdf_link.name || 'document.pdf'
    };
  } else if (item.attachment) {
    attachment = item.attachment;
  }

  return {
    id: item.id || item.documentId,
    title: item.Title || item.title,
    description: normalizeDescription(item.Description || item.description),
    department_code: item.Department_code || item.department_code,
    school_code: item.school_code,
    status: item.Status || item.status || 'active',
    expiry_date: item.Expirydate || item.expiry_date,
    date: item.createdAt,
    attachment: attachment,
    image: image,
  };
}

/**
 * Handle PDF download by opening in new tab
 */
function handlePdfDownload(pdfUrl: string) {
  console.log("Opening PDF from:", pdfUrl);

  // Ensure absolute URL
  let absoluteUrl = pdfUrl;
  if (!pdfUrl.startsWith('http')) {
    absoluteUrl = `${window.location.origin}${pdfUrl}`;
  }

  console.log("Opening absolute URL:", absoluteUrl);

  // Open in new tab
  window.open(absoluteUrl, '_blank');
}

export default function TestAnnouncements() {
  const [allData, setAllData] = useState<any>(null);
  const [filteredData, setFilteredData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First fetch all announcements from our server proxy
    const allUrl = "/api/strapi/announcements";
    const filterUrl = "/api/strapi/announcements?department_code=cse";

    console.log("Fetching from:", allUrl);
    console.log("Filtering from:", filterUrl);

    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch(allUrl),
          fetch(filterUrl)
        ]);

        console.log("Response 1 status:", res1.status);
        console.log("Response 2 status:", res2.status);

        if (!res1.ok) {
          const errorText = await res1.text();
          console.error("Response 1 error:", errorText);
        }
        if (!res2.ok) {
          const errorText = await res2.text();
          console.error("Response 2 error:", errorText);
        }

        const json1 = await res1.json();
        const json2 = await res2.json();

        console.log("All announcements:", json1);
        console.log("Filtered CSE announcements:", json2);
        setAllData(json1);
        setFilteredData(json2);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        console.error("Error details:", (err as any)?.message);
        setAllData({ error: "Failed to fetch announcements" });
        setFilteredData({ error: "Failed to fetch CSE announcements" });
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading announcements...</div>;

  if (allData?.error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error Loading Announcements</h1>
        <p className="text-red-600 mb-4">{allData.error}</p>
        <p className="text-gray-600">Check the browser console (F12) for more details</p>
      </div>
    );
  }

  const allAnnouncementsRaw = Array.isArray(allData) ? allData : (allData?.data || []);
  const cseAnnouncementsRaw = Array.isArray(filteredData) ? filteredData : (filteredData?.data || []);

  const allAnnouncements = allAnnouncementsRaw.map(normalizeAnnouncement);
  const cseAnnouncements = cseAnnouncementsRaw.map(normalizeAnnouncement);

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
                    Department: {item.department_code || 'N/A'}
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
            <ul className="space-y-4">
              {cseAnnouncements.map((item: any) => (
                <li key={item.id} className="bg-white p-4 rounded border">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Department: {item.department_code || 'N/A'} | Status: {item.status || 'N/A'}
                  </p>
                  {item.attachment ? (
                    <p className="text-sm mt-3 p-2 bg-blue-100 rounded">
                      <button
                        onClick={() => {
                          handlePdfDownload(item.attachment.url);
                        }}
                        className="text-blue-600 hover:underline font-semibold cursor-pointer"
                      >
                        📎 Download PDF: {item.attachment.name}
                      </button>
                    </p>
                  ) : (
                    <p className="text-xs text-red-500 mt-2">⚠️ No PDF attached</p>
                  )}
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
