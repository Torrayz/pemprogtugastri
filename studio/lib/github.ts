export type PublicRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  updated_at: string;
  topics: string[];
};
const allowedHost = "https://api.github.com/users/Torrayz/repos";
export async function getPublicRepos(): Promise<PublicRepository[]> {
  try {
    const response = await fetch(`${allowedHost}?per_page=100&page=1&type=owner&sort=updated`, {
      headers: { "Accept": "application/vnd.github+json", "User-Agent": "torrayz-studio-portfolio" },
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
    const rows: unknown = await response.json();
    if (!Array.isArray(rows)) throw new Error("Invalid response");
    return rows.filter((row): row is PublicRepository => {
      if (!row || typeof row !== "object") return false;
      const r = row as Record<string, unknown>;
      const owner = r.owner as { login?: string } | undefined;
      return r.private === false && owner?.login?.toLowerCase() === "torrayz" && typeof r.name === "string" && typeof r.html_url === "string";
    }).map(r => ({
      id: Number(r.id), name: String(r.name), description: r.description || null,
      html_url: r.html_url, homepage: r.homepage || null, language: r.language || null,
      stargazers_count: Number(r.stargazers_count) || 0,
      forks_count: Number(r.forks_count) || 0, archived: Boolean(r.archived),
      updated_at: r.updated_at || "", topics: Array.isArray(r.topics) ? r.topics : []
    }));
  } catch (error) {
    console.error("Public repository index unavailable:", error instanceof Error ? error.message : "unknown");
    return [];
  }
}