import React from "react";
import "./Banner1.css";
import "antd/dist/antd.css";
import { Carousel } from "antd";
//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBJngNaTOvO8n84ZeFl95dvJfnMgC6KGtnvinAGwpdEmPWAvDj
function Banner1() {
	return (
		<Carousel className="banner" autoplay>
			<div className="car__11">
				<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBJngNaTOvO8n84ZeFl95dvJfnMgC6KGtnvinAGwpdEmPWAvDj" />
				<img alt="" src="https://fullforceads.com/wp-content/uploads/2018/01/series3-468x60.jpg" />
			</div>
			<div className="car__21">
				<img alt="" src="https://www.easyhomeframer.com/wp-content/uploads/2013/07/Banner-728x90.gif" />
		
			</div>
			<div className="car__31">
				<img alt="" src="https://www.codot.gov/safety/colorado-teen-drivers/driving-tool-kit/Seat%20Belt_Tab/Seatbelt_WebsiteBanners_728x90.gif/@@images/image.gif" />
				<img alt="" src="https://energyhill.com/wp-content/uploads/2017/07/RPCS-1707Advertising-Banners-728x90.gif" />
			</div>
			<div className="car__41">
				<img alt="" src="https://sporteluxe.com/wp-content/uploads/2015/07/Facebook-GIF-banner-728x90.gif" />
				<img alt="" src="https://i0.wp.com/energizecreations.com/wp-content/uploads/2015/09/banner6-sample_leaderboard-728x90.gif?resize=720%2C89" />
			</div>
		</Carousel>
	);
}

export default Banner1;
