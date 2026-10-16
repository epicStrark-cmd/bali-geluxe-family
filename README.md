# Bali Geluxe Family · Crew Companion

An unofficial, privacy-conscious 12-day Bali & Komodo tour companion for G Adventures travelers.

- **Home:** illustrated heritage header, day's itinerary, and latest confirmed CEO briefing
- **Bottom navigation:** Today · Days · Weather · WhatsApp · Pack · Guide
- **Offline:** after first visit, the app shell and previously saved briefing remain usable without a connection
- **Weather:** calls Open-Meteo from the traveler’s browser; weather requires internet
- **Private notes/checklists:** stored only on each visitor's device

## Publishing

This repository is designed for **public GitHub Pages**. In Settings → Pages, set **Source: GitHub Actions**. The supplied workflow publishes `index.html` and local assets each time `main` changes. Publishing via GitHub Pages is public. **Never commit passports, bookings, guest lists, phone numbers, private WhatsApp invite links or screenshots.**

## Updating the CEO briefing

1. A traveler provides a screenshot of the CEO's WhatsApp announcement **in their private ChatGPT chat**.
2. Review the content, date and any time/location; keep unconfirmed fields null. Do not place screenshots in this repository.
3. Replace only `crew-briefing.json`. Set `status` to `confirmed`, `for_date` to `YYYY-MM-DD`, `updated_at` to an ISO-8601 timestamp with offset (`+08:00` in Bali), and fill only information actually visible and approved for the group.
4. GitHub Pages redeploys. Each online visitor sees the new JSON on refresh or after a short interval. An offline user sees only their last downloaded version.
5. If a previously published briefing has been retracted, set `status` to `awaiting_update` and clear its fields.

This is **not an automatic WhatsApp integration**. Panji needs no additional task, but a traveler must submit a screenshot for updates.

## Schedule priority

The CEO's messages and direct instructions take precedence over any website content, even if it has a newer timestamp. No meeting time should be invented.