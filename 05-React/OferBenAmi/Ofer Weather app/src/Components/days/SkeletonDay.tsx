import { memo } from "react";

function SkeletonDay () {

	return (
		<div id="Skeleton" className="weatherDay">
			<h3>Loading......</h3>
			<p></p>
		</div>
	);
};
export default memo(SkeletonDay);
