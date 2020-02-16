import React, { useState } from "react";
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
import "./Nav.css";

const getWidth = () => {
	const isSSR = typeof window === "undefined";

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
function DesktopContainer() {
	return (
		<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
			<Segment
				inverted
				textAlign="center"
				// style={{ minHeight: 700, padding: "1em 0em" }}
				vertical
			>
				<Menu
					// fixed={fixed ? "top" : null}
					// inverted={!fixed}
					// pointing={!fixed}
					// secondary={!fixed}
					size="large"
				>
					<Container>
						<Menu.Item as="a" active>
							Home
						</Menu.Item>
						<Menu.Item as="a">Work</Menu.Item>
						<Menu.Item as="a">Company</Menu.Item>
						<Menu.Item as="a">Careers</Menu.Item>
						<Menu.Item position="right">
							<Button as="a">Log in</Button>
							<Button
								as="a"
								// inverted={!fixed}
								// primary={fixed}
								style={{ marginLeft: "0.5em" }}
							>
								Sign Up
							</Button>
						</Menu.Item>
					</Container>
				</Menu>
			</Segment>

			{/* {children} */}
		</Responsive>
	);
}
function MobileContainer() {
	const [sidebarOpened, setsidebarOpened] = useState(false);
	const handleSidebarHide = () => setsidebarOpened(false);
	const handleToggle = () => setsidebarOpened(true);
	return (
		<Responsive
			as={Sidebar.Pushable}
			getWidth={getWidth}
			maxWidth={Responsive.onlyMobile.maxWidth}
			styleName="sidebar-container"
		>
			<Sidebar
				as={Menu}
				animation="overlay"
				inverted
				onHide={handleSidebarHide}
				vertical
				visible={sidebarOpened}
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
				<Segment
					inverted
					textAlign="center"
					// style={{ minHeight: 350, padding: "1em 0em" }}
					vertical
				>
					<Container>
						<Menu inverted pointing secondary size="large">
							<Menu.Item onClick={handleToggle}>
								<Icon name="sidebar" />
							</Menu.Item>
							<Menu.Item position="right">
								<Button as="a" inverted>
									Log in
								</Button>
								<Button as="a" inverted style={{ marginLeft: "0.5em" }}>
									Sign Up
								</Button>
							</Menu.Item>
						</Menu>
					</Container>
					{/* <HomepageHeading mobile /> */}
				</Segment>

				{/* {children} */}
			</Sidebar.Pusher>
		</Responsive>
	);
}

export default function Nav() {
	return (
		<>
			<DesktopContainer></DesktopContainer>
			<MobileContainer></MobileContainer>
		</>
	);
}

/*<Visibility
			// onBottomPassed={this.stickTopMenu}
			// onBottomVisible={this.unStickTopMenu}
			once={false}
		>
			<Menu
				borderless
				// fixed={menuFixed ? "top" : undefined}
				// style={menuFixed ? fixedMenuStyle : menuStyle}
			>
				<Container text>
					<Menu.Item>
						<Image size="mini" src="/logo.png" />
					</Menu.Item>
					<Menu.Item header>Project Name</Menu.Item>
					<Menu.Item as="a">Blog</Menu.Item>
					<Menu.Item as="a">Articles</Menu.Item>

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
		</Visibility> */
