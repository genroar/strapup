import React, { useState } from "react";
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import CustomImage from "@/component/atoms/CustomImage";
import Navigation from "@/component/molecules/Navigation";
import Heading from "@/component/atoms/Heading";
import { IoIosNotifications } from "react-icons/io";
import Button from "@/component/atoms/Button";
import Createorgan from "./createorgan";
import Dashboard from "@/component/molecules/Dashboard";
import Notificationbar from "@/component/organisms/Notificationbar";
function AccHeader({ setActiveTab }) {
  const router = useRouter(); 
  const [showDashboard, setShowDashboard] = useState(true); // State to show/hide Dashboard

  const handleButtonClick = () => {
    router.push('/createorgan');
  };

  const handleNotificationClick = () => {
    setActiveTab("notification");
  };
  return (
    <div>
      <div className="flex container w-full py-3 header items-center px-6 h-16 justify-between">
        <div>
          <CustomImage
            variant="logo"
            src="/assits/assits/image/header-logo.png"
            alt="logo"
          />
        </div>
        <div>
          <Navigation />
        </div>
        <div className="flex items-center gap-4">
          <Heading level="4">En/Ar</Heading>
          <button onClick={handleButtonClick} className="w-[170px] h-[40px] text-white rounded-[20px] flex items-center justify-center bg-buttonGray " >+ Create Listing</button>
          <IoIosNotifications onClick={handleNotificationClick} className="w-8 h-8 bg-buttonGray px-1.5 py-1.5 rounded-full fill-white" /> {/* Added onClick handler */}
          <div className="w-10 h-10 rounded-full">
            <img src="/assits/assits/image/profile.png" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccHeader;
