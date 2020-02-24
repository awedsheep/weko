import React from "react";

export default function SuccessLoginInfo({ isLoggedIn, email, name, picture }) {
	var content;
	// console.log("isLoggedIn" +isLoggedIn)
	// console.log("email" +email)
	// console.log("name" +name)
	// console.log("picture" +picture)
	if (isLoggedIn) {
		content = (
			<div>
				<img src={picture} alt={name} />
				{name + " "}
				{email}
			</div>
		);
	}

	return content;
}
