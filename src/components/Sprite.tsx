import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";

// One of the game's horizontal animation strips (square frames side by side), played in a
// loop with a CSS steps() animation — the same strips the game itself plays.
export function Sprite({
  file,
  frames,
  size = 120,
  fps = 6,
  flip = false,
  label,
}: {
  file: string;
  frames: number;
  size?: number;
  fps?: number;
  flip?: boolean;
  label?: string;
}) {
  const style = {
    "--sprite-src": `url(${asset(file)})`,
    "--sprite-frames": frames,
    "--sprite-size": `${size}px`,
    "--sprite-duration": `${frames / fps}s`,
    transform: flip ? "scaleX(-1)" : undefined,
  } as CSSProperties;
  return <span className="sprite" style={style} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} />;
}
