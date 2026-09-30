/* ===== batch 001 (appended so earlier question ids stay stable) ===== */
P1B.push(
["남자가 벽에 액자를 걸고 있다",["He's hanging a picture on a wall.","He's painting a ceiling.","He's carrying a ladder upstairs.","He's sitting at a desk."],0,"hang a picture = 액자를 걸다. 사진 속 남자는 서서 벽에 손을 뻗고 있음."],
["여자가 상자가 실린 카트를 밀고 있다",["She's lifting a box onto a shelf.","She's pushing a cart loaded with boxes.","Some boxes are being unloaded from a truck.","She's riding a bicycle."],1,"be loaded with = ~이 실려 있다. 트럭이나 선반은 그림에 없음."],
["사람들이 창구 앞에 줄을 서 있다",["Some people are seated at a counter.","Some people are boarding a bus.","Some people are waiting in line at a window.","A man is handing out papers."],2,"wait in line = 줄 서서 기다리다."]
);
P2N.push(
["Who's in charge of the quarterly inventory count?",["Ms. Moreno's team is handling it.","Yes, it's quite a lot of inventory.","The count starts at nine."],0,"Who → 사람/담당 팀. Yes 오답, 반복어 trap.","의문사"],
["How long will the assembly line be shut down?",["Just for the afternoon.","About two meters long.","It's on the second floor."],0,"How long → 기간. two meters long은 길이라 오답.","의문사"],
["Where should I leave the signed contracts?",["On Mr. Brennan's desk would be fine.","They were signed yesterday.","No, I'll sign it later."],0,"Where → 장소. 의문사 질문에 No 오답.","의문사"],
["When is the new payroll system going live?",["At the start of next quarter.","It's a live broadcast.","The payroll office, I think."],0,"When → 시점. live 반복 trap.","의문사"],
["Why was the shipment to Rotterdam rerouted?",["A storm closed the original port.","Two containers of machinery.","By truck, I believe."],0,"Why → 이유.","의문사"],
["What time does the client's flight land?",["Just before six, I think.","At the domestic terminal.","Yes, it landed safely."],0,"What time → 시각. land 반복 trap.","의문사"],
["Could you cover my shift on Saturday?",["I'm visiting my parents that weekend.","I'll check the overtime rate.","The schedule is posted outside."],0,"부탁에 대한 간접 거절. 부모님 방문 → 어렵다는 뜻.","간접"],
["Have the auditors finished reviewing our accounts?",["They're still on the third floor.","Yes, I had a great review.","The accounts are due Monday."],0,"아직 작업 중이라는 간접 답변(아직 안 끝남).","간접"],
["Is the printer on the second floor working?",["Mr. Lee printed his slides a minute ago.","It's on the second floor.","I work on the second floor."],0,"방금 출력했다 → 작동한다는 간접 긍정.","간접"],
["Should we order more brochures before the trade fair?",["We still have two full boxes.","The trade fair opens at ten.","Yes, that was a fair trade."],0,"아직 충분하다 → 그럴 필요 없다는 간접 답변. fair 반복 trap.","간접"],
["Who's going to present the sales figures at the board meeting?",["Ms. Choi's been working on the slides all week.","At the board meeting room.","The figures were higher than expected."],0,"이름을 직접 말하지 않고 슬라이드를 준비한 사람으로 암시.","간접"],
["Do you think we should hire a second receptionist?",["Let's see how busy the summer gets.","No, I received a text.","The reception is on the left."],0,"결정을 미루는 간접 답변. receptionist/reception 유사어 trap.","간접"],
["Are you attending the safety seminar this afternoon?",["I have a client call at two.","The seminar was very helpful.","Room 4 on the fourth floor."],0,"선약이 있다 → 불참한다는 간접 답변.","간접"],
["Would you like me to reserve a rental car for your trip?",["I'm planning to take the train.","Yes, the reserve fund is low.","Rental costs are listed on page two."],0,"기차를 탈 계획 → 필요 없다는 간접 거절.","간접"],
["Why hasn't the client returned our proposal yet?",["Their director is overseas until Monday.","Yes, we returned it.","It was a strong proposal."],0,"이유를 '책임자가 출장 중'으로 간접 설명. Yes 오답.","간접"],
["Didn't the warehouse get the new scanners last week?",["They're arriving tomorrow, actually.","The scanner is on aisle six.","Yes, at the weekly warehouse meeting."],0,"내일 도착 → 아직 안 왔다는 뜻.","일반·부정"],
["Isn't the training session mandatory for all new hires?",["Only for the sales department, I believe.","Yes, two new sessions.","She was hired in March."],0,"'전원 필수'가 아니라 영업부만 해당한다고 정정.","일반·부정"],
["Has the maintenance crew fixed the loading dock door?",["They're scheduled for this afternoon.","The loading is almost done.","No, it's on the left door."],0,"오늘 오후 예정 → 아직 안 고쳤다.","일반·부정"],
["You've already sent out the invoices, haven't you?",["Yes, they went out this morning.","No, I haven't seen him.","In an invoice envelope."],0,"부가의문문: 사실이면 Yes + 부연.","부가"],
["The conference room is booked until noon, isn't it?",["Yes, the design team has it.","I've booked my flight already.","Until the end of June."],0,"긍정 확인. booked/until 반복어 trap.","부가"],
["Would you rather review the budget today or tomorrow morning?",["Tomorrow morning is better for me.","I reviewed the movie yesterday.","A new budget of 20 percent."],0,"선택의문문: 둘 중 하나 선택.","선택"],
["Should we ship the samples by air or by sea?",["Air, since the client needs them Friday.","The ship leaves from Busan.","Yes, they're samples."],0,"선택 + 이유. ship 반복 trap.","선택"],
["Why don't we move the team lunch to Thursday?",["That works better for everyone.","It was a wonderful lunch.","Because the move is tomorrow."],0,"Why don't we ~ = 제안 → 수락.","요청·제안"],
["Could you send me the updated floor plan?",["I'll e-mail it after lunch.","Yes, the fourth floor.","The plan was updated in March."],0,"요청 수락 + 시점 제시.","요청·제안"],
["Would you mind turning down the air conditioning?",["Not at all, it is a little cold in here.","Yes, it's an air conditioner.","Down the hall to the left."],0,"Would you mind ~? → Not at all = 수락.","요청·제안"]
);
G2.push(
["The board approved the ------ expansion of the Lisbon plant after a lengthy review.",["proposed","proposing","proposal","propose"],0,"품사","관사와 명사 사이 → 과거분사 형용사 proposed (제안된)."],
["Ms. Okafor's presentation was so ------ that several clients requested copies of her slides.",["persuasive","persuasively","persuade","persuasion"],0,"품사","be동사 보어 자리 → 형용사."],
["The new accounting software allows staff to process invoices ------.",["efficiently","efficient","efficiency","efficiencies"],0,"품사","'목적어 + 동사' 뒤 수식은 부사."],
["Hartmann Textiles is known for its ------ of natural fibers in every product line.",["use","used","usable","usefully"],0,"품사","소유격 its 뒤 명사 use (사용)."],
["Management gave ------ approval for the overtime budget on Friday.",["formal","formally","formality","formalize"],0,"품사","명사 approval 앞 형용사."],
["The ------ of the new safety guidelines will begin next month.",["implementation","implemented","implementable","implements"],0,"품사","The ~ of 구조의 명사 implementation (시행)."],
["All invoices ------ by the accounting department before the end of each month.",["must be processed","must process","must be processing","are processing"],0,"동사","invoice는 처리되는 대상 → 수동태. 조동사 뒤 be + p.p."],
["By the time the auditors arrive, Ms. Silva ------ all the records.",["will have organized","organizes","organized","is organizing"],0,"동사","By the time + 현재 → 미래완료."],
["If the shipment ------ by Thursday, we will have to cancel the order.",["does not arrive","will not arrive","had not arrived","would not arrive"],0,"동사","조건절은 현재시제로 미래를 나타냄."],
["Neither the manager nor the assistants ------ aware of the schedule change.",["are","is","was","has been"],0,"동사","neither A nor B → B(assistants, 복수)에 일치."],
["The company's profits ------ steadily since it introduced the loyalty program last year.",["have risen","rose","are rising","will rise"],0,"동사","since + 과거 시점 → 현재완료."],
["Mr. Nakamura suggested that the meeting ------ to next Wednesday.",["be postponed","is postponed","was postponed","postpones"],0,"동사","suggest + that절 → (should) 동사원형, 회의는 연기되는 대상이라 수동."],
["------ the heavy rain, the outdoor trade fair attracted more than 3,000 visitors.",["Despite","Although","Because","Whereas"],0,"전치사·접속사","뒤에 명사구 → 전치사 Despite."],
["Employees may leave early on Fridays ------ they have finished their assigned tasks.",["provided that","in spite of","owing to","as for"],0,"전치사·접속사","절을 이끄는 조건 접속사 provided that (~한다면)."],
["The renovation will be completed ------ the end of the third quarter.",["by","until","during","within"],0,"전치사·접속사","완료 시점 마감 → by. until은 지속 동작에 사용."],
["Ms. Alvarez has worked for the bank ------ she graduated from university.",["since","for","during","while"],0,"전치사·접속사","현재완료 + since + 과거 시점 절."],
["------ all of the applicants were qualified, only two received offers.",["Although","Despite","Because of","Nevertheless"],0,"전치사·접속사","절 + 절, 양보 → Although."],
["Please keep your receipt ------ the event of a return or exchange.",["in","on","at","for"],0,"전치사·접속사","in the event of = ~의 경우에는."],
["The engineer ------ designed the new assembly line will give a talk on Tuesday.",["who","whom","which","whose"],0,"관계사·분사","사람 선행사, 동사 designed의 주어 → 주격 who."],
["Customers ------ orders exceed $100 qualify for free shipping.",["whose","who","whom","their"],0,"관계사·분사","뒤에 명사(orders)가 오므로 소유격 whose."],
["Any employees ------ to attend the workshop should register with Human Resources.",["wishing","wished","wishes","wish"],0,"관계사·분사","능동 분사구 (= who wish)."],
["The report, ------ last week, contains several errors in the budget section.",["published","publishing","having published","publish"],0,"관계사·분사","report는 발행되는 대상 → 과거분사."],
["The seminar room, ------ capacity is 40, is booked all week.",["whose","which","that","where"],0,"관계사·분사","room의 capacity → 소유격 whose."],
["The Denver branch is ------ than any other branch in the region.",["more profitable","most profitable","as profitable","profitably"],0,"비교·대명사","than과 호응하는 비교급."],
["Of the three candidates, Mr. Kowalski has ------ experience in supply chain management.",["the most","more","much","very"],0,"비교·대명사","셋 중 → 최상급 the most."],
["Ms. Patel reviewed the contract ------ before sending it to the client.",["herself","her","hers","she"],0,"비교·대명사","주어와 같은 사람을 강조하는 재귀대명사."],
["Our new model is not as ------ as the previous one, but it costs much less.",["durable","more durable","durably","durability"],0,"비교·대명사","as ~ as 사이는 원급 형용사."],
["The firm plans ------ two hundred workers by the end of the year.",["to hire","hiring","hire","hired"],0,"준동사·구문","plan + to부정사."],
["Ms. Yoon is responsible for ------ that all shipments are labeled correctly.",["ensuring","ensure","to ensure","ensured"],0,"준동사·구문","전치사 for 뒤 동명사."],
["The team worked through the weekend ------ the deadline.",["in order to meet","in order meeting","so that meet","for meet"],0,"준동사·구문","목적: in order to + 동사원형."],
["Not only ------ the survey results improve, but employee turnover also fell.",["did","do","has","was"],0,"준동사·구문","Not only 도치, 과거 improve → did + 주어 + 동사원형."],
["The manager was reluctant ------ the schedule without consulting the team.",["to change","changing","change","for changing"],0,"준동사·구문","reluctant + to부정사."],
["The consultant's ------ for reducing packaging waste saved the company $50,000.",["recommendation","permission","reservation","expectation"],0,"어휘","recommendation for ~ = ~에 대한 권고."],
["Employees must ------ their travel expenses to the finance office within ten days.",["submit","permit","adopt","grant"],0,"어휘","submit expenses = 경비 청구서를 제출하다."],
["The hotel offers a ------ breakfast to all guests staying in suites.",["complimentary","competitive","compulsory","comparable"],0,"어휘","complimentary = 무료의."],
["Ms. Fischer was ------ for her outstanding sales performance this quarter.",["recognized","realized","resolved","reserved"],0,"어휘","be recognized for = ~로 인정받다."],
["The factory had to ------ production after a machine malfunction was detected.",["suspend","renew","extend","advance"],0,"어휘","suspend production = 생산을 중단하다."],
["The new policy will take ------ on January 1.",["effect","charge","notice","part"],0,"어휘","take effect = 시행되다."],
["Flights were delayed due to ------ weather conditions.",["adverse","adhesive","adjacent","additional"],0,"어휘","adverse weather = 악천후."],
["The board will ------ a decision on the merger by next Friday.",["reach","meet","arrive","fetch"],0,"어휘","reach a decision = 결정에 이르다."]
);
P3B.push(
{tag:"일반",s:`W: Hi, Jorge. Did the morning inspection on Line 3 turn up anything?
M: Yes, unfortunately. About one in twenty of the metal casings has a small crack near the edge.
W: That's more than usual. Do we know what's causing it?
M: The technician thinks the new cooling system may be running too fast. He's adjusting the settings now.
W: OK. Please hold the affected units in the warehouse until the quality team examines them. I'll let the client know that Friday's delivery might be delayed.
M: Understood. I'll put a red tag on each one.`,q:[
["What problem does the man report?",["A machine has stopped working.","Some products are damaged.","A shipment was lost.","A worker was injured."],1,"금속 케이싱에 금이 감 = 제품 손상."],
["What does the technician think caused the problem?",["A cooling system is set incorrectly.","A supplier sent poor materials.","A machine is outdated.","Some workers lack training."],0,"cooling system이 너무 빠르게 작동 = 설정 문제."],
["What will the woman do?",["Order new equipment","Contact a client","Reschedule an inspection","Tag some units"],1,"고객에게 납품 지연 가능성을 알림. 태그는 남자가 붙임."]]},
{tag:"의도",s:`W: Hi, Noah. How did the first week of the new loyalty card program go?
M: Better than expected. We signed up about 400 customers, and most of them used their points right away.
W: That's great. Any complaints?
M: A few. Some customers couldn't find where to check their points balance. I think the sign at the register is too small.
W: Hmm. Well, the printing company is only a phone call away.
M: Good idea. I'll ask them for a larger sign right away.`,q:[
["What was recently introduced at the store?",["A rewards program","A delivery service","A new register system","An online store"],0,"loyalty card program = 고객 적립 프로그램."],
["What problem does the man mention?",["Some customers cannot find some information.","Some cards were printed incorrectly.","Some points were not recorded.","Some registers are out of order."],0,"포인트 잔액 확인 위치를 못 찾음(표지판이 작음)."],
["What does the woman imply when she says, \"the printing company is only a phone call away\"?",["A new sign can be ordered easily.","The printing company is close by.","She will call the customers.","The printing company is unreliable."],0,"전화 한 통이면 된다 = 쉽게 주문할 수 있다는 뜻(비유 표현)."]]},
{tag:"시각자료",v:`[Departures — Today]
Flight  | Departs   | Gate
KA 214  | 2:15 P.M. | B7
KA 218  | 4:40 P.M. | C3
KA 222  | 7:05 P.M. | B2`,s:`M: Hi, I was on the 11:30 flight from Seattle, and it landed late. I've missed my connection to Denver.
W: I'm sorry about that, sir. Let me look at what's available. There's a flight at 2:15, but it's completely full. The next one leaves at 4:40.
M: That works. I need to be in Denver tonight for a conference that starts early tomorrow.
W: Then I'll put you on that flight at no charge. I'll also give you a voucher for a meal while you wait.
M: Thank you. That's very helpful.`,q:[
["What problem does the man have?",["His luggage was lost.","He missed a connecting flight.","His ticket has expired.","His flight was canceled."],1,"연착으로 연결편을 놓침."],
["Look at the graphic. Which gate will the man most likely go to?",["B7","C3","B2","A1"],1,"만석인 2:15 다음의 4:40편 → C3."],
["What will the woman give the man?",["A hotel coupon","A refund","A meal voucher","A first-class upgrade"],2,"voucher for a meal."]]},
{tag:"3인",s:`W: Thanks for joining, Andre and Kenji. We need to finalize our booth plan for the Medical Supply Expo next month.
M: I've been in touch with the organizers. The booths in the main hall are all taken, but there are still a few in the east wing.
M2: The east wing gets less foot traffic, doesn't it? Maybe we should pay extra for a corner booth there.
W: How much extra?
M: Five hundred dollars, and we'd get a larger display area.
W: Let's do it. Kenji, can you design the banners? And Andre, please send the deposit before Friday. Otherwise they'll release the space.
M2: I'll have drafts ready by Wednesday.`,q:[
["What are the speakers mainly discussing?",["Preparing for a trade show","Hiring a designer","Opening a new office","Training new employees"],0,"Expo 부스 계획."],
["What does the woman decide to do?",["Reserve a booth in the main hall","Reserve a larger corner booth","Cancel the company's participation","Hire an outside designer"],1,"추가 비용을 내고 코너 부스(east wing)를 예약."],
["What does the woman ask Andre to do before Friday?",["Design banners","Contact the organizers","Make a payment","Review a contract"],2,"deposit을 보냄 = 결제. 배너는 Kenji 담당."]]},
{tag:"일반",s:`W: Mr. Alvarez, thanks for coming in. I'm reviewing your small-business loan application.
M: Thank you. I hope everything is in order. I run a bakery, and I'd like to buy a second oven.
W: Your revenue statements look strong. However, we need two years of tax returns, and you've submitted only one.
M: I opened the bakery 18 months ago, so I only have one full year on file. Would that be a problem?
W: Not necessarily. If you can provide a letter from your accountant explaining your first-year income, that should be enough.
M: I can get that by tomorrow. And how long until I hear back?
W: Usually about five business days after we receive everything.`,q:[
["Who most likely is the man?",["A bank employee","A bakery owner","An accountant","An equipment dealer"],1,"I run a bakery."],
["What is the problem with the man's application?",["His income is too low.","He has submitted only one tax return.","His business is not registered.","His form has not been signed."],1,"2년치가 필요한데 1년치만 제출."],
["What does the woman ask the man to provide?",["A second application form","A photo identification","A letter from an accountant","A list of equipment prices"],2,"letter from your accountant."]]}
);
P4B.push(
{tag:"일반",s:`Good morning, everyone, and welcome to the Lakeshore Grand Hotel. I'm Priya Nair, the head of housekeeping. Before your first shift, I'd like to go over a few points. First, every room must be checked against the twelve-item list on your cart. Guests notice small details, like a missing coffee packet, and those details show up in our online reviews. Second, if you find anything left behind by a guest, don't throw it away. Bring it to the front desk, where it will be recorded and stored for thirty days. Finally, your uniforms will be handed out this afternoon at the staff entrance. Please pick yours up before you leave today.`,q:[
["Who is the speaker addressing?",["Hotel guests","New housekeeping staff","Front desk agents","Online reviewers"],1,"housekeeping head가 첫 근무 전 직원들에게 안내."],
["Why does the speaker mention online reviews?",["To ask for guest feedback","To stress the importance of small details","To announce a new Web site","To explain a hiring process"],1,"작은 부분이 리뷰에 나타나므로 점검이 중요."],
["What are listeners told to do with items left by guests?",["Throw them away","Keep them on the cart","Take them to the front desk","Mail them to the guests"],2,"Bring it to the front desk."]]},
{tag:"의도",s:`Hi, everyone. Before we wrap up, a quick word about the annual performance reviews. As you know, the self-evaluation forms are due to your supervisors by the end of next week. I've heard some of you say that the new online form is confusing, so I've posted a short guide on the intranet. It takes about ten minutes to read. Remember, the deadline is not going to move. The reviews are linked to next year's salary planning, and Finance needs the results by the twentieth. If you have questions, contact Diego in Human Resources.`,q:[
["What are listeners required to do by the end of next week?",["Attend a training session","Submit self-evaluation forms","Meet with Finance","Update their contact information"],1,"self-evaluation forms are due."],
["What does the speaker mean when she says, \"the deadline is not going to move\"?",["The office will remain open.","Employees should not expect an extension.","The reviews will be held next week.","Finance has already approved the plan."],1,"마감이 바뀌지 않는다 = 연장을 기대하지 말라는 뜻."],
["What has the speaker posted on the intranet?",["A salary chart","A list of supervisors","Instructions for an online form","A revised deadline"],2,"a short guide (온라인 양식 안내)."]]},
{tag:"시각자료",v:`[Workshop Schedule — Saturday]
Room 101 | Digital Marketing Basics   | 9:00 A.M.
Room 102 | Budget Planning            | 10:30 A.M.
Room 201 | Leadership Skills          | 1:00 P.M.
Room 202 | Customer Service Trends    | 2:30 P.M.`,s:`Welcome to the Bayside Business Forum. I'm happy to see so many of you here. A quick note before you leave for the workshops: the location of the Leadership Skills workshop has changed. Because of the large number of registrations, it will now be held in the Grand Ballroom instead of the room printed in your program. Also, lunch will be served between noon and one o'clock in the courtyard, so please be back at your afternoon workshop right on time. Finally, presentation slides can be picked up at the registration desk after each session.`,q:[
["Where is the talk most likely taking place?",["At a job fair","At a business conference","At a product launch","At a school reunion"],1,"Business Forum, workshops."],
["Look at the graphic. What time will the workshop with the changed location begin?",["9:00 A.M.","10:30 A.M.","1:00 P.M.","2:30 P.M."],2,"Leadership Skills가 장소 변경 → 1:00 P.M."],
["What are listeners advised to do?",["Register again","Return promptly after lunch","Bring their own lunch","Sign up for more workshops"],1,"afternoon workshop에 정시 도착."]]},
{tag:"일반",s:`Hello, this is Grace Whitfield from Northgate Credit Union, calling for Mr. Moreno. I'm following up on the equipment loan you applied for last month. Good news: your application has been approved, and the funds can be available as early as Monday. Before that, though, we need you to visit our Elm Street branch to sign the final agreement. Please bring a photo ID and a copy of the purchase invoice for the machinery. The branch is open until five on weekdays and until noon on Saturdays. If you can't come in this week, call me at 555-0142 and we'll arrange a time.`,q:[
["Why is the speaker calling?",["To ask for a payment","To report an approved loan","To schedule a job interview","To correct an account error"],1,"application has been approved."],
["What does the speaker ask Mr. Moreno to bring?",["A tax return","A business license","A purchase invoice","A bank statement"],2,"a copy of the purchase invoice."],
["What should the listener do if he cannot visit this week?",["Send an e-mail","Call the speaker","Visit on Sunday","Cancel the loan"],1,"call me → 시간을 조정."]]}
);
P6B.push(
{t:"이메일 · 채용 제안",p:`Dear Mr. Kowalski,

Thank you for interviewing with Brightline Logistics for the position of operations coordinator. We were ---(1)--- impressed by your experience in supply chain management. ---(2)--- We would like to offer you the position at a starting salary of $52,000 per year. Please review the enclosed contract and ---(3)--- it to us by March 14. If you have any questions about the benefits package, do not hesitate ---(4)--- our office.

Sincerely,
Marta Lindqvist
Human Resources`,q:[
[["particularly","particular","particularize","particularity"],0,"품사","형용사 impressed를 꾸미는 부사."],
[["After discussing your candidacy, our hiring team agreed that you are the right fit.","The office will be closed during the holiday.","Our fleet has grown to fifty trucks.","Interviews for other positions will begin next month."],0,"문장 삽입","면접 인상 → 채용 결정 → 제안으로 이어지는 흐름."],
[["return","returns","returning","returned"],0,"동사","and로 review와 연결된 명령문 동사원형."],
[["to contact","contacting","contact","to contacting"],0,"준동사","do not hesitate + to부정사."]]},
{t:"공지 · 창고 안전 조끼",p:`Notice to all warehouse employees:

Effective Monday, October 6, all employees entering the loading area must wear high-visibility vests. Vests ---(1)--- at the supply counter near the east entrance. ---(2)--- The change follows two minor accidents last quarter, ---(3)--- occurred when forklift drivers could not see pedestrians. Employees who fail to comply will be asked to leave the area ---(4)--- they put one on.`,q:[
[["will be issued","will issue","issuing","to issue"],0,"동사","조끼는 지급되는 대상 → 수동태."],
[["Visitors must also wear one and sign in at the security desk.","The warehouse was built in 1998 and has three floors.","Forklift training will be offered next spring.","Lunch is served in the cafeteria from noon."],0,"문장 삽입","앞 문장의 vests를 one으로 받아 방문객 규정 추가."],
[["both of which","both of them","and both of","of which both"],0,"관계사","콤마 뒤 both of which = 접속 + 대명사 역할."],
[["until","during","whereas","because of"],0,"전치사·접속사","조끼를 입을 때까지 → until + 절."]]},
{t:"기사 · 은행 지점 확대",p:`Harlow Bank to Open Five New Branches

Harlow Bank announced on Tuesday that it will open five new branches across the northern region by next spring. The expansion is ---(1)--- to create about 120 jobs. ---(2)--- "Customers in smaller towns have told us they want more in-person service," said CEO Owen Brennan. In addition, each new branch will offer extended hours ---(3)--- Saturday. Analysts say the move could help the bank ---(4)--- its market share in the region.`,q:[
[["expected","expecting","expectation","expects"],0,"동사","be expected to = ~할 것으로 예상된다."],
[["The first branch, in Millbrook, is scheduled to open in January.","Bank interest rates fell slightly this year.","Online banking has grown popular among young customers.","Mr. Brennan has worked in banking for over twenty years."],0,"문장 삽입","새 지점 발표 → 첫 지점 구체 일정 → CEO 인용. 뒤에서 이름이 처음 소개되므로 Mr. Brennan 문장은 부적합."],
[["including","included","inclusion","includes"],0,"품사","분사구문식 전치사 역할 including (토요일 포함)."],
[["expand","expansion","expanding","expanded"],0,"동사","help + 목적어 + 동사원형."]]}
);
RD2.push(
{t:"안내문 · 직원 건강 지원금",k:"single",p:`Ortiz & Delaney Architects
Employee Wellness Reimbursement Program

Beginning January 1, all full-time employees who have completed six months of service may be reimbursed up to $300 per year for wellness-related expenses. Eligible expenses include gym memberships, fitness classes, and health screenings. Purchases of exercise equipment, such as treadmills, are not eligible, nor are expenses incurred before enrollment.

To apply, submit the online claim form together with an itemized receipt within 30 days of the purchase. Claims submitted after that period will not be processed. Reimbursements are paid with the next monthly paycheck. Employees who leave the firm before receiving payment will not be reimbursed. Questions may be directed to Wendell Shah in Human Resources at extension 214.`,q:[
["What is the purpose of the notice?",["To announce a new employee benefit","To explain a hiring process","To recruit gym instructors","To report a change in salary"],0,"목적","직원 건강 관련 비용 환급 프로그램 안내."],
["What expense is NOT eligible for reimbursement?",["A gym membership","A fitness class","A health screening","A treadmill purchase"],3,"NOT","운동 기구 구입은 대상 아님."],
["According to the notice, how will employees receive their reimbursement?",["By bank transfer within a week","With their monthly paycheck","In the form of gift cards","At the Human Resources office"],1,"세부","Reimbursements are paid with the next monthly paycheck."],
["What is implied about an employee who has worked at the firm for four months?",["The employee cannot apply yet.","The employee may receive $150.","The employee must submit two receipts.","The employee can join by phone."],0,"추론","6개월 근속이 필요하므로 아직 신청 불가."]]},
{t:"문자 대화 · 투어 단체 도착",k:"chat",p:`Dana Okafor (3:12 P.M.)
Team, the shuttle driver just called. He's stuck in traffic and will be about 30 minutes late picking up the Hartmann tour group.

Luis Silva (3:13 P.M.)
Their rooms won't be ready until 3:45 anyway. Housekeeping is still finishing the fourth floor.

Dana Okafor (3:14 P.M.)
Good. Can someone greet them in the lobby with welcome drinks?

Mei Nakamura (3:16 P.M.)
I can do it. Do we have enough lemonade?

Luis Silva (3:17 P.M.)
There are only six bottles left. I'll bring more up from the storeroom.

Mei Nakamura (3:18 P.M.)
Thanks. The group has 24 people, so we'll need at least that many cups too.

Dana Okafor (3:19 P.M.)
Cups are in the cabinet behind the front desk. I'll take care of the room key envelopes.`,q:[
["Why did Ms. Okafor start the conversation?",["To report a delayed pickup","To cancel a reservation","To request more staff","To announce a new shuttle route"],0,"목적","셔틀 기사가 교통 체증으로 30분 늦음."],
["At 3:13 P.M., what does Mr. Silva most likely mean when he writes, \"Their rooms won't be ready until 3:45 anyway\"?",["The delay will not cause a serious problem.","Housekeeping needs more workers.","The group should choose another hotel.","The rooms need to be cleaned again."],0,"의도","객실이 3:45 전에는 준비되지 않으므로 지연이 큰 문제가 아님."],
["What will Mr. Silva do?",["Greet the guests in the lobby","Get more lemonade from the storeroom","Prepare the room key envelopes","Buy some cups"],1,"세부","I'll bring more up from the storeroom."],
["What is indicated about the tour group?",["It has 24 members.","It arrived early.","It reserved a fourth-floor suite.","It requested welcome drinks."],0,"세부","The group has 24 people."]]},
{t:"이중지문 · 포장 견적",k:"double",p:`Delgado Packaging Co. — Custom Box Pricing

Standard cardboard box (30 × 20 × 15 cm):
$1.20 each for orders of 500 or fewer; $0.95 each for orders over 500.
Logo printing: one color, $0.15 per box; full color, $0.40 per box.
Rush production (delivery within 5 business days): add 10% to the total.
Free shipping on orders over $800. Otherwise, a flat $45 shipping fee applies.
All orders require a 30% deposit at the time of purchase.

━━━━━━━━━━━━━━━━

To: Delgado Packaging Co.
From: Tariq Hussain, Sunfield Organics
Date: September 8
Subject: Quote request

Hello,
We need 600 standard boxes for our autumn tea collection, with our logo printed in one color. There is no rush; the end of next month is fine. Could you send me the total cost including shipping?

Tariq Hussain`,q:[
["Why did Mr. Hussain write to Delgado Packaging?",["To request a price quote","To complain about a delivery","To cancel an order","To ask for a sample"],0,"목적","Could you send me the total cost?"],
["What is NOT stated in the price list?",["A deposit is required.","Shipping can be free.","Logos can be printed in color.","Boxes come in three sizes."],3,"NOT","표준 상자 한 가지 크기만 명시됨."],
["How much will Mr. Hussain pay for logo printing?",["$30","$90","$240","$570"],1,"연계","600개 × $0.15 = $90 (한 가지 색)."],
["What is suggested about Mr. Hussain's order?",["It will be charged a shipping fee.","It qualifies for free shipping.","It requires rush production.","It is eligible for the lower box price only if he pays in full."],0,"연계","박스 $570 + 로고 $90 = $660로 $800 미만 → 배송비 $45 부과."]]},
{t:"삼중지문 · 출장비 정산",k:"triple",p:`Kestrel Analytics — Travel Expense Policy
- Airfare: economy class only; book at least 14 days before travel.
- Lodging: up to $150 per night.
- Meals: up to $60 per day; alcohol is not reimbursed.
- Taxis and ride shares are reimbursed when receipts are attached.
- Expense reports must be filed within 10 days of returning.

━━━━━━━━━━━━━━━━

EXPENSE REPORT
Employee: Anika Rao
Trip: Chicago client visit, March 3–5
Date submitted: March 12

Item                                   Amount
Airfare (economy, booked Feb 10)       $342.00
Hotel (2 nights at $165)               $330.00
Meals (3 days)                         $148.00
   includes $22 for wine on March 4
Taxi (receipts attached)               $56.00
Total                                  $876.00

━━━━━━━━━━━━━━━━

To: Anika Rao
From: Elena Voss, Accounting
Date: March 14
Subject: Your expense report

Hi Anika,
Thank you for submitting your report. The airfare and taxi charges are approved as submitted. Some other items exceed what our policy allows, so they have been adjusted. The revised total will be included in your next paycheck.

Elena Voss`,q:[
["What is NOT stated in the travel policy?",["Reports must be filed within 10 days.","Alcohol is not reimbursed.","Business class tickets need a manager's approval.","Ride share receipts are required."],2,"NOT","정책에는 이코노미 항공권만 허용한다고만 되어 있음."],
["How much will Ms. Rao most likely be reimbursed for the hotel?",["$150","$165","$300","$330"],2,"연계","1박 한도 $150 × 2박 = $300."],
["How much will Ms. Rao most likely be reimbursed for meals?",["$22","$126","$148","$180"],1,"연계","$148 − 와인 $22 = $126 (일일 한도 $60 이내)."],
["What is implied about Ms. Rao's report?",["It was submitted on time.","It contained a math error.","It was missing receipts.","It was rejected."],0,"추론","3월 5일 귀국, 3월 12일 제출 → 10일 이내."]]}
);
