// Files under public/game/ (copied from the game's own assets), prefixed with the base path
// so they resolve when the site is served from a sub-path such as GitHub Pages.
export function asset(file: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/game/${file}`;
}
