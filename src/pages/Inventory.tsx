import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

type InventoryPost = {
  src: string;
  height: number;
  title: string;
};

const DEFAULT_POST_HEIGHT = 585;

const parseCsv = (csvText: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i <= csvText.length; i += 1) {
    const char = csvText[i] ?? '\n';
    const next = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(current.trim());
      current = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') {
        i += 1;
      }
      row.push(current.trim());
      current = '';

      if (row.some((cell) => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    current += char;
  }

  return rows;
};

const extractSrc = (rawValue: string): string | null => {
  const value = rawValue.trim();
  if (!value) {
    return null;
  }

  if (value.startsWith('<iframe')) {
    const match = value.match(/src=["']([^"']+)["']/i);
    return match?.[1] ?? null;
  }

  return value;
};

const parseInventoryPosts = (csvText: string): InventoryPost[] => {
  const rows = parseCsv(csvText);
  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map((header) => header.toLowerCase().trim());
  const srcIndex = headers.findIndex((header) => header === 'iframe_src' || header === 'src');
  const heightIndex = headers.findIndex((header) => header === 'height');
  const titleIndex = headers.findIndex((header) => header === 'title');

  if (srcIndex === -1) {
    return [];
  }

  return rows
    .slice(1)
    .map((row, index) => {
      const sourceValue = row[srcIndex] ?? '';
      const src = extractSrc(sourceValue);

      if (!src) {
        return null;
      }

      const parsedHeight = Number.parseInt(row[heightIndex] ?? '', 10);
      const safeHeight = Number.isFinite(parsedHeight) && parsedHeight >= 450 && parsedHeight <= 900
        ? parsedHeight
        : DEFAULT_POST_HEIGHT;
      const title = (row[titleIndex] ?? '').trim() || `SQ Motors post ${index + 1}`;

      return { src, height: safeHeight, title };
    })
    .filter((post): post is InventoryPost => post !== null);
};

const Inventory = () => {
  const [posts, setPosts] = useState<InventoryPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const feedUrl = import.meta.env.VITE_INVENTORY_SHEET_CSV_URL?.trim();

    if (!feedUrl) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const loadPosts = async () => {
      try {
        const response = await fetch(feedUrl, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`Failed to fetch inventory feed: ${response.status}`);
        }

        const csvText = await response.text();
        const parsedPosts = parseInventoryPosts(csvText);

        if (!isMounted) {
          return;
        }

        if (parsedPosts.length > 0) {
          setPosts(parsedPosts);
          setHasError(false);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error('Failed to fetch inventory feed.', error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-red-600 tracking-widest uppercase mb-2">Inventory</p>
            <h1 className="text-3xl font-bold text-gray-900">Recently Added</h1>
          </div>
          <a
            href={COMPANY_INFO.facebookMarketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            View Full Inventory
          </a>
        </div>

        <section>
          {isLoading && (
            <p className="text-center text-gray-600">Loading inventory...</p>
          )}

          {!isLoading && hasError && (
            <p className="text-center text-gray-700">
              Failed to fetch inventory.
              {' '}
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View on Facebook
              </a>
            </p>
          )}

          {!isLoading && !hasError && (
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <iframe
                  key={`${post.src}-${index}`}
                  src={post.src}
                  title={post.title}
                  width="100%"
                  height={String(post.height)}
                  className="w-full max-w-[500px] justify-self-center"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder={0}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </section>

        <div className="mt-10 text-center">
          <a
            href={COMPANY_INFO.facebookMarketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            View the Rest of Our Inventory
          </a>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/home"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
