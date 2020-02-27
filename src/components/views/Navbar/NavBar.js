import React, { useState, useEffect } from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Dropdown, Button, Icon, Modal, Input } from "semantic-ui-react";
import { useGlobalState } from "../../../state.js";
import Facebook from "../../loginButtons/Facebook";

import Cookies from "js-cookie";
import Google from "../../loginButtons/Google";
// import SuccessLoginInfo from "../../loginButtons/SuccessLoginInfo";
// import LogoutButton from "../../loginButtons/LogoutButton";
import { getCatWithFiltered } from "../../../apiCall";
import LogoutButton from "../../loginButtons/LogoutButton";

function NavBar() {
	const [currentNav] = useGlobalState("currentNav");
	const [loginOpen, setLoginOpen] = useGlobalState("loginOpen");

	const [login, setlogin] = useGlobalState("state");
	var isLoggedIn = login.isAuth;
	// var email = login.date;
	// var name = login.name;
	// var picture = login.picture;

	async function checkIsAuth() {
		var clientToken = Cookies.get("accessToken");
		if (clientToken) {
			var filterParam = {
				cat: "loginInfo",
				expression: "#n >= :v",
				names: { "#n": "accessToken" },
				values: { ":v": clientToken }
			};

			var dbToken = await getCatWithFiltered(filterParam);
			if (dbToken) {
				if (!dbToken.length) {
					setlogin({
						cat: "loginInfo",
						date: dbToken.date,
						accessToken: dbToken.accessToken,
						userId: dbToken.userId,
						name: dbToken.name,
						picture: dbToken.picture,
						isAuth: true
					});
				}
			}
		}
	}

	useEffect(() => {
		checkIsAuth();
	}, []);

	return (
		<>
			{/* {isLoggedIn ? (
				<div>
					<SuccessLoginInfo
						isLoggedIn={isLoggedIn}
						email={email}
						name={name}
						picture={picture}
					/>{" "}
					<LogoutButton />
				</div>
			) : (
				<div>
					
				</div>
			)} */}

			<Modal
				size="mini"
				open={loginOpen}
				// open={true}
				onClose={() => setLoginOpen(false)}
				className="modal_login"
			>
				<Modal.Header>
					<Icon name="user" size="big" />
					{isLoggedIn ? "로그아웃" : "로그인"}
				</Modal.Header>

				{isLoggedIn ? <LogoutButton /> :
					<>
						<Modal.Content>
							<Input
								iconPosition="left"
								placeholder="Email"
								className="email_text__"
							>
								<Icon name="at" />
								<input />
							</Input>
							<br />
							<Input
								iconPosition="left"
								placeholder="Password"
								type="password"
								className="password_text__"
							>
								<Icon name="key" />
								<input />
							</Input>
						</Modal.Content>
						<Modal.Actions>
							<Button primary basic>
								비밀번호찾기
					</Button>
							<Button primary>회원가입</Button>
							<Button
								positive
								icon="checkmark"
								labelPosition="right"
								content="로그인"
							/>
							<div className="third_party_div">
								<div className="facebook_div">
									<Facebook isLoggedIn={isLoggedIn} />
								</div>
								<div className="google_div">
									<Google isLoggedIn={isLoggedIn} />
								</div>
							</div>
						</Modal.Actions>

					</>
				}



			</Modal>
			<nav className="navBar">
				<header>
					<div className="logo_nav">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<span className="logo_nav logo_sub">
						<img
							src="https://inspiration.ignitemag.ca/wp-content/uploads/2019/02/Winnipeg-Banner.jpg"
							alt="logo"
						/>
					</span>
					<span className="logo_nav logo_sub">
						<img
							src="https://wearepentagon.com/pentaWordpress/wp-content/uploads/2017/07/Korea_big_header.jpg"
							alt="logo"
						/>
					</span>
					<span className="logo_nav logo_sub">
						<img
							src="https://blog.hotelscombined.com/wp-content/uploads/2018/02/Korea-Cherry-Blossoms-1.jpg"
							alt="logo"
						/>
					</span>
					<div className="mobile_dropdown">
						<Dropdown
							// text="Menu"
							icon="list ul"
							floating
							labeled
							className="icon"
						>
							<Dropdown.Menu>
								<Dropdown.Item>
									<Link to="/news">
										<Icon name="bullhorn" size="large" />
										캐나다소식
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/forum">
										<Icon name="coffee" size="large" />
										자유게시판
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/buysell">
										<Icon name="shopping basket" size="large" />
										온라인장터
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/info">
										<Icon name="info circle" size="large" />
										정보/팁
									</Link>
								</Dropdown.Item>
								<Dropdown.Item onClick={() => setLoginOpen(true)}>
									{/* <span as="a" > */}
									<Icon name="user" size="large" />
									{isLoggedIn? "로그아웃" : "로그인"}
									{/* </span> */}
									{/* <Button.Group icon>
										<Button color="black" onClick={() => setLoginOpen(true)}>
											<Icon name="user" size="large" />
											로그인
										</Button>
									</Button.Group> */}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</header>
			</nav>
			<nav className="navBar logo_sub">
				<header>
					<ul className="menu">
						<li className={currentNav === "news" ? "active" : ""}>
							<Link to="/news">
								<span>
									<Icon name="bullhorn" />
									캐나다소식
								</span>
							</Link>
						</li>
						<li className={currentNav === "forum" ? "active" : ""}>
							<Link to="/forum">
								<span>
									<Icon name="coffee" />
									자유게시판
								</span>
							</Link>
						</li>
						<li className={currentNav === "buysell" ? "active" : ""}>
							<Link to="/buysell">
								<span>
									<Icon name="shopping basket" />
									온라인장터
								</span>
							</Link>
						</li>
						<li className={currentNav === "info" ? "active" : ""}>
							<Link to="/info">
								<span>
									<Icon name="info circle" />
									정보/팁
								</span>
							</Link>
						</li>
						<li>
							<a onClick={() => setLoginOpen(true)}>
								<Icon name="user" />
								{isLoggedIn? "로그아웃" : "로그인"}
							</a>
						</li>
					</ul>
				</header>
			</nav>
		</>
	);
}

export default NavBar;
