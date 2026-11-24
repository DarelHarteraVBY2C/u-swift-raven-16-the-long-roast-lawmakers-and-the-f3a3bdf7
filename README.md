# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/DarelHarteraVBY2C/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/DarelHarteraVBY2C/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

Entry for the [The Long Roast: Lawmakers and the File They Cannot Convert](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) bounty on [make.fun](https://make.fun).

## The entry

> They passed a 400-page law telling AI, crypto, and the entire internet how to behave, then emailed their assistant a screenshot of the Save As menu asking which button turns a Word file into a PDF.

One sentence, 197 characters (limit 320). Setup: lawmakers writing 400 pages of law over AI, crypto and the internet. Undercut: they cannot work out which button turns a Word file into a PDF — the punch lands on the last few words.

## How it works

`main.ts` (Node 22, stdlib only, no network) validates the roast against the gate — exactly one sentence, 1–320 characters, no leading/trailing whitespace, no double spaces — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the written file is byte-identical to the validated sentence.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
