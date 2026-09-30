/* Part 3 conversations. s = script ("M:", "W:", "M2:", "W2:" per line), v = printed graphic, q = [question, options, answer, explanation] */
const P3B=[
{tag:"일반",s:`M: Hi, I'm calling about the apartment on Maple Street that was listed on your Web site. Is it still available?
W: Yes, it is. It's a two-bedroom unit on the third floor, and it's available from the first of next month.
M: Great. Does the rent include utilities? I'm trying to keep my monthly costs down.
W: Water and gas are included, but electricity is separate. Would you like to come and see it this Saturday?
M: Saturday morning works for me. Around ten?`,q:[
["Why is the man calling?",["To ask about an apartment","To pay his rent","To report a repair problem","To cancel an appointment"],0,"첫 대사 I'm calling about the apartment ~ still available?"],
["What does the man ask about?",["The size of the kitchen","Whether utilities are included","The parking situation","The length of the lease"],1,"Does the rent include utilities?"],
["What will the man most likely do on Saturday?",["Sign a contract","Move into the apartment","View a property","Pay a deposit"],2,"come and see it → view a property. 패러프레이징."]]},
{tag:"일반",s:`W: Good afternoon, Bella Cucina. How can I help you?
M: Hi, I have a reservation for eight people tonight at seven, under the name Kevin Walsh. I'd like to change it to ten people if possible.
W: Let me check. I'm sorry, but the table we reserved for you only seats eight. We do have a private room upstairs, though. It has a minimum charge of three hundred dollars.
M: That should be fine. We're celebrating a colleague's promotion, so we'll probably spend more than that anyway.
W: Wonderful. I'll move your reservation to the private room.`,q:[
["Why does the man call?",["To change the number of guests","To cancel a reservation","To order food for delivery","To ask for directions"],0,"8명 → 10명으로 변경 요청."],
["What does the woman mention about the private room?",["It has a view of the river.","It requires a minimum charge.","It is already booked.","It is on the first floor."],1,"minimum charge of three hundred dollars."],
["What is the group celebrating?",["A retirement","A birthday","A job promotion","A company anniversary"],2,"a colleague's promotion."]]},
{tag:"의도",s:`W: Tom, have you finished the slides for tomorrow's presentation to the Hanson Group?
M: Almost. I'm just waiting on the updated sales figures from the finance team.
W: They told me this morning that they'd need another day.
M: Another day? The presentation's at nine tomorrow.
W: I know. Why don't you use last quarter's numbers for now, and we'll mention that the new figures are coming soon?
M: That makes sense. I'll add a note to the slide.`,q:[
["What are the speakers preparing for?",["A client presentation","A job interview","A budget meeting","A product launch"],0,"presentation to the Hanson Group(고객사)."],
["What does the man imply when he says, \"The presentation's at nine tomorrow\"?",["He is looking forward to the event.","There is not enough time to wait.","He needs to change the location.","He will arrive early."],1,"‘하루 더 걸린다’는 말에 대한 반응 → 기다릴 시간이 없다. 의도 문제는 바로 앞 대사가 근거."],
["What does the woman suggest?",["Canceling the presentation","Calling the finance team","Using older data","Asking a colleague for help"],2,"use last quarter's numbers → older data."]]},
{tag:"시각자료",v:`[Floor Directory]
1F  Reception
2F  Human Resources
3F  Accounting
4F  Marketing`,s:`M: Excuse me, I'm here for a job interview at two o'clock. My name is Daniel Kim.
W: Welcome, Mr. Kim. Interviews are being held by the Human Resources team today, but their usual meeting room is being renovated.
M: Oh, so where should I go?
W: They've moved the interviews up one floor, to the accounting department's conference room. Please fill out this visitor form first.`,q:[
["Why is the man visiting the building?",["To deliver a package","To attend a job interview","To meet a client","To repair equipment"],1,"I'm here for a job interview."],
["Look at the graphic. Which floor will the man go to?",["1F","2F","3F","4F"],2,"인사팀(2층)에서 한 층 위, 회계팀 회의실 → 3층. 시각자료 문제는 보기에 없는 쪽 정보(부서 이름)가 들립니다."],
["What does the woman ask the man to do?",["Show his ID card","Wait in the lobby","Complete a form","Call the HR team"],2,"fill out this visitor form → complete a form."]]},
{tag:"3인",s:`W: Hi, Raj. Hi, Luis. Did you two get a chance to look at the new expense reporting software?
M: I did. It's much faster than the old system. I submitted my travel expenses in about five minutes.
M2: I haven't tried it yet. I've been out of the office visiting clients all week.
W: Well, the old system shuts down on Friday, so everyone needs to switch by then.
M2: In that case, could one of you show me how it works this afternoon?
M: Sure, I'm free after three.`,q:[
["What are the speakers mainly discussing?",["A new software program","A business trip","A client meeting","An office move"],0,"new expense reporting software."],
["Why hasn't one of the men used the system?",["He was on vacation.","He has been visiting clients.","His computer is broken.","He forgot his password."],1,"out of the office visiting clients all week."],
["What will happen on Friday?",["A training session will be held.","Travel expenses will be paid.","The old system will stop working.","A new employee will start."],2,"shuts down → stop working."]]},
{tag:"일반",s:`M: Hello, this is Greenway Logistics. I'm calling about a package for Ms. Laura Chen. We tried to deliver it this morning, but no one was available to sign for it.
W: This is Laura. Sorry, I was at a dental appointment. Can you try again tomorrow?
M: I'm afraid our drivers are fully booked tomorrow. But you can pick it up at our service center on Fifth Avenue. It's open until eight P.M.
W: That's actually near my office. I'll stop by after work today.
M: Great. Just bring a photo ID with you.`,q:[
["Who most likely is the man?",["A dentist","A delivery company employee","A store manager","A taxi driver"],1,"Greenway Logistics + 배달 시도."],
["Why was the woman unavailable this morning?",["She was at a medical appointment.","She was in a meeting.","She was traveling.","She was working from home."],0,"dental appointment → medical appointment."],
["What does the man remind the woman to bring?",["A receipt","A tracking number","Identification","A payment card"],2,"photo ID → identification."]]},
{tag:"의도",s:`W: Excuse me. I bought this printer here last week, but it keeps jamming. I'd like to exchange it.
M: I'm sorry to hear that. Do you have your receipt?
W: Here it is. I also have the original box.
M: Thanks. Unfortunately, we're out of that model at the moment. We do have a newer version, but it's forty dollars more.
W: Well, I use it every day for my business.
M: In that case, I'll give you the new model at no extra charge, since you had trouble with the first one.`,q:[
["What problem does the woman report?",["A printer is not working properly.","A product was delivered late.","She was charged twice.","She lost her receipt."],0,"keeps jamming → not working properly."],
["Why does the woman say, \"I use it every day for my business\"?",["To explain that she cannot wait long","To ask for a business discount","To complain about the store","To decline the offer"],0,"재고가 없다는 말 바로 뒤 → 매일 써야 해서 기다릴 수 없다는 뜻. 그래서 직원이 새 모델을 추가 비용 없이 제안합니다."],
["What does the man offer to do?",["Repair the printer","Provide a newer model for free","Order the same model","Give a full refund"],1,"at no extra charge → for free."]]},
{tag:"일반",s:`W: Mark, the registration numbers for the marketing conference are much higher than we expected. We've already got four hundred people signed up.
M: That's great news, but the ballroom we booked only holds three hundred and fifty.
W: I know. I called the hotel, and they can give us the exhibition hall instead. It's bigger, but it costs about twenty percent more.
M: I think it's worth it. Let me get approval from the director before we confirm.`,q:[
["What is the problem?",["A speaker canceled.","A room is too small.","The hotel is fully booked.","Registration is low."],1,"400명 등록인데 볼룸은 350명 수용."],
["What is mentioned about the exhibition hall?",["It is more expensive.","It is unavailable.","It is outdoors.","It has no audio equipment."],0,"costs about twenty percent more."],
["What will the man do next?",["Contact the hotel","Cancel some registrations","Ask a supervisor for approval","Send out invitations"],2,"approval from the director → supervisor."]]},
{tag:"시각자료",v:`[Train Schedule — to Daejeon]
10:05  KTX 101
10:40  KTX 103
11:15  KTX 105
11:50  KTX 107`,s:`M: Hi, I'd like a ticket to Daejeon on the next train, please.
W: The ten-oh-five train just left. The next one is at ten-forty, but it's sold out.
M: Oh no. I have a meeting in Daejeon at one o'clock. What about the one after that?
W: There are still seats available on that one. You'll arrive in plenty of time.
M: I'll take it. Could I get a window seat?`,q:[
["Where most likely are the speakers?",["At an airport","At a train station","At a bus terminal","At a travel agency"],1,"기차표 구매."],
["Look at the graphic. Which train will the man take?",["KTX 101","KTX 103","KTX 105","KTX 107"],2,"10:40(103)은 매진 → 그다음 기차 = 11:15 KTX 105."],
["What does the man request?",["A window seat","A refund","A discount","A later meeting"],0,"Could I get a window seat?"]]},
{tag:"일반",s:`W: Good morning, Dr. Park's office. How can I help you?
M: Hi, this is James Morrison. I have an appointment on Thursday at two, but something came up at work. Could I move it to Friday?
W: Let me see. Dr. Park is fully booked on Friday, but Dr. Lee has an opening at eleven.
M: That's fine. I just need a regular checkup.
W: All right. I've changed it. Please arrive fifteen minutes early to update your insurance information.`,q:[
["Why is the man calling?",["To reschedule an appointment","To ask about a bill","To request a prescription","To find a new doctor"],0,"move it to Friday → reschedule."],
["Who will the man see on Friday?",["Dr. Park","Dr. Lee","A nurse","An insurance agent"],1,"Dr. Park은 금요일 예약이 꽉 참 → Dr. Lee."],
["Why should the man arrive early?",["To fill out a survey","To update some information","To pay a fee","To take a test"],1,"update your insurance information."]]},
{tag:"의도",s:`M: Sandra, the client just e-mailed. They want the brochure design finished by Wednesday instead of Friday.
W: Wednesday? We still haven't gotten the photos from the photographer.
M: I know. I'll call him right away and ask if he can send them tonight.
W: If he can, I can work on the layout tomorrow. Also, should we ask Peter to help? He finished his project early.
M: Good idea. I'll let him know.`,q:[
["What does the client want?",["A lower price","An earlier deadline","More photographs","A different design"],1,"금요일 → 수요일로 앞당김."],
["What does the woman imply when she says, \"We still haven't gotten the photos from the photographer\"?",["The photographer is unreliable.","The new deadline may be difficult to meet.","She wants to hire a new photographer.","The photos were not good."],1,"마감이 당겨졌는데 사진이 아직 없다 → 새 마감을 맞추기 어렵다."],
["What does the woman suggest?",["Asking a colleague for help","Extending the deadline","Calling the client","Using old photos"],0,"should we ask Peter to help?"]]},
{tag:"일반",s:`W: Hi, I'm interested in joining your fitness center. What kinds of memberships do you offer?
M: We have monthly and yearly plans. The yearly plan works out cheaper. It's like getting two months free.
W: That sounds good. Do members have access to the swimming pool?
M: Yes, the pool is included in both plans. And this week, new members also get a free session with a personal trainer.
W: Great. I'll sign up for the yearly plan, then.`,q:[
["Where does the man most likely work?",["At a fitness center","At a hotel","At a sports store","At a hospital"],0,"joining your fitness center."],
["What is the advantage of the yearly plan?",["It includes a locker.","It is less expensive overall.","It allows guest visits.","It can be canceled anytime."],1,"works out cheaper → less expensive."],
["What do new members receive this week?",["A free T-shirt","A discount on drinks","A free training session","A pool pass"],2,"a free session with a personal trainer."]]},
{tag:"3인",s:`M: Thanks for meeting with us, Ms. Grant. My colleague Aisha and I are from the facilities department.
W2: We're planning to replace the carpets on your floor next week, and we wanted to make sure it won't disrupt your team too much.
W: I appreciate that. Next Tuesday we have a big client visit, though. Could the work start on Wednesday instead?
M: That shouldn't be a problem. The work will take about two days.
W2: We'll also need everyone to move personal items off the floor before we start.`,q:[
["What will the facilities department do?",["Paint the walls","Replace carpets","Install new desks","Move the team to another floor"],1,"replace the carpets."],
["Why does Ms. Grant ask to change the schedule?",["A client will visit.","Her team is on vacation.","The budget is not approved.","She is moving offices."],0,"a big client visit."],
["What are employees asked to do?",["Work from home","Clear items from the floor","Sign a form","Attend a meeting"],1,"move personal items off the floor → clear items."]]},
{tag:"일반",s:`W: Hi, I ordered a sofa from your Web site two weeks ago, and it still hasn't arrived. My order number is 4-5-7-1.
M: Let me look that up. I see the problem. The sofa was shipped to our old warehouse by mistake. I apologize.
W: So when can I expect it?
M: We'll send it out tomorrow, and it should arrive by Friday. And to make up for the delay, I'll refund your delivery fee.`,q:[
["What is the woman calling about?",["A damaged product","A late delivery","A wrong color","A billing error"],1,"2주가 지나도 도착하지 않음."],
["What caused the problem?",["An item was out of stock.","A shipping error was made.","The woman gave the wrong address.","A truck broke down."],1,"shipped to our old warehouse by mistake → shipping error."],
["What does the man offer?",["A free gift","A discount on a future order","A refund of a fee","An upgrade to a better model"],2,"refund your delivery fee."]]},
{tag:"의도",s:`M: Hi, Jenny. Are you going to the training session on the new accounting software this afternoon?
W: I was planning to, but my manager just asked me to finish a report by five.
M: The session will be recorded, you know.
W: Oh, really? Where can I find it?
M: It'll be posted on the company intranet by tomorrow morning.
W: Perfect. I'll watch it then.`,q:[
["What are the speakers discussing?",["A training session","A company party","A client meeting","A software purchase"],0,"training session on the new accounting software."],
["Why does the man say, \"The session will be recorded\"?",["To complain about the session","To suggest that the woman can watch it later","To ask the woman to record it","To explain why the session was canceled"],1,"못 간다는 말 바로 뒤 → 나중에 녹화본을 보면 된다는 뜻."],
["When will the woman most likely watch the session?",["This afternoon","This evening","Tomorrow","Next week"],2,"posted by tomorrow morning → I'll watch it then."]]},
{tag:"시각자료",v:`[Catering Menu — per person]
Sandwich Platter  $12 (cold)
Pasta Buffet      $18 (hot)
Grilled Chicken   $22 (hot)
Steak Dinner      $30 (hot)`,s:`W: Hi, I'm organizing a lunch for our staff appreciation event, for about forty people. I was looking at your catering menu.
M: Great. Did you have something in mind?
W: The steak dinner looks nice, but our budget is only twenty dollars per person. And we'd like hot food.
M: Then there's only one option I can recommend. It's also easy to serve.
W: Sounds good. Let's go with that.
M: Wonderful. I'll just need a fifty percent deposit to confirm the order.`,q:[
["What kind of event is the woman planning?",["A staff appreciation lunch","A wedding reception","A product launch","A retirement dinner"],0,"lunch for our staff appreciation event."],
["Look at the graphic. Which option will the woman most likely order?",["Sandwich Platter","Pasta Buffet","Grilled Chicken","Steak Dinner"],1,"1인 20달러 이하 + 따뜻한 음식 → Pasta Buffet($18)."],
["What does the man require?",["A signed contract","A partial payment","A list of guests","A menu tasting"],1,"fifty percent deposit → partial payment."]]},
{tag:"일반",s:`M: Welcome to Harbor View Hotel. Are you checking in?
W: Yes, I have a reservation under Maria Lopez for three nights.
M: Let me see. Yes, Ms. Lopez. You're in room 812. Breakfast is served from six-thirty to ten on the second floor.
W: Thank you. Also, I need to print some documents for a meeting tomorrow. Is there a business center?
M: Yes, it's next to the lobby, and it's open twenty-four hours. You'll need your room key to get in.`,q:[
["Where does the conversation take place?",["At a hotel","At an airport","At a restaurant","At a conference center"],0,"Welcome to Harbor View Hotel."],
["What does the woman want to do?",["Book a tour","Print some documents","Change her room","Order breakfast"],1,"I need to print some documents."],
["What does the man say about the business center?",["It is on the second floor.","It closes at ten.","It requires a room key for entry.","It charges a fee."],2,"You'll need your room key to get in."]]},
{tag:"3인",s:`W: OK, let's start. The main item today is the new store we're opening in Busan in March.
M: I've been looking at possible locations. There's a space in a shopping mall downtown, and another on a busy street near the university.
M2: The mall has more foot traffic, but the rent is almost double.
W: Hmm. Our main customers are students, aren't they?
M: That's right. Around seventy percent.
W: Then the university location makes more sense. Let's arrange a visit next week.`,q:[
["What are the speakers discussing?",["Hiring new staff","Opening a new store","Changing suppliers","Renovating an office"],1,"the new store we're opening in Busan."],
["What is said about the shopping mall location?",["It is near the university.","It is too small.","It is more expensive.","It is not available until April."],2,"rent is almost double → more expensive."],
["What will the speakers probably do next week?",["Sign a lease","Visit a location","Meet with students","Hold a sale"],1,"arrange a visit next week."]]},
{tag:"의도",s:`W: Kevin, I heard you're taking over the Tokyo account from Ms. Hara.
M: That's right. She's moving to the London office next month. I'm a little nervous, though. It's our biggest client.
W: You worked with them on the software project last year, didn't you?
M: Just for a couple of months.
W: Well, you did a great job. And Ms. Hara will be here for two more weeks to help with the transition.`,q:[
["What is the man going to do?",["Move to London","Take over a client account","Start a software project","Hire a new assistant"],1,"taking over the Tokyo account."],
["What does the man imply when he says, \"Just for a couple of months\"?",["He has limited experience with the client.","The project was successful.","He wants a longer contract.","He was too busy."],0,"‘함께 일했지?’에 ‘몇 달뿐이었다’ → 경험이 많지 않다는 뜻."],
["According to the woman, what will Ms. Hara do?",["Train new employees","Help during the transition","Travel to Tokyo","Lead a new project"],1,"help with the transition."]]},
{tag:"일반",s:`M: Hi, I'm looking for a laptop for my daughter. She's starting university next month.
W: We have several models on sale this week. What will she mainly use it for?
M: Mostly writing papers and doing research online. But she says it needs to be light, because she'll carry it around campus.
W: Then I'd recommend this one. It weighs just over one kilogram, and the battery lasts about fifteen hours.
M: That looks perfect. Does it come with a warranty?
W: Yes, one year. You can extend it to three years for an extra fifty dollars.`,q:[
["Who is the man buying a laptop for?",["His son","His daughter","His coworker","Himself"],1,"a laptop for my daughter."],
["What feature is important to the man's daughter?",["Low weight","A large screen","Gaming performance","A low price"],0,"it needs to be light."],
["According to the woman, what costs extra?",["A carrying case","Software installation","A longer warranty","Home delivery"],2,"extend it to three years for an extra fifty dollars."]]},
{tag:"시각자료",v:`[Order #2291 — Northfield Consulting]
Printer paper      20 boxes
Ink cartridges     10
Sticky notes       30 packs
Folders            50`,s:`W: Hi, this is Emma from Northfield Consulting. I'm calling about the order we received this morning.
M: Yes, Ms. Clark. Was there a problem?
W: Everything arrived except the ink cartridges. There weren't any in the boxes.
M: I'm very sorry about that. I'll have them sent by courier this afternoon.
W: Thank you. We really need them for a big printing job tomorrow.`,q:[
["Why is the woman calling?",["To place a new order","To report a missing item","To ask for a discount","To change a delivery address"],1,"잉크 카트리지만 오지 않음."],
["Look at the graphic. How many of the missing items were ordered?",["20","10","30","50"],1,"빠진 품목은 잉크 카트리지 → 표에서 10."],
["What will the man do this afternoon?",["Visit the woman's office","Send the items by courier","Issue a refund","Call the manufacturer"],1,"sent by courier this afternoon."]]},
{tag:"일반",s:`W: Hello, I'd like to open a business account. I just started a small bakery.
M: Congratulations. For a business account, we'll need your business registration certificate and a photo ID.
W: I have my ID, but I didn't bring the registration certificate.
M: No problem. You can upload it through our mobile app later today, and we'll open the account once we receive it.
W: That's convenient. I'll do that tonight.`,q:[
["Where most likely are the speakers?",["At a bank","At a bakery","At a government office","At a print shop"],0,"open a business account → 은행."],
["What does the woman say she forgot?",["Her photo ID","Her registration certificate","Her phone","Her application form"],1,"I didn't bring the registration certificate."],
["How will the woman send the document?",["By fax","By mail","Through a mobile app","In person tomorrow"],2,"upload it through our mobile app."]]},
{tag:"의도",s:`M: Hi, Olivia. The new coffee machine for the break room arrived this morning.
W: Oh, great. Did you set it up already?
M: I tried, but the instructions are only in German.
W: Hmm, Tobias in the design team is from Berlin.
M: Oh, good idea. I'll ask him to take a look at lunch.`,q:[
["What arrived this morning?",["A printer","A coffee machine","A refrigerator","Some furniture"],1,"The new coffee machine."],
["Why does the woman say, \"Tobias in the design team is from Berlin\"?",["To introduce a new employee","To suggest someone who can help","To explain a delay","To recommend a restaurant"],1,"설명서가 독일어뿐 → 베를린 출신 동료가 도와줄 수 있다."],
["When will the man talk to Tobias?",["This morning","At lunchtime","After work","Tomorrow"],1,"take a look at lunch."]]},
{tag:"일반",s:`W: Hi, I'm calling from Lakeside Community Center. We're organizing a charity run in June, and we'd like to know if your company would be interested in sponsoring it.
M: Thanks for thinking of us. What would sponsorship involve?
W: Sponsors contribute five hundred dollars, and in return, your company logo will be printed on all the runners' T-shirts.
M: That sounds like a good opportunity. I need to check with our marketing director, though. Could you e-mail me the details?
W: Of course. I'll send them right away.`,q:[
["What is the purpose of the call?",["To request sponsorship","To register for a race","To order T-shirts","To book a room"],0,"interested in sponsoring it."],
["What will sponsors receive?",["Free tickets","Their logo on T-shirts","A newspaper ad","A discount"],1,"logo will be printed on all the runners' T-shirts."],
["What does the man ask the woman to do?",["Call back later","Send information by e-mail","Meet his director","Lower the price"],1,"Could you e-mail me the details?"]]}];

