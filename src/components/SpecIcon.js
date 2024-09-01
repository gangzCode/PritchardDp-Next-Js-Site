import React from 'react'
import { FaWeightHanging } from 'react-icons/fa'
import { RxSize } from "react-icons/rx";
import { TbRulerMeasure } from "react-icons/tb";
import { MdColorLens } from "react-icons/md";
import { TbTexture } from "react-icons/tb";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";
import { LuCircleOff } from "react-icons/lu";
import { FaRegHandLizard } from "react-icons/fa";
import { PiDotsNineFill } from "react-icons/pi";
import { TbGauge } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { IoWater } from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { FaWeight } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { RiWaterPercentFill } from "react-icons/ri";
import { MdOutlineDryCleaning } from "react-icons/md";
import { FaTape } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import { MdDry } from "react-icons/md";
import { BiSolidWasher } from "react-icons/bi";

export const SpecIcon = ({iconKey, className}) => {

    const commonClassName = "text-[#575aa7] m-2 w-full h-full"

    const iconList ={
        weight:<FaWeightHanging className={commonClassName} />,
        size:<RxSize  className={commonClassName} />,
        yardage:<TbRulerMeasure  className={commonClassName} />,
        color:<MdColorLens  className={commonClassName} />,
        finish:<TbTexture  className={commonClassName} />,
        width:<AiOutlineColumnWidth  className={commonClassName} />,
        attribute:<FaThList  className={commonClassName} />,
        perforation:<BsTicketPerforatedFill  className={commonClassName} />,
        capabilities:<FaCheckSquare  className={commonClassName} />,
        diameter:<LuCircleOff  className={commonClassName} />,
        thickness:<FaRegHandLizard  className={commonClassName} />,
        density:<PiDotsNineFill  className={commonClassName} />,
        gauge:<TbGauge  className={commonClassName} />,
        surface:<TbTexture  className={commonClassName} />,
        format:<FaBox  className={commonClassName} />,
        print_process:<IoIosPrint  className={commonClassName} />,
        conversion_process:<IoWaterOutline  className={commonClassName} />,
        product_type:<RiFilePaper2Line  className={commonClassName} />,
        certificate:<TbCertificate  className={commonClassName} />,
        grammage:<FaWeight  className={commonClassName} />,
        ink_coverage:<IoWater  className={commonClassName} />,
        transfer_yield:<RiWaterPercentFill  className={commonClassName} />,
        dry_speed:<MdOutlineDryCleaning  className={commonClassName} />,
        adhesive_force:<FaTape  className={commonClassName} />,
        light_fa:<MdLightMode className={commonClassName} />,
        wet_rub:<GiWaterDrop className={commonClassName} />,
        dry_rub:<MdDry className={commonClassName} />,
        washing:<BiSolidWasher className={commonClassName} />
    }

    return (
        <div className={className}>{iconList[iconKey]}</div>
    )
}
