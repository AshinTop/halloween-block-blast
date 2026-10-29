[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Witch’s Candy Blocks — Halloween Block Puzzle with Potion Orders

🍬 A witch has a tray of oddly shaped sweets and a cauldron waiting for your best idea. **Witch’s Candy Blocks** is an 8×8 Halloween block puzzle about making space. Fit shapes, complete rows and columns, and turn each clear into a little bottle of midnight magic.

**[Play online](https://halloween-block-blast.crazy3d.org/)** · [Explore all 12 Halloween games](https://github.com/AshinTop/halloween-games) · [⭐ Star this repository](https://github.com/AshinTop/halloween-block-blast)

README translations cover five languages. The **game interface currently supports English and Simplified Chinese only**.

![Witch’s Candy Blocks showing an eight-by-eight candy board, three-piece tray, cobweb targets, and cauldron](docs/images/gameplay.jpg)

## What makes it special

- An **8×8 placement board** and a three-piece tray. Full rows and columns clear together; shared crossing cells count once.
- **Classic** for an ongoing score challenge, plus **five fixed Potion Orders** with tested completion paths.
- Drag-and-drop, select-then-tap placement, keyboard play, and previews of valid placement and potential line clears.
- One **Moon Rewind** per run restores the complete previous placement, including score, tray, targets, and random sequence.
- Original candy, cobweb, bottle, and cauldron artwork; optional synthesized sound, reduced-motion support, and local progress.

## How to play

Choose a shape from the tray and place it entirely inside the board without overlapping occupied cells. Fill all eight cells of a row or column to clear it. **Colors do not need to match, and shapes do not rotate.** There is no falling-block timer. You receive the next batch only after placing all three current pieces.

In **Classic**, keep making room and improving your score. Every 12 cleared lines fills another bottle. A run ends when none of the remaining tray pieces has a legal placement, not merely when one inconvenient shape cannot fit.

In **Potion Orders**, clear every sweet that was marked with a cobweb at the beginning, within the placement allowance. Newly placed candy does not become another target. The five puzzles introduce single rows, paired rows, crossing clears, planning around all three pieces, and double-row finishes. Their boards and piece sequences are fixed.

Moon Rewind is available once per run. It can recover the last placement after running out of space, but cannot undo an already completed order. Restarting begins a fresh attempt; rewind is not unlimited Undo.

## Controls

| Action | Input |
| --- | --- |
| Select a piece | Tap/click the tray, or press **1 / 2 / 3** |
| Place | Drag, or tap the cell for the shape’s top-left corner |
| Keyboard placement | Arrow keys move the cursor; **Enter** places |
| Moon Rewind | **Z** or the rewind button |
| Mode, order, restart, help | Use the game buttons or compact menu; keyboard input needs iframe focus |

## A little strategy

Look at all three pieces before spending the largest open area. A tempting small clear can leave no home for the next shape. In an order, concentrate on the original webbed cells rather than clearing every colorful square. Check the preview before releasing a drag, and save Moon Rewind for a placement whose consequences you did not anticipate.

## Progress and challenge links

When storage is available, the browser retains unfinished Classic progress, the best score, completed orders, language, and sound preference. Records do not synchronize across devices. A link such as [Potion Order 3](https://halloween-block-blast.crazy3d.org/#order=3) opens that fixed challenge; values 1–5 select the others. Sharing copies actual score or order-result text and a link, not a replay or an uploaded board. If copying is blocked, the text remains available manually.

## Screenshots and video

![Compact Witch’s Candy Blocks layout with the board, tray, order progress, and Moon Rewind controls](docs/images/mobile.jpg)

Actual game screenshot from a compact browser iframe; this demonstrates the small-window layout, not a physical-phone test.

[Video player and transcript](https://halloween-block-blast.crazy3d.org/intro.html) · [Download the MP4](docs/media/intro.mp4)

The **24-second silent introduction** combines actual screenshots and captions. It is a visual tour, not continuous gameplay footage or an audio demonstration.

## Frequently asked questions

### Is this a match-three game?

The goal is to fill whole rows and columns by fitting shapes. Candy color is decorative; you do not swap adjacent candies. For swapping ingredients, try Witch’s Potion Match below.

### Why is there no new tray yet?

You must use all three pieces from the current batch. Plan for the awkward shape as well as the easy ones.

### Exactly what does Moon Rewind restore?

The previous board, tray, score, clear counts, webbed targets, and random state. You get one rewind per run, so it cannot be used repeatedly to search every possibility.

## Run locally and embed

Serve the repository root over HTTP:

```sh
python3 -m http.server 4173
```

Open **http://localhost:4173/**. No build or dependencies are needed. Use HTTP: `file://` can block JavaScript modules.

Run the included Node checks:

```sh
npm test
```

Built-in Node tests cover rejected placements, simultaneous crossing clears, tray refill timing, terminal states, deterministic generation, all five order solutions, and saved Classic data. No dependency installation or build is needed.

```html
<iframe src="https://halloween-block-blast.crazy3d.org/?embed=1"
  title="Witch’s Candy Blocks"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

The desktop player uses a **654 px** game area. Browser review covered 1160×654, 390×650, and 844×340-class windows, including order completion and rewind. The tray moves beside or below the board; help and result dialogs can scroll internally.

See [EMBEDDING.md](EMBEDDING.md) for sizing, storage, input focus, and permissions. Measure available iframe height after the host toolbar.

## More little Halloween adventures

- **[Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-potion-match) — Swap ingredients, trigger cascades, and light recipe candles.
- **[Pumpkin 2048](https://halloween-2048.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-2048) — Merge numbered pumpkins and solve positional Lantern Trials.
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-tripeaks) — Build adjacent-rank card chains across eight rescue deals.
- **[Haunted Hearts](https://halloween-love-game.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-love-game) — Help two ghosts share doors, paths, and a lantern.

## Credits and support

Created for **AshinTop** and **Midnight Candy Club** with human-directed, AI-assisted design, programming, and review. Artwork and synthesized sounds are original to this project. The game needs no remote account; hosting may independently add scripts or request logs.

Enjoyed playing? **[Leave a GitHub Star](https://github.com/AshinTop/halloween-block-blast)**. For bug reports, include browser, iframe size, challenge link, and reproduction steps.
