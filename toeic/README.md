# 토익 800 작전 — source

A single-page study app, published as a claude.ai artifact:
https://claude.ai/artifact/T5RjncMqVNN3Ltx5yP6UF9

`python3 build.py` merges these files into `toeic.html`, the page that gets published.

| File | What it holds |
|---|---|
| `page.html` | Original page (layout, vocab `V`, grammar `G`, Part 2 `P2`, reading `RD`, sync, tabs). Treat as the base; build.py patches it. |
| `bank1.js` `bank2.js` `bank3.js` | First bank: `P1B`, `P2N`+`P2TAG`, `G2`, `P3B`, `P4B`, `P6B`, `RD2` |
| `bank4a.js` `bank4b.js` `bank4c.js`, `bank5_NNN.js` … | Later additions, each one `push`es onto the arrays above. `build.py` includes every `bank*.js` in sorted order. |
| `vocab2.js` `vocab3.js` | Extra vocabulary, `V.push(...)`. Duplicates are dropped at build time. |
| `vocabx.js` | Flip-card extras per word: `VX[word]=[품사, 짝꿍 표현, 예문, 예문 해석]` |
| `dash.js` | Today dashboard (4 daily routines, streak, stats) and the 3D vocab flip card |
| `list.js` | `node list.js G2 0 40 --missing` prints items and ids that still lack extras; `node list.js VX` lists words without card extras |
| `p1art.js` | Part 1 SVG illustrations. `ART(k)` draws scene k for `P1B[k]`. |
| `plan.js` | 46-day plan text (`PLAN`) |
| `drill.js` | Daily problem engine ("문제 풀기" tab), speech output (TTS), spaced review |
| `news.js` | Update bar at the top of the page. Built from per-batch snapshots that build.py records after each bank file. |
| `notes.json` | Optional one-line Korean note per batch, shown in the update bar, e.g. `{"bank5_002.js": "Part 3 의도 파악 문제 강화"}` |
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

### Extras (shown after grading)
Put an object at the end of an item, or add it later with `Object.assign(EX,{"<id>":{...}})` (backfill for items that already exist).
- Part 5 (`G2`): `{tr:"문장 해석", vo:"핵심 어휘 · 짝꿍 표현"}`. Example: `G2.push([q,opts,ans,"품사","해설",{tr:"...",vo:"..."}])`. Backfill id: `q<index>`.
- Part 2 (`P2N`): `{tr:"질문 해석", otr:["보기 해석"x3], trap:["", "오답 이유", "오답 이유"], tip:"소거 팁"}`. `trap`/`otr` follow the original option order; use "" for the correct one. Backfill id: `b<index>`.
- Part 3/4 (`P3B`/`P4B` question, at index 4), Part 6 (`P6B` question, index 4), Part 7 (`RD2` question, index 5): `{ev:"정답 근거 문장 (script or passage, copied exactly)", pa:"근거 표현 → 보기 표현 (패러프레이징)"}`. The app highlights `ev` in the text. Backfill id: `<unit><index>.<question>` such as `f3.1`.
- Words: `Object.assign(VX,{"word":["동사","짝꿍 표현","Example sentence.","예문 해석"]})`. The word must already be in `V`.

validate.js checks that `trap`/`otr` have one entry per option, that every `ev` occurs in its passage or script, and that every `EX`/`VX` key exists.

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
Order matters:
1. Commit and push to `toeic-app`.
2. Only after the push succeeds, publish `toeic.html` to the artifact URL above.

If the push fails, do not publish. A published page that is not in git makes the next run refuse to publish.

The update bar dates each `bank5_*` file by the commit that first added it. Commit before the final build so the date is right. A file that is not yet committed shows today's date, which is the same day.
