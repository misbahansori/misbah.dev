const username = "misbahansori";

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

interface Activity {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              contributionCount: number;
              date: string;
            }[];
          }[];
        };
      };
    };
  };
}

export default defineCachedEventHandler(
  async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const TOKEN = runtimeConfig.GITHUB_TOKEN;

    const data = await $fetch<Activity>(`https://api.github.com/graphql`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { userName: username } }),
    });

    return {
      data: data.data.user.contributionsCollection.contributionCalendar,
    };
  },
  {
    // calculate max age to end of day
    maxAge:
      new Date(new Date().setHours(23, 59, 59, 999)).getTime() - Date.now(),
  },
);
