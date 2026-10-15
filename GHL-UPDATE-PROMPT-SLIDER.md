# GHL Update Prompt — Home "Renew" slider

Roof-Renew is **already live in GoHighLevel**. This prompt only replaces **one section on the Home page**: the drag slider next to "Give aging shingles a second life."

**What was wrong in GHL:** the right half was empty (just navy with dots) because the SVG illustration wasn't rebuilt. The "AFTER · Rejuvenated" label sat on the **before** photo, and GHL added text that isn't on the approved site ("restoring essential oils…").

**New version:** the **same roof** on both sides. Left is the real photo as it is; right is a digital illustration of the same photo, renewed. A spray bar sweeps across once when the section comes into view, and then visitors can drag it. It comes as **ready-to-paste code**, so GHL doesn't have to rebuild it by hand.

**Before you paste it:** upload these 2 files to the GHL Media Library **with these exact names** (they're in the `imagenes-para-ghl` folder):

- `aging-asphalt-shingles.jpg`
- `renewed-shingles-illustration.jpg`

Then copy everything inside the box below and paste it into the GoHighLevel AI builder.

> If GHL AI doesn't place the code correctly, do it by hand: Home → section "Give aging shingles a second life" → delete the current slider → add a **Custom HTML/Code** element in that column → paste the code from section 2 → change the 2 URLs.

---

````text
UPDATE to the existing Roof-Renew website in this GHL account. Change ONLY
the comparison slider on the HOME page (the one next to the heading "Give
aging shingles a second life."). Do not change anything else on the site.

1. REMOVE the current slider completely: the photo, the navy/dotted right
   side, the "AFTER · Rejuvenated" label, the "Flexibility & color restored"
   text, the box "Treatment soaks deep into dry asphalt, restoring essential
   oils and locking granules in place." and the caption under it.

2. In that same spot (same column, same width), add a Custom HTML / Code
   element and paste EXACTLY the code below. Do not rewrite, restyle or
   "improve" it. Change only these 2 placeholders:
     AGING_IMAGE_URL   → GHL Media Library URL of aging-asphalt-shingles.jpg
     RENEWED_IMAGE_URL → GHL Media Library URL of renewed-shingles-illustration.jpg
   Both URLs must come from the GHL Media Library. Never use github.com,
   raw.githubusercontent.com or unsplash.com (the repo will be deleted).

```html
<!-- Roof-Renew · "Renew" slider (Home, next to "Give aging shingles a second life.")
     Paste into a GHL "Custom HTML / Code" element.
     Replace AGING_IMAGE_URL and RENEWED_IMAGE_URL with the GHL Media Library URLs of:
       aging-asphalt-shingles.jpg  and  renewed-shingles-illustration.jpg -->
<div class="rr-renew">
  <div class="rr-box" id="rrBox">
    <div class="rr-layer rr-right" id="rrRight">
      <img src="RENEWED_IMAGE_URL" alt="Illustration of the same roof with a deeper, even color" draggable="false">
      <div class="rr-tag rr-tag-r"><b>The goal: renewed</b><span>Illustration · deeper, even color</span></div>
    </div>
    <div class="rr-layer rr-left" id="rrLeft">
      <img src="AGING_IMAGE_URL" alt="Aging asphalt shingles: dry, faded and spotted with lichen" draggable="false">
      <div class="rr-tag rr-tag-l"><b>Today: aging</b><span>Dry, faded, losing granules</span></div>
    </div>
    <div class="rr-line" id="rrLine"><i class="rr-mist" id="rrMist"></i><span class="rr-knob">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
    </span></div>
    <input class="rr-range" id="rrRange" type="range" min="4" max="96" value="96" aria-label="Compare the aging roof with an illustration of the renewed look">
  </div>
  <p class="rr-cap">Drag to compare. Same roof on both sides — the right side is a digital illustration of the look rejuvenation aims for, not a photo of a real result. Results vary by roof.</p>
</div>
<style>
  .rr-renew{font-family:Manrope,system-ui,sans-serif}
  .rr-box{position:relative;aspect-ratio:16/10;width:100%;overflow:hidden;border-radius:28px;cursor:ew-resize;touch-action:none;user-select:none;-webkit-user-select:none;
    box-shadow:0 0 0 1px rgba(47,198,255,.3),0 30px 80px -30px rgba(31,107,255,.7)}
  .rr-layer{position:absolute;inset:0}
  .rr-layer img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
  .rr-tag{position:absolute;top:16px;max-width:45%;border-radius:16px;padding:8px 12px;color:#fff;pointer-events:none;line-height:1.3}
  .rr-tag b{display:block;font-size:12px;font-weight:800}
  .rr-tag span{display:block;font-size:11px}
  .rr-tag-l{left:16px;background:rgba(5,13,33,.8);backdrop-filter:blur(6px)}
  .rr-tag-l span{color:rgba(255,255,255,.75)}
  .rr-tag-r{right:16px;background:#1f6bff;text-align:right}
  .rr-tag-r span{color:rgba(255,255,255,.85)}
  .rr-line{position:absolute;top:0;bottom:0;width:4px;transform:translateX(-50%);background:#fff;box-shadow:0 0 20px rgba(47,198,255,.9);pointer-events:none}
  .rr-knob{position:absolute;top:50%;left:50%;width:48px;height:48px;transform:translate(-50%,-50%);display:grid;place-items:center;border-radius:50%;background:#fff;color:#1f6bff;box-shadow:0 10px 25px rgba(0,0,0,.25)}
  .rr-mist{position:absolute;top:0;bottom:0;right:100%;width:64px;opacity:0;transition:opacity .4s;filter:blur(.4px);
    background:radial-gradient(circle at 70% 20%,rgba(255,255,255,.55) 0 1.5px,transparent 2.5px) 0 0/14px 18px,
      radial-gradient(circle at 30% 60%,rgba(127,214,255,.5) 0 1.5px,transparent 2.5px) 0 0/11px 15px,
      linear-gradient(to left,rgba(127,214,255,.45),transparent);animation:rrMist .5s linear infinite}
  .rr-mist.on{opacity:1}
  @keyframes rrMist{to{background-position:0 18px,0 -15px,0 0}}
  .rr-range{position:absolute;left:0;right:0;bottom:0;height:32px;width:100%;opacity:0;cursor:ew-resize;margin:0}
  .rr-cap{margin:12px 0 0;text-align:center;font-size:12px;color:#5b6b8a}
</style>
<script>
(function(){
  var box=document.getElementById('rrBox'),L=document.getElementById('rrLeft'),R=document.getElementById('rrRight'),
      line=document.getElementById('rrLine'),mist=document.getElementById('rrMist'),range=document.getElementById('rrRange'),touched=false;
  function set(p){p=Math.min(96,Math.max(4,p));L.style.clipPath='inset(0 '+(100-p)+'% 0 0)';R.style.clipPath='inset(0 0 0 '+p+'%)';line.style.left=p+'%';range.value=Math.round(p);}
  function fromX(x){var r=box.getBoundingClientRect();touched=true;mist.classList.remove('on');set((x-r.left)/r.width*100);}
  box.addEventListener('pointerdown',function(e){box.setPointerCapture&&box.setPointerCapture(e.pointerId);fromX(e.clientX);});
  box.addEventListener('pointermove',function(e){if(e.buttons===1)fromX(e.clientX);});
  range.addEventListener('input',function(){touched=true;set(+range.value);});
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){set(50);return;}
  set(96);
  var io=new IntersectionObserver(function(en){
    if(!en[0].isIntersecting)return;io.disconnect();mist.classList.add('on');
    var t0=performance.now(),D=2600;
    (function tick(t){if(touched)return;var k=Math.min(1,(t-t0)/D),e=1-Math.pow(1-k,3);set(96-e*46);
      if(k<1)requestAnimationFrame(tick);else mist.classList.remove('on');})(t0);
  },{threshold:.5});
  io.observe(box);
})();
</script>
```

QUALITY CHECK
□ Both halves show the SAME roof photo: the left side faded with orange
  lichen spots, the right side darker and even. No empty or navy side.
□ When you scroll to it, the divider sweeps from the right to the middle
  with a light spray effect, once. Then you can drag it (mouse and touch).
□ "Today: aging" is always on the left photo and "The goal: renewed" is
  always on the right photo (drag fully left and fully right to confirm).
□ The caption under it says it's a digital illustration, not a real result.
□ At 375px wide: it fits, no horizontal scroll.
□ Both images load from the GHL Media Library (no github/unsplash URLs).
□ Nothing else on the page changed.
````
