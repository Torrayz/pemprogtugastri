import { NextResponse } from "next/server";
import { getPublicRepos } from "@/lib/github";

export const revalidate = 3600;
export async function GET() {
  const repos = await getPublicRepos();
  return NextResponse.json(
    { repos, count: repos.length, source: "public-github", updatedAt: new Date().toISOString() },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", "X-Content-Type-Options": "nosniff" } }
  );
}