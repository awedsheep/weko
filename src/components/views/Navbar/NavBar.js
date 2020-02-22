import React from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Dropdown, Button, Icon } from "semantic-ui-react";
import { useGlobalState } from "../../../state.js";
//https://wearepentagon.com/pentaWordpress/wp-content/uploads/2017/07/Korea_big_header.jpg
//https://blog.hotelscombined.com/wp-content/uploads/2018/02/Korea-Cherry-Blossoms-1.jpg

//banner example
//https://d2slcw3kip6qmk.cloudfront.net/marketing/press/images/template-gallery/banner-ad2-728x90.jpeg
//https://earthday-365.org/wp-content/uploads/2018/08/gda-ad-728x90.jpg
//https://wpadvancedads.com/wp-content/uploads/2015/08/728x90.png
//https://boldoutline.in/wp-content/uploads/2018/03/ShakeOut_BannerAds_JoinUs_728x90_v2.gif

function NavBar() {
	const [currentNav] = useGlobalState("currentNav");
	return (
		<>
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
									<Link to="/news">캐나다소식</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/forum">자유게시판</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/buysell">온라인장터</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/info">정보/팁</Link>
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
								<span>캐나다소식</span>
							</Link>
						</li>
						<li className={currentNav === "forum" ? "active" : ""}>
							<Link to="/forum">
								<span>자유게시판</span>
							</Link>
						</li>
						<li className={currentNav === "buysell" ? "active" : ""}>
							<Link to="/buysell">
								<span>온라인장터</span>
							</Link>
						</li>
						<li className={currentNav === "info" ? "active" : ""}>
							<Link to="/info">
								<span>정보/팁</span>
							</Link>
						</li>
						<li>
							<Button.Group icon>
								<Button color="black">
									<Icon name="user" size="large" />
									로그인
								</Button>
							</Button.Group>
						</li>
					</ul>
				</header>
			</nav>
		</>
	);
}

export default NavBar;