/* Part 4 talks. s = script (one speaker), v = printed graphic */
const P4B=[
{tag:"일반",s:`Attention, passengers on Sky Air Flight 327 to Singapore. Due to a mechanical issue, the aircraft needs an additional inspection, and departure has been delayed by approximately two hours. The new departure time is 4:15 P.M. We apologize for the inconvenience. As a thank-you for your patience, meal vouchers are available at the service counter next to Gate 12. Please keep your boarding pass with you, as you will need to show it to receive a voucher.`,q:[
["Where is the announcement being made?",["At an airport","On a train","At a hotel","At a bus station"],0,"Flight, Gate 12 → 공항."],
["Why has the flight been delayed?",["Bad weather","A mechanical problem","A crew shortage","Heavy traffic"],1,"Due to a mechanical issue."],
["What must listeners show to receive a voucher?",["A passport","A boarding pass","A receipt","A membership card"],1,"you will need to show it(boarding pass)."]]},
{tag:"일반",s:`Hi, this is Rachel from Evergreen Dental Clinic, calling for Mr. Thomas Hill. I'm calling to remind you of your appointment with Dr. Carter tomorrow at ten A.M. Please note that our clinic has moved to a new location. We're now on the fourth floor of the Lincoln Building, right across from City Hall. Parking is available in the building's underground garage. If you need to reschedule, please call us back at 555-0147 before five o'clock today.`,q:[
["What is the purpose of the call?",["To confirm a payment","To remind the listener of an appointment","To cancel a treatment","To introduce a new dentist"],1,"calling to remind you of your appointment."],
["What does the speaker say about the clinic?",["It has changed location.","It will close early.","It has new hours.","It is hiring staff."],0,"has moved to a new location."],
["What should the listener do before five o'clock?",["Pay his bill","Call if he needs to change the appointment","Send some forms","Pick up a prescription"],1,"If you need to reschedule, please call us back."]]},
{tag:"의도",s:`Before we finish, I want to talk about last month's customer survey. Overall, customers are happy with our products, but many said our delivery times are too long. On average, orders take six days to arrive. Our main competitor delivers in two. So starting next month, we're partnering with a new shipping company that guarantees three-day delivery. I know this will increase our costs a little. But we can't afford to lose customers. I'll send everyone the details this afternoon.`,q:[
["What problem did the survey reveal?",["Poor product quality","Slow deliveries","High prices","Unfriendly staff"],1,"delivery times are too long."],
["What will the company do next month?",["Hire more drivers","Open a warehouse","Work with a new shipping company","Raise prices"],2,"partnering with a new shipping company."],
["What does the speaker mean when she says, \"we can't afford to lose customers\"?",["The company has financial problems.","The extra cost is justified.","Customers should pay more.","Staff should work harder."],1,"바로 앞 ‘비용이 조금 늘어난다’ + ‘고객을 잃을 수는 없다’ → 추가 비용을 감수할 만하다."]]},
{tag:"일반",s:`Is your home ready for winter? At Warm Home Heating, our certified technicians will inspect your heating system and make sure it's running safely and efficiently. For the month of October only, our standard inspection is just forty-nine dollars. That's half the regular price. And if any repairs are needed, we'll give you ten percent off parts. Visit our Web site or call us today to book an appointment. Weekend appointments fill up fast, so don't wait!`,q:[
["What service is being advertised?",["House cleaning","Heating system inspection","Window installation","Roof repair"],1,"inspect your heating system."],
["What is special about October?",["Inspections are half price.","Parts are free.","Weekend service is available.","New technicians are joining."],0,"half the regular price."],
["Why should listeners book soon?",["The offer ends this week.","Weekend slots are limited.","Prices will rise.","Technicians are leaving."],1,"Weekend appointments fill up fast."]]},
{tag:"일반",s:`Good morning, everyone, and welcome to the Riverside Chocolate Factory tour. My name is Ben, and I'll be your guide today. The tour will last about an hour. We'll start in the room where cocoa beans are roasted, and then see how our famous chocolate bars are made. Please note that taking photos is not allowed inside the production area. At the end of the tour, you'll get to taste three of our newest flavors in the gift shop. Now, please put on the hairnets that are in the basket by the door.`,q:[
["Who is the speaker?",["A factory owner","A tour guide","A chef","A store clerk"],1,"I'll be your guide today."],
["What are listeners not allowed to do?",["Eat chocolate","Take pictures in some areas","Enter the gift shop","Ask questions"],1,"taking photos is not allowed inside the production area."],
["What will listeners do next?",["Watch a video","Put on hairnets","Buy tickets","Taste chocolate"],1,"마지막 문장 put on the hairnets. 다음 행동은 끝부분이 근거."]]},
{tag:"시각자료",v:`[Weekly Forecast]
Mon  Sunny
Tue  Cloudy
Wed  Rain
Thu  Sunny
Fri  Windy`,s:`Hello, everyone. I'm calling about our company picnic at Lakeside Park. It was originally planned for Wednesday, but as you may have heard, heavy rain is expected that day. So we've decided to move the picnic to the next sunny day on the forecast. Lunch will be provided, but please bring your own drinks. Also, if you'd like to join the volleyball tournament, sign up with Mika in Human Resources by Monday.`,q:[
["What is the message mainly about?",["A new office","A change to an event","A sports team","A cafeteria menu"],1,"피크닉 날짜 변경."],
["Look at the graphic. On which day will the picnic be held?",["Monday","Tuesday","Thursday","Friday"],2,"수요일 비 → 그다음 맑은 날 = 목요일."],
["What are listeners asked to bring?",["Their own drinks","Lunch","Sports equipment","A blanket"],0,"please bring your own drinks."]]},
{tag:"일반",s:`In local news, the city council has approved a plan to build a new public library in the Westside district. The three-story building will include a children's reading room, a computer lab, and a rooftop garden. Construction is expected to begin in April and finish by the end of next year. Council member Julia Novak said the project was a response to requests from residents, who currently have to travel more than thirty minutes to reach the nearest library. Stay tuned for the weather after this short break.`,q:[
["What is the report mainly about?",["A new library","A school opening","A road repair","A local election"],0,"build a new public library."],
["According to the report, why was the project approved?",["To attract tourists","To respond to residents' requests","To replace an old building","To create jobs"],1,"a response to requests from residents."],
["What will listeners probably hear next?",["An interview","A weather report","Sports news","A traffic update"],1,"Stay tuned for the weather after this short break."]]},
{tag:"의도",s:`OK, everyone, one more thing before you go. As you know, our new inventory software goes live on Monday. Training sessions are available this Thursday and Friday afternoon. I strongly recommend you attend one. The system is quite different from what we use now. Last time we changed systems, it took us two weeks to catch up on orders. Please sign up on the sheet by my office door.`,q:[
["What will happen on Monday?",["A new system will start.","An inventory check will be done.","A new manager will arrive.","The office will close."],0,"goes live on Monday."],
["Why does the speaker say, \"Last time we changed systems, it took us two weeks to catch up on orders\"?",["To praise the staff","To stress the importance of training","To complain about the software company","To explain a delay in orders"],1,"교육 참석을 강하게 권한 직후 → 교육이 중요하다는 걸 강조."],
["How can listeners sign up?",["By e-mail","On a sheet near the speaker's office","Online","By calling HR"],1,"sign up on the sheet by my office door."]]},
{tag:"일반",s:`Welcome back to Business Today. My guest this morning is Hannah Seo, the founder of GreenCup, a company that makes reusable coffee cups from recycled plastic. Hannah started the business in her kitchen five years ago, and today GreenCup products are sold in over two thousand stores across Asia. She's here to talk about how small companies can compete with larger brands. After the interview, we'll take your calls, so if you have a question for Hannah, call us now.`,q:[
["What does Hannah Seo's company make?",["Coffee machines","Reusable cups","Kitchen furniture","Plastic bottles"],1,"reusable coffee cups."],
["What does the speaker say about the company?",["It is based in Europe.","It started in a kitchen.","It was sold recently.","It has two stores."],1,"started the business in her kitchen."],
["What are listeners invited to do?",["Visit a store","Call in with questions","Download an app","Enter a contest"],1,"if you have a question for Hannah, call us now."]]},
{tag:"시각자료",v:`[Conference Schedule — Room A]
 9:00  Opening Remarks
10:00  Digital Marketing Trends
11:00  Social Media Strategy
 1:00  Customer Data Analysis`,s:`Good morning, and welcome to the Regional Marketing Conference. Before we begin, I have an announcement. Unfortunately, the speaker for the ten o'clock session, Mr. Burke, missed his flight and won't arrive until this afternoon. So his session will switch places with the one o'clock session. Everything else will stay the same. Also, lunch will be served in the main hall at noon. Please remember to wear your name badges at all times.`,q:[
["What problem does the speaker mention?",["A room is unavailable.","A speaker is delayed.","Lunch is canceled.","Badges were not printed."],1,"missed his flight and won't arrive until this afternoon."],
["Look at the graphic. What session will now be held at ten o'clock?",["Opening Remarks","Digital Marketing Trends","Social Media Strategy","Customer Data Analysis"],3,"10시 세션과 1시 세션이 자리를 바꿈 → 10시에는 Customer Data Analysis."],
["What are listeners reminded to do?",["Turn off their phones","Wear their name badges","Fill out a survey","Register for lunch"],1,"wear your name badges at all times."]]},
{tag:"일반",s:`Hi, Amanda, it's Victor from the accounting team. I'm looking at the expense report you submitted for your trip to Chicago. Everything looks fine, except I couldn't find a receipt for the taxi from the airport to your hotel. Company policy requires receipts for all expenses over twenty dollars. If you have it, could you scan it and e-mail it to me by Wednesday? That way, your reimbursement can be included in this month's payroll.`,q:[
["Why is the speaker calling?",["To book a taxi","To request a missing document","To approve a trip","To explain a new policy"],1,"택시 영수증이 없음 → 보내 달라는 요청."],
["According to the speaker, what does company policy require?",["Receipts for expenses over a certain amount","Manager approval for all trips","Using a company taxi service","Reports within one week"],0,"receipts for all expenses over twenty dollars."],
["What will happen if the listener responds by Wednesday?",["She will be paid this month.","She will get a bonus.","Her trip will be extended.","She will receive a new card."],0,"included in this month's payroll."]]},
{tag:"의도",s:`Thank you all for coming to today's workshop on time management. I know many of you had to rearrange your schedules to be here. Let me start with a question. How many of you checked your e-mail before nine this morning? Almost everyone. Well, research shows that checking e-mail first thing can reduce your productivity for the rest of the day. Today, I'll share five simple habits that will help you get more done. Please take out the worksheet in your folder.`,q:[
["What is the topic of the workshop?",["Writing e-mails","Time management","Customer service","Public speaking"],1,"workshop on time management."],
["What does the speaker imply when she says, \"Almost everyone\"?",["Few people follow good habits.","Most listeners share a common habit.","The room is too small.","People arrived late."],1,"손을 든 사람이 거의 전부 → 대부분이 같은 습관을 갖고 있다."],
["What are listeners asked to do next?",["Check their e-mail","Take out a worksheet","Introduce themselves","Form groups"],1,"take out the worksheet in your folder."]]},
{tag:"일반",s:`Attention, shoppers. Thank you for shopping at FreshMart. For the next thirty minutes only, all bakery items are buy one, get one free. That includes our freshly baked bread, muffins, and cakes. Also, don't forget that our store will be closing early today, at six P.M., for our annual inventory count. We'll return to regular hours tomorrow at eight A.M. Thank you, and enjoy your shopping.`,q:[
["Where is the announcement being made?",["At a bakery school","At a supermarket","At a restaurant","At a warehouse"],1,"shoppers, FreshMart → 마트."],
["What special offer is mentioned?",["Free delivery","A discount on drinks","Two bakery items for the price of one","A free membership"],2,"buy one, get one free."],
["Why will the store close early today?",["For a holiday","For repairs","To count inventory","For staff training"],2,"for our annual inventory count."]]},
{tag:"일반",s:`Hello, this is Jin Park from Summit Printing. I'm calling about the five hundred event programs you ordered for your conference on the fifteenth. We've run into a small problem. The paper you selected is out of stock at our supplier. We can use a similar paper that's slightly thicker, at no extra cost, and still finish the order on time. Or we can wait for the original paper, but that would delay delivery by a week. Please let me know which you prefer by tomorrow.`,q:[
["What did the listener order?",["Business cards","Event programs","Posters","Invitations"],1,"five hundred event programs."],
["What problem does the speaker mention?",["A design error","A material is unavailable","A price increase","A machine breakdown"],1,"The paper is out of stock → material unavailable."],
["What does the speaker ask the listener to do?",["Send a new design","Pay a deposit","Choose an option","Pick up the order"],2,"let me know which you prefer."]]},
{tag:"시각자료",v:`[Monthly Sales by Department]
Electronics      $85,000
Home Goods       $42,000
Clothing         $67,000
Sporting Goods   $31,000`,s:`Let's look at last month's sales figures. As you can see, electronics were our top seller again, thanks to the new tablet models. However, I'm concerned about the department with the lowest sales. We think the problem is its location at the back of the store, where customers don't notice it. So next week, we'll move it closer to the main entrance. I'd like each department manager to send me their display ideas by Friday.`,q:[
["What does the speaker say about electronics?",["Its sales decreased.","It sold the most.","It will be moved.","It needs more staff."],1,"top seller again."],
["Look at the graphic. Which department will be moved?",["Electronics","Home Goods","Clothing","Sporting Goods"],3,"매출이 가장 낮은 부서 → Sporting Goods($31,000)."],
["What are department managers asked to do?",["Reduce prices","Submit display ideas","Hire staff","Count inventory"],1,"send me their display ideas."]]},
{tag:"일반",s:`Good evening, everyone. It's my great pleasure to present this year's Employee of the Year award to Ms. Grace Lim from our customer support team. Grace joined us just three years ago, but she has already made a huge impact. Last year, she designed a new training program for support staff, which cut customer waiting times in half. Her coworkers describe her as patient, creative, and always willing to help. Grace, please come up to the stage to accept your award.`,q:[
["What is the purpose of the speech?",["To introduce a new manager","To present an award","To announce a retirement","To welcome new employees"],1,"present this year's Employee of the Year award."],
["What did Ms. Lim do last year?",["She opened a new office.","She created a training program.","She hired support staff.","She wrote a book."],1,"designed → created."],
["What was the result of her work?",["Sales doubled.","Waiting times were reduced.","Costs increased.","More staff were hired."],1,"cut customer waiting times in half → reduced."]]},
{tag:"일반",s:`This is Traffic Watch on KBR Radio. If you're heading downtown this morning, expect delays on Harbor Bridge, where one lane is closed for emergency repairs. Traffic is backed up for about three kilometers. Drivers are advised to take the Central Tunnel instead. The repairs are expected to last until at least noon. And a reminder: the city marathon is this Sunday, so several streets near City Park will be closed from six A.M. to two P.M.`,q:[
["What is causing delays on Harbor Bridge?",["An accident","A lane closure for repairs","A parade","Bad weather"],1,"one lane is closed for emergency repairs."],
["What are drivers advised to do?",["Use a different route","Take public transportation","Leave home early","Drive slowly"],0,"take the Central Tunnel instead → different route."],
["What will happen on Sunday?",["A bridge will reopen.","A marathon will take place.","A new tunnel will open.","A park will close permanently."],1,"the city marathon is this Sunday."]]},
{tag:"의도",s:`Hi, team. I have some good news. Our proposal to redesign the Harper Hotel's Web site was accepted this morning. This is the largest contract we've ever won. The client wants the new site launched by the end of June, so we'll need to move quickly. I've asked two freelance designers to join us for the next three months. Oh, and remember the late nights we had on the Mason project? Well, I've already ordered dinner for tonight.`,q:[
["What news does the speaker share?",["A contract was won.","A client complained.","A project was canceled.","A new office opened."],0,"proposal was accepted → contract won."],
["Why has the speaker hired freelancers?",["To reduce costs","To meet a tight deadline","To replace staff","To train employees"],1,"we'll need to move quickly → 빠듯한 마감."],
["What does the speaker imply when she says, \"I've already ordered dinner for tonight\"?",["The team will celebrate at a restaurant.","The team will work late.","She forgot to eat lunch.","The client is visiting."],1,"‘지난번 야근 기억나죠?’ 바로 뒤 → 오늘도 늦게까지 일한다는 뜻."]]}];
