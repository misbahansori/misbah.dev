const TOKEN = process.env.GITHUB_TOKEN;
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

export default defineEventHandler(async (event) => {
  try {
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
  } catch (error) {
    return {
      error: "Failed to fetch GitHub activity",
    };
  }
});
