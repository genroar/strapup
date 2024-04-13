import React from "react";
import WatchModel from "../../atoms/WatchModel";
import Modelhead from "../../atoms/Modelhead";
import { LiaLessThanSolid } from "react-icons/lia";
import Other from "../../atoms/Other";
import { RxCross1 } from "react-icons/rx";

      
      function ModelPaper({onSelectPaper, onSelectType }) {
  const handlePaperSelect = (paper) => {
    onSelectPaper(paper);
  };

  return (
    <div className="flex flex-col pt-[100px] items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[384px] flex flex-col justify-center items-center">
          <div className="flex s">
            <Modelhead
              onclick={ onSelectType}
              icon={<LiaLessThanSolid  /> }
              heading="Original box & Papers"
              description="Do you have the original box & papers?"
              subDescription="Select an option below"
            />
          </div>
          <div className="ml-[40px]">
            <div className="flex flex-col gap-[10px] ">
              <button onClick={() => handlePaperSelect('paper1')} ><WatchModel text="Box & Papers" /></button>
              <button onClick={() => handlePaperSelect('paper2')} ><WatchModel text="Box Only" /></button>
              <button onClick={() => handlePaperSelect('paper3')} ><WatchModel text="Papers Only" /></button>
              <button onClick={() => handlePaperSelect('paper4')} ><WatchModel text="No Box and Papers" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelPaper;
