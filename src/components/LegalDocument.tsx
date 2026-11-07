import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

// Renders one of the policy documents in src/content/ (copies of the game repo's docs/*.md)
// at build time, inside the game's parchment panel.
export async function LegalDocument({ file }: { file: string }) {
  const source = await readFile(path.join(process.cwd(), "src/content", file), "utf8");
  const html = await marked.parse(source);
  return (
    <section className="section legal">
      <article className="panel legal__panel" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
