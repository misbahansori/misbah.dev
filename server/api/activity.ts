interface Contribution {
  date: string;
  intensity: string;
  count: number;
}

interface Activity {
  total: number;
  contributions: Contribution[][];
}

export default defineCachedEventHandler(
  async () => {
    const data = await $fetch<Activity>(
      `https://gh-calendar.rschristian.dev/user/misbahansori`,
    );
    return data;
  },
  {
    // calculate max age to end of day
    maxAge:
      new Date(new Date().setHours(23, 59, 59, 999)).getTime() - Date.now(),
  },
);
