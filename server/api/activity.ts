interface Contribution {
  date: string;
  intensity: string;
  count: number;
}

interface Activity {
  total: number;
  contributions: Contribution[][];
}

const GITHUB_HANDLE = "misbahansori";

// Cached separately from the handler so a failed upstream call is never
// written into the cache — only successful payloads are stored.
const fetchActivity = defineCachedFunction(
  (handle: string) => $fetch<Activity>(`https://gh-calendar.rschristian.dev/user/${handle}`),
  {
    name: "github-activity",
    maxAge: 60 * 60 * 6,
    getKey: (handle: string) => handle,
  },
);

export default defineEventHandler(async (): Promise<Activity> => {
  try {
    return await fetchActivity(GITHUB_HANDLE);
  } catch {
    // The page still renders; the graph shows its unavailable state.
    return { total: 0, contributions: [] };
  }
});
