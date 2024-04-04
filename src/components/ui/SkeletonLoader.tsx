import { FC } from "react";

const SkeletonLoader: FC<{
  className?: string;
  imageClassName?: string;
  isBlog?: boolean;
}> = ({ className, imageClassName, isBlog = false }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-3 h-max border-1 border-Gray-DFDFDF ${className}`}
      >
        <div
          className={`w-full min-h-64 bg-Gray-EDEDED ${imageClassName}`}
        ></div>
        <div className="flex flex-col gap-3 px-8 py-4">
          <div className="w-full h-4 bg-Gray-EDEDED rounded-full"></div>
          <div className="w-3/4 h-4 bg-Gray-EDEDED rounded-full"></div>
          <div className="w-full h-3 bg-Gray-EDEDED rounded-full mt-2"></div>
          <div className="w-3/4 h-3 bg-Gray-EDEDED rounded-full"></div>
          {!isBlog && (
            <div className="w-1/4 h-3 bg-Gray-EDEDED rounded-full mt-2"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;
