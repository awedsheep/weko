import React, { createRef } from "react";
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
import Footer from "./components/Footer";
import { putUser, authenticateUser } from "./apiCall";
import ScrollTop from "./ScrollTop";
import { Grid, Sticky, Ref, Segment, Rail } from "semantic-ui-react";

// const NewNewsItem = {
// 	cat: "news",
// 	date: "2020-02-22-10-18-23-000",
// 	content: 13
// };

// putPost(NewNewsItem);

// const updateParam = {
// 		cat: "news",
// 		date: "2020-02-22-10-18-23-000", //Unique String
// 		changedValue: {
// 			content:222,
// 			content2:11
// 			//... you can add new attribute too
// 		}
// 	};
// updateItemsById(updateParam);

// updateIndex("news");
// const oneItem = getItem("news", "2020-02-22-10-18-23-000");

// fetch();

// getRecentTen("news");

// getItem("news"); or getItem("news", "2020-02-15")

// var filterParam = {
// 	cat: "news",
// 	expression: "#n >= :v and #n2 <= :v2",
// 	names: { "#n": "content2", "#n2": "content" },
// 	values: { ":v": 5, ":v2": 5 }

// }

// getCatWithFiltered(filterParam);

// getItemByNumber("news", "2020-02-22-20-25-05-422", 50)

// const NewUser = {
// 		id: "ckswn211@hotmail.com",
// 		pass: "12345678"
// 	};

// var newUserHashCode = putUser(NewUser); //need to await
// var isSuccessLogginIn = authenticateUser(NewUser);

function App() {
	// var ppp = {
	// 	tag: "[매니토바]",
	// 	title: "매니토바 소식을 알려드립니다",
	// 	author: "관리자",
	// 	date: "2020-01-01-13-32",
	// 	view: 155,
	// 	body:
	// 		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	// 	replies: [],
	// 	cat: "News"
	// };

	// console.log(isLoggedIn);

	const contextRef = createRef();

	//getcookie and compare with dynamoDB




	return (
		<div className="warper_all">
			{/* <button onClick={() => putPost(ppp)}>POST</button> */}
			<BrowserRouter>
				<ScrollTop>
					<div className="header">
						<NavBar />
					</div>

					<div className="container_body_warp">
						<Grid centered columns={3}>
							{/* <Grid.Column width="3"> */}

							{/* </Grid.Column> */}
							<Grid.Column width="10">
								<Ref innerRef={contextRef}>
									<Segment width="3" className="segment_wrap">
										<div className="container_body">
											{/* <Banner1 /> */}

											<Route path="/" exact={true} render={() => <Home />} />
											<Route path="/news/:page" exact={true} component={News} />

											<Route path="/news" exact={true} component={News} />

											<Route
												path="/news/:page/:id"
												exacat={true}
												component={NewsView}
												
											/>
											{/* <Route path="/news/view/:id" component={NewsView} /> */}
											<Route
												path="/forum/:page"
												exact={true}
												render={() => <Forum />}
											/>
											<Route
												path="/forum/:page/:id"
												// exact={true}
												component={ForumView}
											/>

											<Route
												path="/buysell/:page"
												exact={true}
												render={() => <BuySell />}
											/>
											<Route
												path="/buysell/:page/:id"
												// exact={true}
												component={BuySellView}
											/>
											<Route
												path="/info/:page"
												exact={true}
												render={() => <InfoTips />}
											/>
											<Route
												path="/info/:page/:id"
												// exact={true}
												component={InfoTipsView}
											/>
											<Route path="/write/:cat" component={Write} />
										</div>

										<Rail position="left" className="rail_left">
											<Sticky context={contextRef}>
												<div>
													<div
														style={{
															float: "right",
															marginTop: "10px",
															width: "100%",
															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															height: "100%",
															maxHeight: "80px",
															overflow: "hidden",
															border: "1px solid black"
														}}
													>
														{/* <img src="https://inspiration.ignitemag.ca/wp-content/uploads/2019/02/Winnipeg-Banner.jpg" /> */}
													</div>
													<div
														style={{
															float: "right",
															marginTop: "10px",
															width: "100%",

															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",
															border: "1px solid black"
														}}
													></div>
													<div
														style={{
															float: "right",
															marginTop: "10px",
															width: "100%",

															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",
															border: "1px solid black"
														}}
													></div>
													<div
														style={{
															float: "right",
															marginTop: "10px",
															width: "100%",
															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",
															border: "1px solid black"
														}}
													></div>
												</div>
											</Sticky>
										</Rail>
										<Rail position="right" className="rail_right">
											<Sticky context={contextRef}>
												<div>
													<div
														style={{
															float: "left",
															marginTop: "10px",
															width: "100%",
															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",

															border: "1px solid black"
														}}
													></div>
													<div
														style={{
															float: "left",
															marginTop: "10px",
															width: "100%",
															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",
															border: "1px solid black"
														}}
													></div>
													<div
														style={{
															float: "left",
															marginTop: "10px",
															width: "100%",
															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",
															border: "1px solid black"
														}}
													></div>
													<div
														style={{
															float: "left",
															marginTop: "10px",
															width: "100%",
															minWidth: "150px",
															maxWidth: "250px",
															paddingTop: "32%",
															maxHeight: "80px",
															border: "1px solid black"
														}}
													></div>
												</div>
											</Sticky>
										</Rail>
									</Segment>
								</Ref>
							</Grid.Column>
							{/* <Grid.Column width="3"> */}

							{/* </Grid.Column> */}
						</Grid>
					</div>

					{/* <div className="footer">WECO Korean Comunity ©2020 </div> */}
					<Footer />
				</ScrollTop>
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
