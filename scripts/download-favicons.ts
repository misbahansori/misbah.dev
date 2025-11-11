import fs from "fs";
import https from "https";
import path from "path";
import { bookmarks } from "../app/data/bookmarks.js";
import { otherProjects } from "../app/data/projects.js";

const size = 32;
const urls = [
  ...bookmarks.map((bookmark: { url: string }) => bookmark.url),
  ...otherProjects.map((project: { link: string }) => project.link),
];

const domainRegex = /^(?:https?:\/\/)(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/i;

// Create directories if they don't exist
const faviconDir = path.join(process.cwd(), "public", "img", "favicons");
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

urls.forEach((url: string) => {
  const domain = url.match(domainRegex);
  if (domain != null && domain.length > 1) {
    const fileName = domain.at(1);

    https.get(
      `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=${size}`,
      (res: any) => {
        const filePath = path.join(faviconDir, `${fileName}.png`);
        const stream = fs.createWriteStream(filePath);
        res.pipe(stream);
        stream.on("finish", () => {
          stream.close();
          console.log("Download completed for " + url);
        });
      },
    );
  }
});
