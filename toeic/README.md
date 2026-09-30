# 토익 800 작전 — source

A single-page study app, published as a claude.ai artifact:
https://claude.ai/artifact/T5RjncMqVNN3Ltx5yP6UF9

`python3 build.py` merges these files into `toeic.html`, the page that gets published.

| File | What it holds |
|---|---|
| `page.html` | Original page (layout, vocab `V`, grammar `G`, Part 2 `P2`, reading `RD`, sync, tabs). Treat as the base; build.py patches it. |
| `bank1.js` `bank2.js` `bank3.js` | First bank: `P1B`, `P2N`+`P2TAG`, `G2`, `P3B`, `P4B`, `P6B`, `RD2` |
| `bank4a.js` `bank4b.js` `bank4c.js`, `bank5_NNN.js` … | Later additions, each one `push`es onto the arrays above. `build.py` includes every `bank*.js` in sorted order. |
| `vocab2.js` | Extra vocabulary, `V.push(...)`. Duplicates are dropped at build time. |
| `p1art.js` | Part 1 SVG illustrations. `ART(k)` draws scene k for `P1B[k]`. |
| `plan.js` | 46-day plan text (`PLAN`) |
| `drill.js` | Daily problem engine ("문제 풀기" tab), speech output (TTS), spaced review |
| `validate.js` | Checks every question (answer index, duplicate options) and simulates all 46 days |
| `uitest.js` | Clicks through the phone UI with a stubbed TTS |

## Adding a batch of questions

**Question ids come from array positions.** Only append, using `push`. Never insert, reorder, or delete an existing item, because saved progress refers to these ids.

Create `bank5_NNN.js` (NNN = next number, 3 digits). Formats:

```js
P2N.push(["question?",["resp A","resp B","resp C"],answerIndex,"한국어 해설","tag"]);   // tag: 의문사|간접|일반·부정|부가|선택|요청·제안|평서문
G2.push(["sentence with ------.",["a","b","c","d"],answerIndex,"type","한국어 해설"]); // type: 품사|동사|전치사·접속사|관계사·분사|비교·대명사|준동사·구문|어휘
P3B.push({tag:"일반|의도|시각자료|3인",v:"optional printed graphic",s:`M: ...\nW: ...`,q:[["Q?",["A","B","C","D"],ans,"해설"],x3]});  // speakers M, W, M2, W2
P4B.push({tag:"일반|의도|시각자료",v:"optional",s:`one-speaker talk`,q:[... x3]});
P6B.push({t:"유형 · 제목",p:`text with ---(1)--- ... ---(4)---`,q:[[["o1","o2","o3","o4"],ans,"type","해설"] x4]});  // one of the four is sentence insertion
RD2.push({t:"제목",k:"single|chat|double|triple",p:`passages; separate passages with ━━━━━━━━━━━━━━━━`,q:[["Q?",["A","B","C","D"],ans,"type","해설"],...]});
P1B.push(["장면 설명(한국어)",["stmt A","stmt B","stmt C","stmt D"],ans,"해설"]);  // also add a matching scene to p1art.js S[index]
```

Options are shuffled when shown, so the correct answer's position does not matter. Do not refer to answers by letter in explanations.

## Quality bar (the learner is aiming for 800–900)
- Match the real TOEIC format and tone: business settings, realistic names and places.
- Distractors must be plausible:
  - Part 5: same word family, near-synonyms, collocation traps.
  - Part 2: repeated words, similar sounds, and indirect correct answers.
  - Part 3/4: paraphrase the correct option; do not reuse the script's exact words.
  - Part 7: include NOT, inference, and cross-reference questions.
- Aim for about 60% medium and 40% hard questions.
- Every item needs exactly one defensible answer. Re-read each one before adding it.

## Build, test, publish
```bash
python3 build.py
NODE_PATH=$(npm root -g) node validate.js   # "bad":[] is required
NODE_PATH=$(npm root -g) node uitest.js     # errors [] is required
```
Then publish `toeic.html` to the artifact URL above, keeping that URL.
