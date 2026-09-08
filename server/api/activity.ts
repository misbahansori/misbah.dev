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

const fetchActivity = defineCachedFunction(
  (handle: string) => $fetch<Activity>(`https://gh-calendar.rschristian.dev/user/${handle}`),
  {
    name: "github-activity-v1",
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
