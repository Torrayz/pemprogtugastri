import fs from "node:fs";
import assert from "node:assert/strict";
const file = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const has = (path) => fs.existsSync(new URL(`../${path}`, import.meta.url));
const data=file("lib/projects.ts");
const matches=[...data.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(x=>x[1]);
assert.ok(matches.length>=6,"Expected at least 6 curated case studies");
assert.equal(new Set(matches).size,matches.length,"Duplicate project slugs found");
for(const route of ["app/api/github/route.ts","app/api/contact/route.ts","app/contact/page.tsx","app/inbox/page.tsx","components/GithubPortrait.tsx"]){
 assert.ok(has(route),`${route} is required`);
}
const avatar=file("components/GithubPortrait.tsx");
assert.ok(avatar.includes("avatars.githubusercontent.com/u/152534285"),"Avatar must use the verified @Torrayz GitHub source");
const contact=file("app/api/contact/route.ts");
assert.ok(contact.includes("portfolio_inquiries"),"Contact handler must save to the private inquiry table");
assert.ok(contact.includes("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"),"Contact API uses only the public publishable key");
const checked=[data,contact,avatar,file("components/StudioInbox.tsx")].join("\n");
assert.ok(!checked.includes("SUPABASE_SERVICE_ROLE_KEY"),"No service-role key in client or form source");
console.log(`Content checks passed: ${matches.length} case studies; GitHub avatar, contact route, owner inbox, safe client key`);