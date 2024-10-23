import { memo, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import "./sumCard.css";

interface SumCardProps {
  className?: string;
  day: string;
  img: string;
  highest: number;
  lowest: number;
  delay: number;
  clickFn: MouseEventHandler<HTMLDivElement>;
}

function SumCard({ className, clickFn, day, img, highest, lowest, delay }: SumCardProps) {
  return (
    <>
      <motion.div
        initial={{ y: "20%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        className={`sum-card ${className}`}
        onClick={clickFn}
      >
        <div className="sum-card-day">{day}</div>
        <div className="sum-card-img-container">
          <img className="sum-card-img" src={img} />
        </div>
        <div className="sum-card-tmp-container">
          <div className="sum-card-tmp-highest">
            {highest}
            <span className="sum-card-deg-symbol">°</span>
          </div>
          <div className="sum-card-tmp-lowest">
            {lowest}
            <span className="sum-card-deg-symbol">°</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default memo(SumCard);
