import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = props => {
	console.log(props);
	var page = props.location.pathname.split("/")[1];
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	return props.children;
};

export default withRouter(ScrollToTop);
