import { memo } from "react";

function SkeletonDay() {
	return (
		<div id="Skeleton" className="weatherDay">
			<div className="skeleton">
				<div className="skeleton-img">
					<p></p>
				</div>
				<h3>Loading......</h3>
			</div>
		</div>
	);
}
export default memo(SkeletonDay);
