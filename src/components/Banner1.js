import React from "react";
import "./Banner1.css";
import "antd/dist/antd.css";
import { Carousel } from "antd";
//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBJngNaTOvO8n84ZeFl95dvJfnMgC6KGtnvinAGwpdEmPWAvDj
function Banner1() {
	return (
		<Carousel className="banner" autoplay>
			<div className="car__11">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBJngNaTOvO8n84ZeFl95dvJfnMgC6KGtnvinAGwpdEmPWAvDj" />
				<img src="https://fullforceads.com/wp-content/uploads/2018/01/series3-468x60.jpg" />
			</div>
			<div className="car__21">
				<img src="https://www.easyhomeframer.com/wp-content/uploads/2013/07/Banner-728x90.gif" />
				<img src="https://lh3.googleusercontent.com/proxy/9KhRqlwT01BdNSSgD5eK1WiVwlrSXdwxLjRzxwTbYszSjBLE4bElcskVcN8k5PAoqIicTE890ZB_xlswg_6MRf2hfRccfG-M2tNfu7bvyw" />
			</div>
			<div className="car__31">
				<img src="https://www.codot.gov/safety/colorado-teen-drivers/driving-tool-kit/Seat%20Belt_Tab/Seatbelt_WebsiteBanners_728x90.gif/@@images/image.gif" />
				<img src="https://energyhill.com/wp-content/uploads/2017/07/RPCS-1707Advertising-Banners-728x90.gif" />
			</div>
			<div className="car__41">
				<img src="https://sporteluxe.com/wp-content/uploads/2015/07/Facebook-GIF-banner-728x90.gif" />
				<img src="https://i0.wp.com/energizecreations.com/wp-content/uploads/2015/09/banner6-sample_leaderboard-728x90.gif?resize=720%2C89" />
			</div>
		</Carousel>
	);
}

export default Banner1;
