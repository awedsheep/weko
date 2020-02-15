import React, { useState } from "react";
import logo from "./components/images/logo.png";
import Footer from "./znew/component/Footer";
import {
	Button,
	Container,
	Divider,
	Dropdown,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Banner1 from "./components/Banner1";

const getWidth = () => {
	const isSSR = typeof window === "undefined";

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
function DesktopContainer({ children }) {
	return (
		<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
			{/* <Segment
				// inverted
				textAlign="center"
				// style={{ minHeight: 700, padding: "1em 0em" }}
				vertical
			> */}
			<Menu
				borderless
				// fixed={menuFixed ? "top" : undefined}
				// style={menuFixed ? fixedMenuStyle : menuStyle}
			>
				<Container text>
					<Menu.Item position="right">
						<Image size="small" src={logo} />
					</Menu.Item>
					<Menu.Item as="a">캐나다소식</Menu.Item>
					<Menu.Item as="a">온라인장터</Menu.Item>
					<Menu.Item as="a">자유게시판</Menu.Item>
					<Menu.Item as="a">구인/구직</Menu.Item>

					<Menu.Menu position="right">
						<Dropdown text="Dropdown" pointing className="link item">
							<Dropdown.Menu>
								<Dropdown.Item>List Item</Dropdown.Item>
								<Dropdown.Item>List Item</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Header>Header Item</Dropdown.Header>
								<Dropdown.Item>
									<i className="dropdown icon" />
									<span className="text">Submenu</span>
									<Dropdown.Menu>
										<Dropdown.Item>List Item</Dropdown.Item>
										<Dropdown.Item>List Item</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown.Item>
								<Dropdown.Item>List Item</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Menu>
				</Container>
			</Menu>
			{/* </Segment> */}

			{children}
		</Responsive>
	);
}
function MobileContainer({ children }) {
	const [sidebarOpened, setsidebarOpened] = useState(false);
	const handleSidebarHide = () => setsidebarOpened(false);
	const handleToggle = () => setsidebarOpened(true);
	return (
		<Responsive
			as={Sidebar.Pushable}
			getWidth={getWidth}
			maxWidth={Responsive.onlyMobile.maxWidth}
		>
			<Sidebar
				as={Menu}
				animation="overlay"
				onHide={handleSidebarHide}
				vertical
				visible={sidebarOpened}
				direction="right"
				width="thin"
			>
				<Menu.Item as="a" active>
					Home
				</Menu.Item>
				<Menu.Item as="a">Work</Menu.Item>
				<Menu.Item as="a">Company</Menu.Item>
				<Menu.Item as="a">Careers</Menu.Item>
				<Menu.Item as="a">Log in</Menu.Item>
				<Menu.Item as="a">Sign Up</Menu.Item>
			</Sidebar>

			<Sidebar.Pusher dimmed={sidebarOpened}>
				<Container>
					<Menu pointing secondary size="large">
						<Menu.Item onClick={handleToggle} position="right">
							<Icon name="sidebar" />
						</Menu.Item>
						{/* <Menu.Item position="right">
							<Button as="a">Log in</Button>
							<Button as="a" style={{ marginLeft: "0.5em" }}>
								Sign Up
							</Button>
						</Menu.Item> */}
					</Menu>
				</Container>
				{/* <HomepageHeading mobile /> */}

				{children}
			</Sidebar.Pusher>
		</Responsive>
	);
}

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</div>
);

export default function AppNew() {
	return (
		<ResponsiveContainer>
			<Banner1 />
			<Footer />
		</ResponsiveContainer>
	);
}
