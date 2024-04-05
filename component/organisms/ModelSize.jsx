import React from 'react';
import WatchModel from '../atoms/WatchModel';
import Modelhead from '../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
import { RxCross1 } from "react-icons/rx";

function ModelSize({ onSelectSize }) {
  const handleSizeSelect = (size) => {
    onSelectSize(size);
  };

  return (
    <div className='flex flex-col pt-[100px]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[730px] flex flex-col gap-[20px]'>
          <div className='flex justify-center'>
            <Modelhead icon={<LiaLessThanSolid />} heading='Case size' description='What year is size of the case?' subDescription='Select an option below' />
          </div>
          <div className='w-[730px] flex flex-wrap gap-[10px]'>
            <button onClick={() => handleSizeSelect("28mm")}><WatchModel text='28mm' /></button>
            <button onClick={() => handleSizeSelect("33mm")}><WatchModel text='33mm' /></button>
            <button onClick={() => handleSizeSelect("33mm")}><WatchModel text='33mm' /></button>
            <button onClick={() => handleSizeSelect("36mm")}><WatchModel text='36mm' /></button>
            <button onClick={() => handleSizeSelect("40mm")}><WatchModel text='40mm' /></button>
            <button onClick={() => handleSizeSelect("41mm")}><WatchModel text='41mm' /></button>
            <button onClick={() => handleSizeSelect("42mm")}><WatchModel text='42mm' /></button>
            <button onClick={() => handleSizeSelect("44mm")}><WatchModel text='44mm' /></button>
          </div>
          <div className='flex justify-center items-center'><Other parent='Other' /></div>
        </div>
      </div>
    </div>
  );
}

export default ModelSize;
