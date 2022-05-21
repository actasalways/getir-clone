import Flags from "country-flag-icons/react/3x2";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Dropdown() {
  return (
    <div
      className="bg-white p-5 rounded border border-solid w-[400px] "
      id="card"
    >
      <h5 className="flex items-center justify-center">
        Giriş yap veya kayıt ol
      </h5>
      <div className="rounded items-center text-[#fff] ">
        <div className="border flex mb-4 mt-2 ">
          <div className=" justify-center m-3">
            <div className="  w-28 ">
              <div
                id="tel"
                className="focus:text-gray-700 focus:bg-white focus:border-gray-500 text-gray-700 bg-white  border-gray-300 bg-clip-padding bg-no-repeat
                    form-select flex items-center rounded border border-solid focus:outline-none 
                  ">
                {/* <MdOutlineKeyboardArrowUp title="tr" className='w-4 h-4 ml-2' /> */}
                {/* <MdOutlineKeyboardArrowDown title="tr" className='w-4 h-4 ml-2' /> */}
                {/* <Flags.TR title="tr" className="w-6 h-6 ml-2 " /> */}
                <select className="appearance-none w-full px-3 py-1.5 transition rounded ease-in-out ">
                  <option value="+90" defaultValue={"+90"} >
                    +90
                    {/* <MdOutlineKeyboardArrowDown
                      title="down"
                      className="w-4 h-4 ml-2"
                    /> */}
                  </option>
                  <option value="+1">+1</option>
                  <option value="+19">+49</option>
                  <option value="+90">+90</option>
                </select>
                <MdOutlineKeyboardArrowDown title="down" className="w-4 h-4 " />
              </div>
            </div>
          </div>

          {/* tel */}
          <div className="flex justify-center m-3 w-full">
            <input
              type="tel"
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                
                focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none
          " placeholder="Telefon Numarası" />
          </div>
        </div>

      </div>

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className=" px-6 py-2.5 font-bold
           bg-yellow-400
           text-purple-600  
           hover:bg-purple-600 
           hover:text-yellow-400 hover:shadow-lg
           rounded shadow-md
           active:shadow-lg
           transition duration-150 ease-in-out"
        >
          Telefon numarası ile devam et
        </button>
      </div>
    </div>
  );
}
