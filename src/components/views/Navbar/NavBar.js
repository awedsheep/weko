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
import { getCatWithFiltered, getItem, authenticateUser, putUser } from "../../../apiCall";
import LogoutButton from "../../loginButtons/LogoutButton";
import isEmail from 'validator/lib/isEmail';

function NavBar() {
	const [currentNav] = useGlobalState("currentNav");
	const [loginOpen, setLoginOpen] = useGlobalState("loginOpen");
	const [userId, setUserId] = useState("");
	const [userPass, setUserPass] = useState("");
	const [userPassConfirm, setUserPassConfirm] = useState("");
	const [userName, setUserName] = useState("");
	const [registerOpen, setRegisterOpen] = useState(false);

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

	async function userLogin() {
		// console.log(newUserId)
		// console.log(newUserPass)

		//check user in the database
		if (!isLoggedIn) {
			var isUserAlreadyInDB = await getItem("loginInfo", userId)
			console.log(isUserAlreadyInDB)
			if (isUserAlreadyInDB.length >= 1) {
				const user = {
					id: String(userId),
					pass: String(userPass)
				};
				if (await authenticateUser(user)) {
					Cookies.set("accessToken", String(isUserAlreadyInDB[0].hash), {
						expires: 3
					})
					setRegisterOpen(false);
					setlogin({ ...login, isAuth: true });

				} else {
					alert("틀린 아이디(이메일) 혹은 패스워드입니다.")
				}
			}
		} else {
			alert("Please refresh the page. If this keep happening try deleting cookie on the site")
		}
	}

	async function newUserRegister() {
		if (!isEmail(String(userId))) {
			alert("아이디는 이메일 형식만 가능합니다")
			return
		}
		if (userPass !== userPassConfirm) {
			alert("비밀번호가 틀렸습니다")
			return
		}
		var isUserAlreadyInDB = await getItem("loginInfo", userId)

		if (isUserAlreadyInDB.length >= 1) {
			alert("존재하는 이메일 입니다")
		} else {
			const user = {
				id: String(userId),
				pass: String(userPass),
				name: String(userName)
			};
			var userHash = await putUser(user);
			Cookies.set("accessToken", String(userHash), {
				expires: 3000
			})
			setLoginOpen(false);
			setlogin({ ...login, isAuth: true });
		}

	}


	return (
		<>
			<Modal
				size="mini"
				open={loginOpen}
				// open={true}
				onClose={() => setLoginOpen(false)}
				className="modal_login"
			>
				<Modal.Header>
					<Icon name="user" size="big" />
					{isLoggedIn ? "로그아웃" : registerOpen ? "회원가입" : "로그인"}
				</Modal.Header>

				{isLoggedIn ? <LogoutButton /> :
					registerOpen ?
						<>
							<Modal.Content>
								이메일
								<Input
									iconPosition="left"
									placeholder="Email:  example@email.com"
									className="email_text__"
									onChange={e => setUserId(e.target.value)}
								>
									<Icon name="at" />
									<input />
								</Input>
								비밀번호
								<Input
									iconPosition="left"
									placeholder="Password"
									type="password"
									className="password_text__"
									onChange={e => setUserPass(e.target.value)}
								>
									<Icon name="key" />
									<input />
								</Input>
								비밀번호 재입력
								<Input
									iconPosition="left"
									placeholder="Password 재입력"
									type="password"
									className="password_text__"
									onChange={e => setUserPassConfirm(e.target.value)}
								>
									<Icon name="key" />
									<input />
								</Input>
								이름 혹은 닉네임
								<Input
									iconPosition="left"
									placeholder="Name or Nickname"
									className="email_text__"
									onChange={e => setUserName(e.target.value)}
								>
									<Icon name="user" />
									<input />
								</Input>
							</Modal.Content>
							<Modal.Actions>
								<Button primary basic onClick={() => newUserRegister()}>확인</Button>
								<Button primary onClick={() => setRegisterOpen(false)}>취소</Button>
							</Modal.Actions>
						</> :
						<>
							<Modal.Content>
								<Input
									iconPosition="left"
									placeholder="Email:  example@email.com"
									className="email_text__"

									onChange={e => setUserId(e.target.value)}
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
									onChange={e => setUserPass(e.target.value)}
								>
									<Icon name="key" />
									<input />
								</Input>
							</Modal.Content>
							<Modal.Actions>
								<Button primary basic>
									비밀번호찾기
			</Button>
								<Button primary onClick={() => setRegisterOpen(true)}>회원가입</Button>
								<Button
									positive
									icon="checkmark"
									labelPosition="right"
									content="로그인"
									onClick={userLogin}
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
									<Link to="/news/1">
										<Icon name="bullhorn" size="large" />
										캐나다소식
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/forum/1">
										<Icon name="coffee" size="large" />
										자유게시판
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/buysell/1">
										<Icon name="shopping basket" size="large" />
										온라인장터
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/info/1">
										<Icon name="info circle" size="large" />
										정보/팁
									</Link>
								</Dropdown.Item>
								<Dropdown.Item onClick={() => setLoginOpen(true)}>
									{/* <span as="a" > */}
									<Icon name="user" size="large" />
									{isLoggedIn ? "로그아웃" : "로그인"}
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
						{isLoggedIn ? <li className={isLoggedIn ? "active" : ""}>
							<Link to="/">
								<span>
									<Icon name="user" />
									로그인: {login.name} 님 ({login.date})
								</span>
							</Link>
						</li>
							: <></>
						}

						<li className={currentNav === "news" ? "active" : ""}>
							<Link to="/news/1">
								<span>
									<Icon name="bullhorn" />
									캐나다소식
								</span>
							</Link>
						</li>
						<li className={currentNav === "forum" ? "active" : ""}>
							<Link to="/forum/1">
								<span>
									<Icon name="coffee" />
									자유게시판
								</span>
							</Link>
						</li>
						<li className={currentNav === "buysell" ? "active" : ""}>
							<Link to="/buysell/1">
								<span>
									<Icon name="shopping basket" />
									온라인장터
								</span>
							</Link>
						</li>
						<li className={currentNav === "info" ? "active" : ""}>
							<Link to="/info/1">
								<span>
									<Icon name="info circle" />
									정보/팁
								</span>
							</Link>
						</li>
						<li>
							<a onClick={() => setLoginOpen(true)}>
								<Icon name="user" />
								{isLoggedIn ? "로그아웃" : "로그인"}
							</a>
						</li>
					</ul>
				</header>
			</nav>
		</>
	);
}

export default NavBar;
