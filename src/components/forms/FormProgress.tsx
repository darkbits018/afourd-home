import React from 'react';

interface Props {
  progress: number;
}

export function FormProgress({ progress }: Props) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#FF4B8C] bg-[#FF4B8C]/10">
            Progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-[#FF4B8C]">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-[#FF4B8C]/10">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FF4B8C] transition-all duration-500"
        />
      </div>
    </div>
  );
}