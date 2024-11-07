import { memo, ReactNode } from "react";

type InfoCardProps = {
  cardClassName: string;
  dataTitle: string;
  dataContent: string | ReactNode;
};

function InfoCard({ cardClassName, dataTitle, dataContent }: InfoCardProps) {
  return (
    <>
      <div className={cardClassName}>
        <div className="card-title">{dataTitle}</div>
        <div className="card-content">{dataContent}</div>
      </div>
    </>
  );
}

export default memo(InfoCard);
