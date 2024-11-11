import { memo } from "react";

function SkeletonDay() {
	return (
		<div id="Skeleton" className="weatherDay">
			<div className="skeleton">
				<div className="skeleton-img">
					<p></p>
				</div>
				<div className="title"></div>
				<div className="info"></div>
				<div className="info"></div>
				<div className="info"></div>
				<div className="info"></div>
			</div>
		</div>
	);
}
export default memo(SkeletonDay);
