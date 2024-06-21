import { IoIosArrowDown,IoMdNotificationsOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
 
const Navbar = () => {
    return (
      <div className="relative "> 
      <div className="absolute z-10">
      <div className="flex justify-between  text-white px-44 py-1 items-center gap-44">  {/* Consolidated classes */}
          <img src="1.png" alt="Logo" className="h-10 w-11 rounded-full" /> {/* Added alt text */}
          <div className="flex flex-row justify-between items-center text-black">  {/* Added items-center */}
            <p>Home</p>
            <IoIosArrowDown className="pt-2" />
            <p>Home</p>
            <IoIosArrowDown className="pt-2" />
            <p>Home</p>
            <IoIosArrowDown className="pt-2" />
          </div>
        
            {/* <FaArrowRight className="pt-2" /> */}
         <div className="flex justify-between gap-28">
         <p>Connect with us -{'>'}</p>
         <div className="flex flex-row justify-between pt-2 gap-2">
            <IoSearchOutline />
            <CiUser />
            <GoHeart />
            <IoMdNotificationsOutline />
          </div>
         </div>
         
        </div>
      </div>
      </div>
    );
  };
//  const Navbar =()=>{
//     return <div>
//     <div className="flex relativ z-0"><div className=" w-7/12 "></div><div className=" bg-[#577b37] w-5/12"></div></div>
    
//         <div className="flex flex-row justify-between  max-w-5xl absolute z-10 text-green-800 px-5">
//         <img src="1.png"  className="h-10 w-11 rounded-full"/>
//         <div className="flex flex-row justify-between text-blue">
//             <p className=''>Home</p>
//             <IoIosArrowDown  className="pt-2"/>
//             <p>Home</p>
//             <IoIosArrowDown className="pt-2" />
//             <p>Home</p>
//             <IoIosArrowDown  className="pt-2"/>
//         </div>
//         <div className="flex flex-row justify-between text-green-800">
//         <p>connect with us</p>
//         <FaArrowRight className="pt-2" />
//         </div>
//         <div className="flex flex-row justify-between pt-2 gap-2">
//         <IoSearchOutline />
//         <CiUser />
//         <GoHeart />
//         <IoMdNotificationsOutline/>
//         </div>
       
//         </div>
//     </div>
// }

export default Navbar;