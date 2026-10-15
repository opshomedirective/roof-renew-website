import { useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { IMG } from "../data/images";

/**
 * "Renew pass" slider — ONE real photo of an aging asphalt roof on both sides.
 * LEFT  = the photo as it is (dry, faded).
 * RIGHT = renewed-shingles-illustration.jpg: the SAME photo digitally edited
 *         (lichen + chalking removed, deeper even tone) to illustrate the look
 *         rejuvenation aims for. It's labeled "Illustration" on the
 *         image and in the caption — NOT a real result.
 * When it scrolls into view, a spray bar sweeps across once, then the
 * divider is draggable. Replace with a real Roof-Renew before/after (same
 * roof, same angle) as soon as one exists.
 */
export default function BeforeAfter() {
  const [pos, setPos] = useState(96);
  const [spraying, setSpraying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const touched = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos(50);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || played.current) return;
        played.current = true;
        setSpraying(true);
        const start = performance.now();
        const D = 2600;
        const tick = (t: number) => {
          if (touched.current) return setSpraying(false);
          const k = Math.min(1, (t - start) / D);
          const ease = 1 - Math.pow(1 - k, 3);
          setPos(96 - ease * 46); // 96% → 50%
          if (k < 1) requestAnimationFrame(tick);
          else setSpraying(false);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    touched.current = true;
    setSpraying(false);
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div>
      <div
        ref={ref}
        className="relative aspect-[16/10] w-full cursor-ew-resize touch-none overflow-hidden rounded-[1.75rem] select-none glow-blue"
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      >
        {/* RIGHT layer: same photo, "renewed" illustration */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <img src={IMG.renewedShingles} alt="Illustration of the same roof with a deeper, even color" className="h-full w-full object-cover" draggable={false} />
          <div className="pointer-events-none absolute top-4 right-4 max-w-[45%] rounded-2xl bg-blue px-3 py-2 text-right text-white">
            <p className="text-xs font-extrabold">The goal: renewed</p>
            <p className="text-[11px] text-white/85">Illustration · deeper, even color</p>
          </div>
        </div>
        {/* LEFT layer: the real photo as it is */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={IMG.agingShingles} alt="Aging asphalt shingles: dry, faded and spotted with lichen" className="h-full w-full object-cover" draggable={false} />
          <div className="pointer-events-none absolute top-4 left-4 max-w-[45%] rounded-2xl bg-night/80 px-3 py-2 text-white backdrop-blur">
            <p className="text-xs font-extrabold">Today: aging</p>
            <p className="text-[11px] text-white/75">Dry, faded, losing granules</p>
          </div>
        </div>

        {/* Divider + spray bar */}
        <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(47,198,255,.9)]" style={{ left: `${pos}%` }}>
          <span className={`spray-mist absolute inset-y-0 right-full w-16 ${spraying ? "opacity-100" : "opacity-0"}`} />
          <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-blue shadow-xl">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
        <input
          type="range"
          min={4}
          max={96}
          value={Math.round(pos)}
          onChange={(e) => {
            touched.current = true;
            setPos(Number(e.target.value));
          }}
          aria-label="Compare the aging roof with an illustration of the renewed look"
          className="absolute inset-x-0 bottom-0 h-8 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-center text-xs text-steel">
        Drag to compare. Same roof on both sides — the right side is a digital illustration of the look rejuvenation aims for, not a photo of a real result.
        Results vary by roof.
      </p>
    </div>
  );
}
