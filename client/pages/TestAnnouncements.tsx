import { useEffect, useState } from "react";
import { ReadMore } from "@/components/ReadMore";

/**
 * Converts Strapi rich text format to plain text
 * Handles block-based rich text from Strapi with proper paragraph spacing
 */
function normalizeDescription(description: any): string {
  if (!description) return "";

  if (typeof description === "string") return description;

  if (Array.isArray(description)) {
    return description
      .map((block: any) => {
        // Handle paragraph blocks
        if (block.type === "paragraph" && block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => {
              // Handle text nodes
              if (typeof child.text === "string") {
                return child.text;
              }
              // Handle bold, italic, underline text
              if (child.children && Array.isArray(child.children)) {
                return child.children
                  .map((c: any) => c.text || "")
                  .join("");
              }
              return "";
            })
            .join("");
        }

        // Handle heading blocks
        if (block.type?.includes("heading") && block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }

        // Handle list items
        if ((block.type === "list-item" || block.type === "li") && block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }

        return "";
      })
      .filter((text) => text.trim().length > 0) // Remove empty blocks
      .join("\n\n"); // Join with paragraph spacing
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

  // Handle image from Strapi - use server proxy to avoid mixed content issues
  if (item.Image?.url) {
    const imagePath = item.Image.url;
    image = `/api/strapi/image?path=${encodeURIComponent(imagePath)}`;
  } else if (item.image && typeof item.image === 'string') {
    image = `/api/strapi/image?path=${encodeURIComponent(item.image)}`;
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
  const [eceData, setEceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch announcements from our server proxy
    const allUrl = "/api/strapi/announcements";
    const filterUrl = "/api/strapi/announcements?department_code=cse";
    const eceUrl = "/api/strapi/announcements?department_code=ece";

    console.log("Fetching from:", allUrl);
    console.log("Filtering from:", filterUrl);
    console.log("ECE from:", eceUrl);

    const fetchData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          fetch(allUrl),
          fetch(filterUrl),
          fetch(eceUrl)
        ]);

        console.log("Response 1 status:", res1.status);
        console.log("Response 2 status:", res2.status);
        console.log("Response 3 status:", res3.status);

        if (!res1.ok) {
          const errorText = await res1.text();
          console.error("Response 1 error:", errorText);
        }
        if (!res2.ok) {
          const errorText = await res2.text();
          console.error("Response 2 error:", errorText);
        }
        if (!res3.ok) {
          const errorText = await res3.text();
          console.error("Response 3 error:", errorText);
        }

        const json1 = await res1.json();
        const json2 = await res2.json();
        const json3 = await res3.json();

        console.log("All announcements:", json1);
        console.log("Filtered CSE announcements:", json2);
        console.log("Filtered ECE announcements:", json3);
        setAllData(json1);
        setFilteredData(json2);
        setEceData(json3);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        console.error("Error details:", (err as any)?.message);
        setAllData({ error: "Failed to fetch announcements" });
        setFilteredData({ error: "Failed to fetch CSE announcements" });
        setEceData({ error: "Failed to fetch ECE announcements" });
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
  const eceAnnouncementsRaw = Array.isArray(eceData) ? eceData : (eceData?.data || []);

  const allAnnouncements = allAnnouncementsRaw.map(normalizeAnnouncement);
  const cseAnnouncements = cseAnnouncementsRaw.map(normalizeAnnouncement);
  const eceAnnouncements = eceAnnouncementsRaw.map(normalizeAnnouncement);

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
              {cseAnnouncements.map((item: any, idx: number) => {
                const rawItem = cseAnnouncementsRaw[idx];
                return (
                  <li key={item.id} className="bg-white p-4 rounded border">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">{item.description}</p>
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
                    <details className="mt-3 text-xs">
                      <summary className="cursor-pointer text-gray-600 hover:text-gray-800">Show raw Strapi Description</summary>
                      <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto max-h-40 text-xs">
                        {JSON.stringify(rawItem?.Description, null, 2)}
                      </pre>
                    </details>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="mb-6 p-4 bg-yellow-50 rounded border border-yellow-200">
          <h2 className="text-xl font-bold mb-2">ECE Department Announcements (Filtered)</h2>
          <p className="mb-2">Total: <strong>{eceAnnouncements.length}</strong></p>
          {eceAnnouncements.length === 0 ? (
            <p className="text-gray-500">No ECE announcements found</p>
          ) : (
            <ul className="space-y-4">
              {eceAnnouncements.map((item: any, idx: number) => {
                const rawItem = eceAnnouncementsRaw[idx];
                return (
                  <li key={item.id} className="bg-white p-4 rounded border">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">{item.description}</p>
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
                    <details className="mt-3 text-xs">
                      <summary className="cursor-pointer text-gray-600 hover:text-gray-800">Show raw Strapi Description</summary>
                      <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto max-h-40 text-xs">
                        {JSON.stringify(rawItem?.Description, null, 2)}
                      </pre>
                    </details>
                  </li>
                );
              })}
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

          <div>
            <h3 className="font-bold mb-2">ECE Filtered Response:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-auto text-xs max-h-96">
              {JSON.stringify(eceData, null, 2)}
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
