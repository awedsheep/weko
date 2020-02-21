import { createGlobalState } from "react-hooks-global-state";
const initialState = {
	news: {
		num: 10,
		items: [
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
		]
    },
    forum:
};
const { setGlobalState, useGlobalState } = createGlobalState(initialState);
export const setNavName = s => {
	switch (s) {
		case "news":
			setGlobalState("name", "캐나다소식");
			break;
		case "forum":
			setGlobalState("name", "자유게시판");
			break;
		case "info":
			setGlobalState("name", "정보/팁");
			break;
		case "buysell":
			setGlobalState("name", "온라인장터");
			break;
		default:
			setGlobalState("name", "");
	}
	setGlobalState("currentNav", s);
};
export { useGlobalState };
