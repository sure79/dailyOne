/* Part 6: passage with blanks ---(1)--- ; q = [options, answer, type, explanation] */
const P6B=[
{t:"이메일 · 사내 주방",p:`To: All employees
From: Office Management
Subject: Kitchen cleaning

Starting next Monday, the office kitchen will be cleaned every evening by a professional cleaning service. ---(1)---, we ask all employees to continue washing their own cups and dishes. Any food left in the refrigerator on Friday afternoon will be ---(2)---. Please label your containers with your name and the date. ---(3)--- Thank you for helping us keep our shared spaces ---(4)---.`,q:[
[["However","Therefore","For example","Similarly"],0,"접속부사","앞: 전문 업체가 청소한다 / 뒤: 그래도 컵은 각자 씻어라 → 역접 However."],
[["discarded","discarding","discard","discards"],0,"동사","will be + p.p. 수동태. 음식은 버려‘지는’ 것."],
[["This will help us identify items that belong to you.","The cleaning service was founded ten years ago.","Lunch will be provided at the meeting.","The refrigerator was purchased last year."],0,"문장 삽입","앞 문장(이름·날짜 라벨 붙이기)을 This가 받습니다."],
[["clean","cleanly","cleanliness","cleaning"],0,"품사","keep + 목적어 + 형용사 보어."]]},
{t:"광고 · 컨퍼런스 센터",p:`Looking for a place to hold your next business event? The Grandview Conference Center offers modern meeting rooms for groups of 10 to 500 people. All rooms ---(1)--- with high-speed Internet and the latest audio-visual equipment. Our experienced staff can also help you ---(2)--- catering, transportation, and hotel accommodations. ---(3)--- Book before March 31 and receive a 15% discount on your total bill. Visit www.grandviewcc.com for more ---(4)---.`,q:[
[["equip","are equipped","equipping","have equipped"],1,"동사","방은 장비를 갖추게 ‘된’ 것 → be equipped with."],
[["arrange","arranging","arranged","to be arranged"],0,"준동사","help + 목적어 + (to) 동사원형."],
[["Our center is conveniently located just five minutes from the airport.","The event was canceled due to bad weather.","Please return the equipment by Friday.","Our staff is currently on vacation."],0,"문장 삽입","광고는 장점을 이어서 나열합니다. 위치 장점 추가가 자연스럽습니다."],
[["inform","information","informative","informed"],1,"품사","for more information."]]},
{t:"공지 · 도서관 휴관",p:`The Brookside Public Library will be closed from July 1 to July 14 for ---(1)---. During this time, workers will install new shelving and upgrade the computer lab. Books that are due during the closure may be returned to the drop box outside the main entrance. ---(2)---, no late fees will be charged for items due during this period. ---(3)--- We apologize for the inconvenience and look forward to ---(4)--- you in our improved facility.`,q:[
[["renovations","renovated","renovate","renovator"],0,"품사","전치사 for 뒤 명사. renovator는 사람이라 의미가 맞지 않습니다."],
[["In addition","Instead","Otherwise","Nevertheless"],0,"접속부사","반납함 이용 가능 + 연체료 없음 → 정보 추가 In addition."],
[["The library's online services will remain available throughout the closure.","The library was built in 1965.","Please pay your late fees at the front desk.","Our computer lab has been closed permanently."],0,"문장 삽입","휴관 중 이용 안내 흐름. 연체료를 내라는 문장은 앞 내용과 모순."],
[["welcome","welcoming","welcomed","be welcomed"],1,"준동사","look forward to + -ing."]]},
{t:"편지 · 면접 안내",p:`Dear Mr. Kwon,

Thank you for your application for the position of sales associate at Maxwell Electronics. We were very ---(1)--- with your experience in retail. We would like to invite you for an interview on Thursday, May 8, at 2:00 P.M. The interview will last approximately one hour. ---(2)--- Please bring a copy of your résumé and two ---(3)---. If this time is not convenient, please contact me ---(4)--- Tuesday so that we can arrange another time.

Sincerely,
Helen Jang, Human Resources`,q:[
[["impress","impressed","impressive","impression"],1,"품사","사람이 감명을 ‘받은’ → impressed with."],
[["You will meet with the store manager and a member of our sales team.","We have already filled the position.","Our store opened in 2015.","Thank you for shopping with us."],0,"문장 삽입","면접 시간 안내 뒤 → 면접관 안내. 이미 채용했다는 말은 모순."],
[["references","referring","referred","refers"],0,"품사","two + 복수명사. references = 추천서."],
[["by","until","within","since"],0,"전치사","연락 기한 → by Tuesday."]]},
{t:"메모 · 고객 관리 시스템",p:`To: Sales Department
From: Diana Ross, Sales Director
Re: New client management system

As many of you know, we have been looking for a better way to track customer information. I am pleased to announce that we ---(1)--- a new client management system next month. The system will allow you to see each client's order history ---(2)--- one screen. ---(3)--- Training will be provided during the first week of the month. Attendance is ---(4)--- for all sales staff.`,q:[
[["introduced","will introduce","have introduced","introducing"],1,"동사","next month → 미래."],
[["on","at","by","to"],0,"전치사","on one screen = 한 화면에서."],
[["This will save you time when preparing for client meetings.","Our clients have complained about our prices.","The old system was installed last week.","Please submit your vacation requests."],0,"문장 삽입","새 시스템의 장점(한 화면 조회) → 시간 절약으로 이어짐."],
[["mandatory","mandate","mandating","mandatorily"],0,"품사","be동사 보어 자리 형용사. mandatory = 의무적인."]]},
{t:"기사 · 동네 빵집",p:`Local bakery Sweet Morning is celebrating its tenth anniversary this month. Owner Mina Yoo opened the shop in 2016 with just two employees. ---(1)---, the bakery has grown to three locations and more than forty staff. Ms. Yoo credits the success to her focus on using ---(2)--- grown ingredients from nearby farms. ---(3)--- To mark the anniversary, all locations will offer free coffee with any purchase ---(4)--- the end of the month.`,q:[
[["Since then","Before that","In contrast","Even so"],0,"접속부사","2016년 개업 → 그 이후로 성장. 현재완료(has grown)와 짝."],
[["local","locally","locate","location"],1,"품사","과거분사 grown을 꾸미는 부사. locally grown = 지역에서 재배된."],
[["Customers say they can taste the difference.","The bakery is closed on holidays.","Ms. Yoo studied engineering in college.","Coffee prices have risen recently."],0,"문장 삽입","좋은 재료 → 손님이 차이를 느낀다. 성공 이유 흐름."],
[["until","by","since","during"],0,"전치사","월말까지 계속되는 행사 → until."]]},
{t:"이메일 · 파손 상품",p:`Dear Ms. Alvarez,

We have received your e-mail regarding the damaged lamp you ordered from our online store. We are sorry that the item arrived in poor ---(1)---. A replacement lamp ---(2)--- to you yesterday by express delivery, and it should arrive within two days. ---(3)--- You do not need to return the damaged item. Please accept a $20 gift certificate as an apology. We hope you will continue to shop with us ---(4)---.

Customer Service Team, Brightline Home`,q:[
[["condition","conditional","conditionally","conditioned"],0,"품사","형용사 poor 뒤는 명사. in poor condition = 상태가 나쁜."],
[["ships","was shipped","will ship","is shipping"],1,"동사","yesterday + 램프는 발송‘된’ 것 → 과거 수동."],
[["You can track the package using the link below.","The lamp is no longer available.","We will refund your order next month.","Our store will open a new branch."],0,"문장 삽입","발송 안내 뒤 → 배송 조회 안내. 재고 없음은 앞 문장과 모순."],
[["in the future","in the past","in advance","in person"],0,"어휘","앞으로도 계속 → in the future."]]},
{t:"공지 · 엘리베이터 점검",p:`Please be aware that the elevators in the east wing will be out of service on Saturday, October 18, for routine ---(1)---. Tenants who need to move large items that day should use the freight elevator in the west wing. ---(2)---, the building's main entrance will be open as usual. ---(3)--- We appreciate your understanding as we work to keep the building safe and ---(4)---.`,q:[
[["maintain","maintenance","maintained","maintains"],1,"품사","형용사 routine 뒤 명사. routine maintenance = 정기 점검."],
[["Meanwhile","As a result","For instance","Unless"],0,"접속부사","엘리베이터는 멈추지만 한편 정문은 평소대로 → Meanwhile."],
[["If you have any questions, please contact the building management office.","The elevators were installed by a Swedish company.","Rent will increase next year.","The parking garage is full."],0,"문장 삽입","공지 마무리의 문의처 안내가 자연스럽습니다."],
[["comfort","comfortable","comfortably","comforting"],1,"품사","safe and ___ → 형용사 병렬."]]},
{t:"보도자료 · 신규 노선",p:`Horizon Airlines announced today that it will begin offering direct flights between Seoul and Lisbon starting in May. The new route will operate three times a week. ---(1)--- Previously, passengers had to change planes in Paris or Frankfurt, which added several hours to the trip. "We are excited to offer our customers a faster and more ---(2)--- way to travel to Portugal," said CEO Daniel Hwang. To celebrate the launch, the airline is offering discounted fares for tickets ---(3)--- before March 31. Tickets can be booked through the Horizon Airlines Web site or mobile ---(4)---.`,q:[
[["Flights will depart on Mondays, Wednesdays, and Fridays.","The airline was founded in 1988.","Lisbon is famous for its seafood.","Passengers must check in two hours early for all flights."],0,"문장 삽입","‘주 3회’ 바로 뒤 → 요일을 구체적으로."],
[["convenient","convenience","conveniently","conveniences"],0,"품사","more ___ way → 명사 앞 형용사. faster와 병렬."],
[["purchased","purchasing","purchase","purchases"],0,"분사","tickets (which are) purchased → 과거분사."],
[["application","apply","applicant","applied"],0,"어휘","mobile application = 모바일 앱."]]},
{t:"이메일 · 팀 회식",p:`Hi team,

I'd like to thank everyone for your hard work on the Lee & Park account. Thanks to your efforts, the client has ---(1)--- our contract for another two years. ---(2)---, I'm planning a team dinner next Friday at Luna Restaurant. Please let me know by Wednesday ---(3)--- you can attend so that I can make a reservation. ---(4)---

Best,
Sophie`,q:[
[["renewed","renewing","renewal","renew"],0,"동사","has + p.p. 현재완료."],
[["To celebrate","Although","Because","In spite of"],0,"준동사","콤마 뒤에 완전한 절 → ‘축하하기 위해’ to부정사."],
[["whether","that","what","which"],0,"접속사","참석할 수 있는지 ‘여부’ → whether."],
[["If you have any dietary restrictions, please include them in your reply.","The contract was signed ten years ago.","Luna Restaurant is closed on Fridays.","Please submit your expense reports."],0,"문장 삽입","회식 예약 흐름 → 식사 제한 사항 알려 달라. 금요일 휴무는 모순."]]}];

