import fs from "node:fs";
import assert from "node:assert/strict";
const data = fs.readFileSync(new URL("../lib/projects.ts", import.meta.url), "utf8");
const matches = [...data.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(x => x[1]);
assert.ok(matches.length >= 6, "Expected at least 6 curated case studies");
assert.equal(new Set(matches).size, matches.length, "Duplicate project slugs found");
assert.ok(!data.includes("SUPABASE_SERVICE_ROLE_KEY"), "Do not include server credentials in portfolio");
assert.ok(fs.existsSync(new URL("../app/api/github/route.ts", import.meta.url)), "GitHub API route is required");
console.log(`Content checks passed: ${matches.length} case studies, unique slugs, no service-role key`);