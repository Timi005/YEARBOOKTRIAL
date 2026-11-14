# Decisions made after the brief

These update `docs/BRIEF.pdf`. Where they disagree, this file wins.

## Open decisions from brief section 10

1. **Timeline style: circuit trace, not a curve or a straight bar.**
   A PCB-style copper trace runs from a power connector (J1) through one IC chip per milestone to a final "MTE-2026" chip. The rover drives along it as you scroll.
   - Desktop: the trace jogs out to the side at 45° for each milestone, then comes back to the centre. Cards sit in the empty half opposite the chip.
   - Phones (under 720px): the trace is straight down the left edge, with cards to its right at full width.
   - Working reference: `reference/circuit-timeline.html`.
2. **Live counter:** counts classmates, photos and milestones (as in the template), styled like a seven-segment or odometer display.
3. **Figma:** website first.
4. **Database:** PostgreSQL.
5. **Access:** shared password for now (simplest). Revisit if needed.
6. **Print size:** decide with the printer after launch.

## The timeline, in detail (port all of this)
- The lit trace follows the rover. Small gold pulses of current flow along it toward the rover.
- Each chip powers on when the rover reaches it: pins, LED and the wire to its card light up, and sparks burst out.
- Card cover photos start sepia and blurred, then sharpen like a Polaroid when their chip powers on.
- A stamp lands on each card shortly after (DEFENDED, VISITED, PASSED).
- Resistors and test points beside the trace light up as current passes.
- The rover: wheels turn with distance, it tilts on 45° runs, faces the way it's moving, kicks up dust on fast scrolls, blinks its antenna while moving, has a headlight beam.
- A seven-segment readout in the corner shows the stage (0–3 /3) and the percentage of the board powered.
- Final chip lights up and throws confetti. Scrolling back up powers everything down.
- Sound (off by default): a two-note blip per chip, a short chord at the end.
- Reduced motion: no pulses, dust, sparks or confetti; everything snaps to its state.
- Milestones and their stamps/notes come from the `events` table, not hard-coded.

## Changes from the template (`reference/template.html`)
- **Drawing wall:** the template saves drawings as PNGs. The real site stores strokes as vector paths on the server and shows them to everyone (brief 5.7).
- **Canvas bug:** `sizeCv()` saves the drawing in `keep` but never redraws it, so resizing or rotating a phone wipes the drawing. Fix by redrawing stored strokes after resize.
- **Search:** filters must be URL query parameters (`?person=&with=&event=`) so results can be shared.
- **Profile modal:** becomes a real person page at `/people/:slug`.
- **Footer buttons:** "Report a wrong tag" and "Request photo removal" need to work.
- **Missing from template:** sound/mute toggle, pen size and eraser on the wall, password gate.

## Animation ideas, in priority order
Must have:
1. Circuit timeline (above)
2. Hero polaroids drop in and settle; doodles draw themselves in
3. Shared-element lightbox (thumbnail grows into the full photo)
4. Awards reveal: cards flip "and the winner is…"

If time allows:
5. Hover/tap a portrait to swap to a candid photo
6. Venn bubbles in search when two people are picked
7. Drawing-wall notes pin on with a wobble; new strokes replay stroke by stroke
8. End-credits roll of every name in the footer

After launch:
9. "Wrapped" story mode per person (photo count, top photo buddy, award)
10. Wall-of-heads mural (parked in the brief)