/* Part 7 additions. k: single | chat | double | triple. Passages in a set are separated by a ruled line. */
const RD2=[
{t:"채용 공고 · 호텔",k:"single",p:`Coastal Hotels — Now Hiring: Front Desk Supervisor (Busan)

Coastal Hotels is seeking an experienced front desk supervisor for our Haeundae location. The successful candidate will train and schedule front desk staff, handle guest complaints, and work closely with the housekeeping department.

Requirements:
- At least three years of hotel front desk experience, including one year in a supervisory role
- Fluency in English and Korean; Japanese is a plus
- Willingness to work weekends and holidays

To apply, send your résumé and a cover letter to careers@coastalhotels.com by June 20. Only candidates selected for an interview will be contacted.`,q:[
["What is NOT mentioned as a responsibility of the position?",["Training staff","Scheduling employees","Dealing with complaints","Cleaning guest rooms"],3,"NOT","train(A), schedule(B), handle complaints(C)는 지문에 있음. 객실 청소는 housekeeping과 ‘협력’할 뿐 업무가 아님."],
["What is indicated about Japanese language skills?",["They are required.","They are preferred but not required.","They will be taught.","They are not needed."],1,"세부","a plus = 우대 사항."],
["What is suggested about applicants who are not selected?",["They will receive an e-mail.","They will not be contacted.","They can reapply next month.","They will be sent to another location."],1,"추론","Only candidates selected ~ will be contacted → 떨어진 사람은 연락 없음."]]},
{t:"문자 대화 · 브로슈어",k:"chat",p:`Kate Moreno (2:05 P.M.)
Hi Jun, are you still at the print shop?

Jun Oh (2:06 P.M.)
Just leaving. I picked up the brochures for tomorrow's trade fair.

Kate Moreno (2:07 P.M.)
Great. Could you check the phone number on the back? The client said it might be wrong.

Jun Oh (2:09 P.M.)
You're right. The last two digits are switched.

Kate Moreno (2:10 P.M.)
Oh no. Can they reprint them today?

Jun Oh (2:12 P.M.)
I'll ask. They're usually busy on Fridays, though.

Jun Oh (2:18 P.M.)
Good news. They can have them ready by six.

Kate Moreno (2:19 P.M.)
That'll work. Thanks, Jun!`,q:[
["What is the problem with the brochures?",["They were printed in the wrong color.","They contain an incorrect phone number.","They were delivered late.","There are not enough copies."],1,"세부","The last two digits are switched → 전화번호 오류."],
["At 2:12 P.M., what does Mr. Oh most likely mean when he writes, \"They're usually busy on Fridays, though\"?",["He is not sure the shop can reprint the brochures in time.","He wants to go on a different day.","The shop is closed on Fridays.","He will have to pay extra."],0,"의도 파악","‘오늘 다시 뽑을 수 있나?’에 대한 반응 → 가능할지 확신이 없다."],
["When will the new brochures be ready?",["At 2 P.M.","At 6 P.M.","Tomorrow morning","Next Friday"],1,"세부","ready by six."]]},
{t:"이메일 · 주문 문제",k:"single",p:`From: Paul Grant <pgrant@lumentech.com>
To: Customer Support <support@officehub.com>
Date: March 3
Subject: Order #88214

Hello,

On February 25, I ordered twelve ergonomic office chairs for our new branch in Daegu. The chairs arrived yesterday, but three of them were missing the armrests. The other nine are in perfect condition.

Our branch opens next Monday, so I would appreciate it if you could send the missing parts as soon as possible. I have attached photos of the chairs for your reference. If sending the parts is not possible, please let me know about replacing the three chairs.

Thank you,
Paul Grant, Office Manager, Lumen Tech`,q:[
["Why did Mr. Grant write the e-mail?",["To order more chairs","To report a problem with an order","To cancel an order","To request a catalog"],1,"주제","three of them were missing the armrests."],
["How many chairs arrived incomplete?",["Two","Three","Nine","Twelve"],1,"세부","three of them were missing the armrests."],
["What did Mr. Grant include with the e-mail?",["A receipt","Pictures","A floor plan","A payment form"],1,"세부","attached photos → pictures."],
["What is suggested about Lumen Tech?",["It is opening a new office soon.","It manufactures chairs.","It is moving its headquarters.","It recently hired Mr. Grant."],0,"추론","Our branch opens next Monday → 곧 새 지점을 연다."]]},
{t:"기사 · 배달 앱",k:"single",p:`SEOUL (May 12) — Korean food delivery app FoodDash announced yesterday that it will expand its service to five new cities by the end of the year. The company, which currently operates in Seoul and Incheon, has seen its number of users triple over the past two years.

According to CEO Min-seo Kang, the expansion will create more than 800 jobs, mostly for delivery riders and customer service staff. "We want to support local restaurants outside the capital area," Ms. Kang said.

FoodDash also plans to introduce a subscription service next month. For a monthly fee of 4,900 won, members will receive free delivery on all orders over 15,000 won.`,q:[
["What is the article mainly about?",["A company's expansion plans","A new restaurant opening","A change in delivery fees","The hiring of a new CEO"],0,"주제","expand its service to five new cities."],
["What is indicated about FoodDash?",["It operates in five cities.","Its number of users has grown.","It owns restaurants.","It is based in Incheon."],1,"세부","triple → has grown. 현재는 서울·인천 두 곳."],
["What will subscribers receive?",["Discounts at restaurants","Free delivery on certain orders","A monthly gift","Faster delivery times"],1,"세부","orders over 15,000 won → certain orders."]]},
{t:"공지 · 아파트 소방 점검",k:"single",p:`Riverside Apartments — Notice to Residents

The annual inspection of all fire alarms and sprinkler systems will take place on Tuesday, September 9, between 9:00 A.M. and 4:00 P.M. [1] Inspectors will need to enter each apartment for about ten minutes. [2] If you will not be home, the building manager will let the inspectors in using a master key. [3] Residents with pets are asked to keep them in a separate room during the inspection. [4] Thank you for your cooperation.`,q:[
["What is the purpose of the notice?",["To announce a safety inspection","To introduce a new manager","To explain a rent increase","To advertise an apartment"],0,"주제","annual inspection of all fire alarms."],
["What are pet owners asked to do?",["Take pets outside","Keep pets in another room","Register their pets","Pay a pet fee"],1,"세부","keep them in a separate room."],
["In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"In this case, a staff member will remain with the inspectors at all times.\"",["[1]","[2]","[3]","[4]"],2,"문장 삽입","In this case = 집에 없어서 마스터키로 들어가는 경우 → 그 문장 바로 뒤 [3]."]]},
{t:"문자 대화 · 프로젝터 고장",k:"chat",p:`Lena Fischer (9:02 A.M.)
Morning, all. The projector in Meeting Room 2 isn't turning on. I have a client presentation at 10.

Marcus Bell (9:04 A.M.)
IT is short-staffed today. It might take them a while.

Priya Nair (9:05 A.M.)
Room 4 has a working projector. I booked it for 11, but it's free until then.

Lena Fischer (9:06 A.M.)
Perfect. My meeting is only 45 minutes.

Priya Nair (9:07 A.M.)
Great, just make sure you're out by 11.

Marcus Bell (9:08 A.M.)
I'll still file a repair request for Room 2.`,q:[
["What problem does Ms. Fischer have?",["Her client canceled.","A device is not working.","She is late for work.","Her laptop is missing."],1,"세부","projector isn't turning on → device not working."],
["At 9:04 A.M., what does Mr. Bell suggest when he writes, \"IT is short-staffed today\"?",["The repair may not be done quickly.","He will fix the projector himself.","IT staff are in a meeting.","Ms. Fischer should call IT."],0,"의도 파악","바로 뒤 It might take them a while → 금방 못 고친다."],
["What will Mr. Bell most likely do next?",["Book Room 4","Request a repair","Attend the presentation","Contact the client"],1,"추론","I'll still file a repair request."]]},
{t:"청구서 · 청소 서비스",k:"single",p:`Brightway Cleaning Services — Invoice

Customer: Harmon Law Office, 22 Oak Street
Invoice date: October 31
Service period: October 1–31

Regular office cleaning (weekly, 4 visits) ...... $480
Carpet deep cleaning (Oct. 15) ...... $150
Window washing (Oct. 22) ...... $90
Discount (loyal customer, 5%) ...... –$36
Total due ...... $684

Payment is due within 30 days. Payments received after November 30 will be charged a late fee of 2%.`,q:[
["How many times was regular cleaning done in October?",["Once","Twice","Four times","Five times"],2,"세부","weekly, 4 visits."],
["Why did Harmon Law Office receive a discount?",["It paid early.","It is a long-term customer.","It ordered window washing.","It used a coupon."],1,"세부","loyal customer → long-term customer."],
["What is indicated about the payment?",["It must be made in cash.","A fee applies if it is late.","It was already made.","It is due on October 31."],1,"세부","late fee of 2%."]]},
{t:"이중지문 · 연회장 문의",k:"double",p:`To: Grace Hall Events
From: Tom Becker
Date: August 2
Subject: Company dinner

Hello,
I'm planning a year-end dinner for our company on December 12. We expect about 80 guests. We would like a room with a stage, since our CEO will give a short speech and a band will perform. Our budget is around $6,000, including food. Could you tell me which of your rooms would be suitable?

Tom Becker, Kline Manufacturing

━━━━━━━━━━━━━━━━

To: Tom Becker
From: Sara Lim, Grace Hall Events
Date: August 3

Dear Mr. Becker,
Thank you for your inquiry. Please see our available rooms for December 12 below. All prices include a three-course dinner.

Room            Seats  Stage  Price
Rose Room          60  No     $3,600
Garden Hall       100  Yes    $5,800
Crystal Room      100  No     $5,200
Grand Ballroom    250  Yes   $12,000

Please note that December dates book quickly. A 20% deposit will hold your reservation.

Sara Lim`,q:[
["Why did Mr. Becker write to Grace Hall Events?",["To cancel a booking","To ask about a venue","To complain about a meal","To hire a band"],1,"주제","which of your rooms would be suitable?"],
["What will happen at the dinner?",["Awards will be presented.","A band will perform.","A product will be launched.","A cooking class will be held."],1,"세부","a band will perform."],
["Which room is most suitable for Mr. Becker's event?",["Rose Room","Garden Hall","Crystal Room","Grand Ballroom"],1,"연계","첫 지문 조건(80명, 무대, 약 6,000달러) + 표 → Garden Hall(100명, 무대 있음, 5,800달러)."],
["What is Mr. Becker advised to do?",["Book soon","Choose a different date","Reduce the number of guests","Pay the full amount"],0,"추론","December dates book quickly → 서둘러 예약하라."],
["How much will the deposit for Garden Hall most likely be?",["$1,040","$1,160","$1,200","$5,800"],1,"연계","5,800달러 × 20% = 1,160달러."]]},
{t:"이중지문 · 헬스장 광고와 후기",k:"double",p:`SmartFit Gym — Grand Opening!
Our new location on Center Street opens on April 1. Join during April and get:
- No sign-up fee (usually $50)
- 20% off monthly membership for the first 3 months
- A free fitness assessment with a personal trainer
Open 5 A.M. to 11 P.M. daily. Group classes include yoga, spinning, and boxing.

━━━━━━━━━━━━━━━━

Review by Daniel Ruiz ★★★★☆ (May 10)
I joined SmartFit on Center Street during its opening month, and overall I'm very happy. The equipment is new, and the yoga classes are excellent. My only complaint is that the locker room gets very crowded in the early morning, since many people come before work. I'd recommend adding more lockers. Also, I still haven't received my free fitness assessment. The front desk says the trainers are fully booked until June.`,q:[
["What is NOT offered to people who join in April?",["A waived sign-up fee","A membership discount","A free fitness assessment","A free yoga mat"],3,"NOT","가입비 면제, 20% 할인, 무료 체력 평가는 광고에 있음. 요가 매트는 없음."],
["What is suggested about Mr. Ruiz?",["He did not pay a sign-up fee.","He teaches yoga classes.","He works at the gym.","He canceled his membership."],0,"연계","후기: 오픈 달(4월)에 가입 + 광고: 4월 가입 시 가입비 면제 → 가입비를 안 냈다."],
["What does Mr. Ruiz complain about?",["The prices","The crowded locker room","The rude staff","The old equipment"],1,"세부","locker room gets very crowded."],
["Why hasn't Mr. Ruiz received his fitness assessment?",["He forgot to book it.","The trainers are unavailable.","The offer ended.","The gym closed."],1,"세부","trainers are fully booked until June."]]},
{t:"이중지문 · 사무실 도색 일정",k:"double",p:`MEMO
To: All staff
From: Facilities
Date: June 2

The office will be repainted over the next two weeks. The work will be done floor by floor, as follows:
- 2nd floor: June 9–10
- 3rd floor: June 11–12
- 4th floor: June 16–17
Employees on the floor being painted will work from home on those days. Please remove all items from your desks the evening before.

━━━━━━━━━━━━━━━━

From: Nora Kim (Marketing, 3rd floor)
To: Facilities
Date: June 5

Hi,
I have an important client meeting in our floor's conference room at 2 P.M. on June 12. Would it be possible to paint the conference room last, or on a different day? The client is flying in from Singapore, so we can't change the meeting date.

Thanks,
Nora`,q:[
["What is the purpose of the memo?",["To announce a painting schedule","To introduce a new remote work policy","To request volunteers","To announce an office move"],0,"주제","will be repainted ~ as follows."],
["What are employees asked to do?",["Paint their own desks","Clear their desks","Move to another floor","Attend a meeting"],1,"세부","remove all items from your desks → clear."],
["When is Ms. Kim's floor scheduled to be painted?",["June 9–10","June 11–12","June 16–17","June 12 only"],1,"연계","이메일: 3층 근무 + 메모: 3층은 6월 11–12일."],
["Why can't Ms. Kim change the meeting date?",["The conference room is booked.","The client is traveling from abroad.","Her manager refused.","A contract must be signed that day."],1,"세부","flying in from Singapore."]]},
{t:"삼중지문 · 가구 주문",k:"triple",p:`Pinewood Office Furniture — Summer Sale (July 1–31)
All desks 25% off. All chairs 15% off.
Free delivery on orders over $500.
Assembly service available for $40 per item.

━━━━━━━━━━━━━━━━

ORDER FORM — Pinewood Office Furniture
Customer: Jae-won Lee, Bluestone Design
Date: July 18

Item                    Qty   Price
Standing desk            2     $600
Office chair (black)     4     $680
Assembly (desks)         2      $80
Total                        $1,360
Delivery: July 25

━━━━━━━━━━━━━━━━

From: Jae-won Lee
To: Pinewood Office Furniture
Date: July 26

The furniture was delivered yesterday as scheduled, and the desks were assembled quickly. However, one of the chairs is gray instead of black. Could you exchange it? I will be out of the office on Friday, so any day except Friday is fine for the exchange.

Jae-won Lee`,q:[
["What is indicated about Pinewood's sale?",["It lasts for one week.","Desks have a larger discount than chairs.","Delivery is always free.","Assembly is free."],1,"세부","책상 25% > 의자 15%."],
["What is suggested about Mr. Lee's order?",["It qualified for free delivery.","It was delivered late.","It was placed before the sale.","It included a table."],0,"연계","주문서 합계 1,360달러 + 광고 500달러 초과 무료 배송."],
["How many items did Mr. Lee pay to have assembled?",["One","Two","Four","Six"],1,"세부","Assembly (desks) 2."],
["What problem does Mr. Lee report?",["A desk was damaged.","A chair is the wrong color.","The delivery was late.","He was charged too much."],1,"세부","gray instead of black."],
["When is Mr. Lee unavailable?",["Monday","Wednesday","Thursday","Friday"],3,"세부","out of the office on Friday."]]},
{t:"삼중지문 · 컨퍼런스 일정 변경",k:"triple",p:`Hanbit Tech Conference — Day 2 (Friday, November 7)
 9:30  Keynote: The Future of AI — Dr. Sun-hee Park (Main Hall)
11:00  Cloud Security Basics — Mark Owens (Room 201)
 1:30  Building Mobile Apps — Yuna Cho (Room 305)
 3:00  Panel: Startups in Asia (Main Hall)

━━━━━━━━━━━━━━━━

From: Conference Office
To: All registered attendees
Date: November 5

Please note one change to Friday's schedule. Because of a scheduling conflict, Mark Owens and Yuna Cho will switch time slots. The rooms stay with the time slots: the 11:00 session will still be in Room 201, and the 1:30 session will still be in Room 305.

━━━━━━━━━━━━━━━━

Text message from Ben (November 7, 10:48 A.M.)
Hi Ahn! Want to meet at the mobile app session? I'll save you a seat.

Reply from Ahn (10:50 A.M.)
Sure, see you there. I'm just leaving the keynote Q&A now.`,q:[
["Who is scheduled to speak in the Main Hall in the morning?",["Dr. Park","Mr. Owens","Ms. Cho","The startup panel"],0,"세부","9:30 Keynote — Dr. Sun-hee Park (Main Hall)."],
["Why was the e-mail sent?",["To announce a schedule change","To cancel the conference","To introduce a new speaker","To request feedback"],0,"주제","one change to Friday's schedule."],
["What time will Mark Owens's session start?",["9:30","11:00","1:30","3:00"],2,"연계","원래 11:00 → Yuna Cho와 시간을 바꿈 → 1:30."],
["Where will Ben most likely wait for Ahn?",["Main Hall","Room 201","Room 305","The lobby"],1,"연계","모바일 앱 세션(Yuna Cho)이 11:00로 옮겨짐 + 11:00 세션 방은 Room 201."],
["What is suggested about Ahn?",["He attended the keynote.","He is a speaker.","He missed the conference.","He works for the conference office."],0,"추론","leaving the keynote Q&A → 기조연설에 참석했다."]]},
{t:"삼중지문 · 자전거 대여",k:"triple",p:`City Bike Rentals — Rates
1 hour: $5 · Half day (4 hours): $15 · Full day: $25
Helmets are free. Child seats: $3 extra.
Groups of 10 or more receive 10% off. Reservations are required for groups.

━━━━━━━━━━━━━━━━

From: Olivia Tran
To: City Bike Rentals
Date: May 3

Hello, I'm organizing a team outing for 12 coworkers on Saturday, May 17. We'd like to rent bikes for a half day, starting at 10 A.M. Two of my coworkers will bring their young children, so we'll also need two child seats. Could you confirm availability?

Olivia Tran

━━━━━━━━━━━━━━━━

From: City Bike Rentals
To: Olivia Tran
Date: May 4

Dear Ms. Tran,
We have bikes available on May 17. Unfortunately, we have only one child seat left that day. You may want to consider our child trailer, which attaches to the back of a bike, for $5. Please reply by May 10 to confirm your reservation.

Mark, City Bike Rentals`,q:[
["What is indicated about helmets?",["They cost $3.","They are free.","They must be reserved.","They are only for children."],1,"세부","Helmets are free."],
["What will Ms. Tran's group most likely receive?",["A group discount","A free child seat","A free trailer","A full-day rental for a half-day price"],0,"연계","12명 + 요금표 ‘10명 이상 10% 할인’."],
["How much does a half-day rental cost per person before any discount?",["$5","$15","$25","$3"],1,"세부","Half day (4 hours): $15."],
["What problem is mentioned in the reply?",["No bikes are available.","Only one child seat is available.","The shop is closed on Saturday.","The price has increased."],1,"세부","only one child seat left."],
["By when should Ms. Tran reply?",["May 3","May 4","May 10","May 17"],2,"세부","reply by May 10."]]}];
