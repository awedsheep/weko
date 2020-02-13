import React, { useState, useCallback, useEffect } from "react";
import NavBar from "./components/views/Navbar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import News from "./routes/News";
import Forum from "./routes/Forum";
import BuySell from "./routes/BuySell";
import InfoTips from "./routes/InfoTips";
import NewsView from "./routes/NewsView";
import ForumView from "./routes/ForumView";
import BuySellView from "./routes/BuySellView";
import InfoTipsView from "./routes/InfoTipsView";
import Banner1 from "./components/Banner1";
import Write from "./routes/Write";
import axios from "axios";
const config = require("./config.json");

const data = {
	news: [
		{
			number: 1,
			tag: "위니펙",
			title: "캐나다 위니펙 한인여러분 화이팅",
			author: "관리자이름이너무길면어떻게될까",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				'<div class="ad_box"><img class="banner" src="some_ad.png" alt="" /><h3>&quot;Hot&quot; Items </h3> <br /> <ul id="items" /></div>',
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				},
				{
					name: "최찬주",
					body: "This has been very useful for my research. Thanks as well!",
					date: "2020-02-27-12:22",
					replies: [
						{
							name: "김현수",
							body: "맞는 말씀이네요 ㅎㅎ",
							date: "2020-03-01-02:01",
							replies: [
								{
									name: "김현수",
									body: "...",
									date: "2020-03-01-02:02",
									replies: [
										{
											name: "최현빈",
											body: "와 영어 잘하시네요.",
											date: "2020-02-27-02:01",
											replies: []
										},
										{
											name: "최현빈",
											body: "와 영어 잘하시네요.",
											date: "2020-02-27-02:01",
											replies: []
										},
										{
											name: "최현빈",
											body: "와 영어 잘하시네요.",
											date: "2020-02-27-02:01",
											replies: []
										}
									]
								}
							]
						},
						{
							name: "최현빈",
							body: "와 영어 잘하시네요.",
							date: "2020-02-27-02:01",
							replies: []
						}
					]
				},
				{
					name: "최현빈",
					body: "와 멋지네요 감사합니다.",
					date: "2020-02-27-02:01",
					replies: []
				}
			]
		},
		{
			number: 2,
			tag: "매나토바",
			title:
				"위니펙 오늘 넘 추우네요 그리고 제목이 너무 길면 어떻게 될까 또 궁금하군요 길어집니다 제목이",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 3,
			tag: "교민사회",
			title: "코딩은 즐거워요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 562345,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 4,
			tag: "교회소식",
			title:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 555555,
			tag: "교민사회",
			title: "크롬 개발자 도구 사용하는 법",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 6,
			tag: "매나토바",
			title: "매니토바 주정부 입장",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 7,
			tag: "캐나다",
			title: "퀘벡 도깨비",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 8,
			tag: "캐나다",
			title: "벤쿠버 오늘 하루",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 9,
			tag: "캐나다",
			title: "미국 출입국 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 10,
			tag: "캐나다",
			title: "캐나다 소식을 알려드립니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: [
						{
							name: "안서영",
							body: "예술적으로 아름답네요!",
							date: "2020-02-25-13:33",
							replies: [
								{
									name: "안서영",
									body: "예술적으로 아름답네요!",
									date: "2020-02-25-13:33",
									replies: [
										{
											name: "안서영",
											body: "예술적으로 아름답네요!",
											date: "2020-02-25-13:33",
											replies: [
												{
													name: "안서영",
													body: "예술적으로 아름답네요!",
													date: "2020-02-25-13:33",
													replies: [
														{
															name: "안서영",
															body: "예술적으로 아름답네요!",
															date: "2020-02-25-13:33",
															replies: [
																{
																	name: "안서영",
																	body: "예술적으로 아름답네요!",
																	date: "2020-02-25-13:33",
																	replies: [
																		{
																			name: "안서영",
																			body: "예술적으로 아름답네요!",
																			date: "2020-02-25-13:33",
																			replies: [
																				{
																					name: "안서영",
																					body: "예술적으로 아름답네요!",
																					date: "2020-02-25-13:33",
																					replies: [
																						{
																							name: "안서영",
																							body: "예술적으로 아름답네요!",
																							date: "2020-02-25-13:33",
																							replies: [
																								{
																									name: "안서영",
																									body:
																										"예술적으로 아름답네요!",
																									date: "2020-02-25-13:33",
																									replies: [
																										{
																											name: "안서영",
																											body:
																												"예술적으로 아름답네요!",
																											date: "2020-02-25-13:33",
																											replies: []
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	],
	forum: [
		{
			number: 1,
			tag: "자유",
			title: "자유",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				},
				{
					name: "최찬주",
					body: "This has been very useful for my research. Thanks as well!",
					date: "2020-02-27-12:22",
					replies: [
						{
							name: "김현수",
							body: "맞는 말씀이네요 ㅎㅎ",
							date: "2020-03-01-02:01",
							replies: [
								{
									name: "김현수",
									body: "...",
									date: "2020-03-01-02:02",
									replies: []
								}
							]
						}
					]
				},
				{
					name: "최현빈",
					body: "와 멋지네요 감사합니다.",
					date: "2020-02-27-02:01",
					replies: []
				}
			]
		},
		{
			number: 2,
			tag: "자유",
			title: "위니펙 오늘 넘 추우네요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 3,
			tag: "자유",
			title: "코딩은 즐거워요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 4,
			tag: "질문",
			title: "이 사이트 언제 만들어졌나요?",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 5,
			tag: "정보",
			title: "내일 케네스턴에서 이거 세일한다던데",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 6,
			tag: "자유",
			title: "자유게시판 사람 많다 ㅋ",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 7,
			tag: "자유",
			title: "퀘벡 도깨비??",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 8,
			tag: "학교",
			title: "벤쿠버 보다 위니펙이 훨씬 춥네여",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 9,
			tag: "여행",
			title: "중국가지 마세요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 10,
			tag: "여행",
			title: "여름에 놀러가기 좋은곳!",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		}
	],
	buysell: [
		{
			number: 1,
			tag: "[삽니다]",
			title: "아재개그 안들은 귀 삽니다",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				},
				{
					name: "최찬주",
					body: "This has been very useful for my research. Thanks as well!",
					date: "2020-02-27-12:22",
					replies: [
						{
							name: "김현수",
							body: "맞는 말씀이네요 ㅎㅎ",
							date: "2020-03-01-02:01",
							replies: [
								{
									name: "김현수",
									body: "...",
									date: "2020-03-01-02:02",
									replies: []
								}
							]
						}
					]
				},
				{
					name: "최현빈",
					body: "와 멋지네요 감사합니다.",
					date: "2020-02-27-02:01",
					replies: []
				}
			]
		},
		{
			number: 2,
			tag: "[팝니다]",
			title: "중고 카라밴 급처",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 3,
			tag: "[팝니다]",
			title: "한국에서 가져온 김취냉장고 팝니다",
			author: "관리자",
			date: "2020-01-02-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 4,
			tag: "[삽니다]",
			title: "안쓰는 삼성 갤럭시 폰 삽니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 5,
			tag: "[팝니다]",
			title: "아이키아 서랍장 판매",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 6,
			tag: "[무료나눔]",
			title: "의자 급처합니다 연락주세요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 7,
			tag: "[팝니다]",
			title: "게임용 컴퓨터 팝니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 8,
			tag: "[중고거래]",
			title: "히터 중고 팝니다 상태양호",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 9,
			tag: "[삽니다]",
			title: "발레티켓 공동구매 하실분 구합니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 10,
			tag: "[팝니다]",
			title: "아이스박스 팝니다 $50",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		}
	],
	info: [
		{
			number: 1,
			tag: "팁",
			title: "오늘의 팁",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				},
				{
					name: "최찬주",
					body: "This has been very useful for my research. Thanks as well!",
					date: "2020-02-27-12:22",
					replies: [
						{
							name: "김현수",
							body: "맞는 말씀이네요 ㅎㅎ",
							date: "2020-03-01-02:01",
							replies: [
								{
									name: "김현수",
									body: "...",
									date: "2020-03-01-02:02",
									replies: []
								}
							]
						}
					]
				},
				{
					name: "최현빈",
					body: "와 멋지네요 감사합니다.",
					date: "2020-02-27-02:01",
					replies: []
				}
			]
		},
		{
			number: 2,
			tag: "팁",
			title: "내일의 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 3,
			tag: "팁",
			title: "영화 볼때 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 4,
			tag: "팁",
			title: "서브웨이 오더시 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 5,
			tag: "정보",
			title: "캐나다 민트 동전 관리국이란?",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 6,
			tag: "정보",
			title: "의자 급처합니다 연락주세요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 7,
			tag: "추천",
			title: "매니토바 캠핑장 추천!",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 8,
			tag: "정보",
			title: "위니펙사람들이 좋아하는 도넛가게 TOP 3",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 9,
			tag: "정보",
			title: "위니펙 현재 한인 수",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 10,
			tag: "팁",
			title: "====팁====",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		}
	]
};

function App() {

	/*
	UPDATE NOTICE:
		1. putPost(newParams) function now auto-generate unique increamental id.
		2. DynamoDB now has current id(index) kept and it updates whenever a new post commits.
		3. getItem(cat, id) is able to get single item by cat and id.
		4. getRecentTen(cat) is NEWLY added. it only retrieve 10 recent items.
	
		**THESE METHODS will benefit as the size of the database grows 
			since it never scans entire table***
	
		5.fetch() method scans entire table and return the whole table.
	*/


	const NewNewsItem = {
		number: 133, //integer
		tag: "[Brandon]", //String
		title: "111111", //String
		author: "1313", //String
		date: "2020-02-10", // String
		view: 433, //integer
		body: "<div>anyString</div>",
		replies: ["123", "12", "22"], //array
		cat: "News"
	};

	// putPost(NewNewsItem);
	async function putPost(newParams) {
		console.log("entered");

		var index = await getItem("News", -1);
		// console.log(index);
		index = index[0].index;
		const NewNewsItem = {
			id: index,
			...newParams
		};
		try {
			await axios.post(
				`${config.api.invokeUrl}/post`,
				NewNewsItem
			);
		} catch (err) {
			console.log(`error adding data: ${err}`);
		}

		const params = {
			cat: "News",
			id: -1,
			changedValue: {
				index: index + 1,
			}
		};
		updateItemsById(params);

	}

	getRecentTen("News");
	//need to compare with scan.... 2querycalls vs scan
	async function getRecentTen(cat) {
		var index = await getItem("News", -1);
		index = index[0].index;
		console.log("current post id: "+index);

		try {
			const res = await axios.get(
				`${config.api.invokeUrl}/post/${cat}/${index}/getrecent`
			);
			console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(`error adding data: ${err}`);
		}

	}

	// getItem("News", "123");
	async function getItem(cat, id) {
		console.log("attempting to start get Item or Items from key: cat, id");

		try {
			const res = await axios.get(
				`${config.api.invokeUrl}/post/${cat}/${id}`
			);
			// console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(`error adding data: ${err}`);
		}

	}

	//아놔 업데이트 기능 구현 너무 어려웠음 ㅠㅠ. 지정된 아이디에 바꾸고 싶은 데이타만 changedValue에 넣어주셈 숫자 상관 없음
	// updateItemsById();
	async function updateItemsById(params) {
		console.log("attempting to start update parameters");
		// const params = {
		// 	cat: "News",
		// 	id: "132", //Unique String
		// 	changedValue: {
		// 		title: "NEW 22 CASTLE", //String
		// 		author: "KJ Choi", //String
		// 		date: "2020-02-10", // String
		// 		body: "<div>SOMESOME</div>",
		// 	}
		// };
		try {
			await axios.patch(
				`${config.api.invokeUrl}/post`,
				params
			);
		} catch (err) {
			console.log(`error adding data: ${err}`);
		}
	}

	//fetch();
	async function fetch() {
		try {
			const res = await axios.get(`${config.api.invokeUrl}/post`);
			console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(`error recieving data: ${err}`);
		}
	}

	//데이타 베이스 배워서 일단 내가 임의로 넣은걸 콘솔로 띄워봤음 (DynamoDB -> Lambda -> API gateWay -> Here)
	// load database and console it
	// ComponentDidMount
	// useEffect(() => {
	// 	async function fetch() {
	// 		try {
	// 			const res = await axios.get(`${config.api.invokeUrl}/post`);
	// 			console.log(res.data);
	// 		} catch (err) {
	// 			console.log(`error recieving data: ${err}`);
	// 		}
	// 	}
	// 	fetch();
	// }, []);

	// console.log(data);

	return (
		<div className="warper_all">
			<BrowserRouter>
				<div className="header">
					<NavBar />
				</div>
				<div className="container_body">
					<Banner1 />
					<Route path="/" exact={true} render={() => <Home data={data} />} />
					<Route
						path="/news"
						exact={true}
						render={() => <News data={data.news} />}
					/>
					<Route
						path="/news/view"
						exact={true}
						render={() => <News data={data.news} />}
					/>
					<Route
						path="/news/view/:id"
						// exact={true}
						render={() => <NewsView data={data.news} />}
					/>
					{/* <Route path="/news/view/:id" component={NewsView} /> */}
					<Route
						path="/forum"
						exact={true}
						render={() => <Forum data={data.forum} />}
					/>
					<Route
						path="/forum/view/:id"
						// exact={true}
						render={() => <ForumView data={data.forum} />}
					/>
					<Route
						path="/buysell"
						exact={true}
						render={() => <BuySell data={data.buysell} />}
					/>
					<Route
						path="/buysell/view/:id"
						// exact={true}
						render={() => <BuySellView data={data.buysell} />}
					/>
					<Route
						path="/info"
						exact={true}
						render={() => <InfoTips data={data.info} />}
					/>
					<Route
						path="/info/view/:id"
						// exact={true}
						render={() => <InfoTipsView data={data.info} />}
					/>
					<Route path="/:cat/write" component={Write} />
				</div>
				<div className="footer">WECO Korean Comunity ©2020 </div>
			</BrowserRouter>
		</div>
	);
}

export default App;

/*
data = {
	news:{

	}
}


 */
