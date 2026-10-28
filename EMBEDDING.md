# Embedding Witch’s Candy Blocks

This is a self-contained static game. Serve the repository over HTTPS with `index.html`, `app.js`, `engine.js`, and `style.css` at the same relative paths. JavaScript modules require an HTTP(S) server; opening `index.html` through `file://` is not supported.

## Integration

```html
<iframe
  src="https://YOUR-GAME-HOST/index.html?embed=1"
  title="Witch’s Candy Blocks"
  width="100%"
  height="654"
  scrolling="no"
  allow="fullscreen"
  allowfullscreen
  sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-orientation-lock allow-presentation"
  style="display:block;width:100%;border:0"
></iframe>
```

Replace `YOUR-GAME-HOST` with the deployed game origin. The game automatically enters its compact layout inside an iframe. `?embed=1` also enables this layout when opened directly, which is useful for checking a host-sized preview. `?embed=0` forces the full-page presentation for debugging. `#order=1` through `#order=5` open a specific potion order; for example, `index.html?embed=1#order=3`.

The embed toolbar retains mode/order selection, goal progress, moon rewind, restart, help, sound, language, and fullscreen. Desktop and short landscape windows put the three ingredients beside the board; narrow portrait windows put them underneath. A `ResizeObserver` sizes the board from the remaining container space. All essential play controls stay in the iframe without scrolling its document. Help and result dialogs can scroll internally.

## Host sizing

The existing Block Blast host has a desktop `.game-area` height of **654 px**. Keep the iframe at `width:100%; height:100%` within that area. The compact layout targets 1152 × 654, 960 × 600, 390 × 650, 390 × 844, and 844 × 390; the 844 × 340 short landscape window has also been exercised during browser acceptance.

When the mobile host uses a fixed 50 px toolbar, subtract that toolbar from the available viewport instead of placing a 100dvh iframe beneath it:

```css
.game-area {
  height: 654px;
}
.game-area iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
@media (max-width: 600px) {
  .game-area {
    height: calc(100dvh - 50px);
  }
}
```

Only subtract the toolbar if it occupies the same viewport; do not subtract it again when the host already allocates the iframe’s remaining height. Parent-page scrolling is the host’s responsibility. The game does not inspect or change parent DOM.

## Interaction and browser permissions

- Touch/mouse: drag an ingredient onto the board, or select it and tap the cell for its top-left corner. Keyboard: 1/2/3 selects an ingredient, arrows move the placement cursor, Enter places, Z uses the one-per-run rewind. The iframe needs focus for keyboard input.
- Sound uses Web Audio after user interaction and has a persistent mute switch. No autoplay permission is needed.
- Fullscreen requires the host’s `allowfullscreen` / `allow="fullscreen"` permission and browser support. The in-game button is disabled when unavailable; the host may provide its own fullscreen control.
- Sharing copies real result text and an order URL. Clipboard access may be limited by browser policy or sandbox configuration; the game then displays the text and link for manual copying. No social service is contacted.
- Local storage saves classic progress, best score, completed orders, language, and sound preference. If storage is blocked or partitioned, play continues; progress may not persist or may differ from a direct visit. `allow-same-origin` permits the normal origin storage behavior when supported.
- The game makes no runtime API requests and has no login, analytics, parent-message protocol, external assets, or server API. The host does not need to expose credentials or send any `postMessage` initialization data.

## Acceptance checks

The project’s logic tests cover simultaneous row/column clearing, refill timing, legal placement, terminal states, deterministic generation, and all five fixed order solutions. Browser acceptance also exercised compact order completion, moon rewind, and host-sized layouts without page overflow or cropped essential controls. Recheck the exact final production host after adding its surrounding toolbar and CSS; the game’s own sizing is based on the iframe viewport, not the parent page.
