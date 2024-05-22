import { Dispatch, FC, SetStateAction, useState } from "react";

import XIcon from "@assets/icons/XIcon";
import { geoFindMe } from "@utils/helper";
import Select, { Option } from "@ui/Select";
import SendIcon from "@assets/icons/SendIcon";

type BranchModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const size = [
  { id: 0, size: "30 ML", price: "65.00" },
  { id: 1, size: "50 ML", price: "150.00" },
  { id: 2, size: "70 ML", price: "200.00" },
  { id: 3, size: "100 ML", price: "520.00" },
];

const BranchModal: FC<BranchModalProps> = ({ setIsOpen }) => {
  const [search, setSearch] = useState("");
  const [whichItem, setWhichItem] = useState<{
    id: number;
    size: string;
    price: string;
  }>(size[0]);

  return (
    <>
      <section className="fixed top-0 left-0 w-full h-dvh grid place-items-center backdrop-blur-sm bg-[#00000020] z-50">
        <div className="lg:w-[90dvw] h-4/5 bg-white p-10">
          <div className="flex justify-between items-center w-full">
            <h4 className="text__xl capitalize font-bold">
              check in branches stock
            </h4>
            <XIcon
              className="w-5 h-5 cursor-pointer hover:text-primary-500 duration-300"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="mt-5">
            <p className="text__md capitalize font-light">
              what size are you looking for?
            </p>
            <Select
              label=""
              labelClassName="flex flex-col w-full md:w-1/6 lg:col-start-3 lg:col-end-5"
              className={`relative flex items-center w-full  h-full text__md py-3 px-2
            text-Gray-606060 bg-transparent border-b-1 border-Gray-606060 outline-none cursor-pointer`}
              value={<span>{whichItem.size}</span>}
            >
              {size.map((item) => (
                <Option
                  key={item.id}
                  className={`flex items-center justify-between text-sm capitalize border-b-1 border-Gray-DFDFDF px-2 py-3 
                  cursor-pointer last:border-0 `}
                  onClick={() => setWhichItem(item)}
                >
                  {item.size}
                  <span className="absolute right-2">${item.price}</span>
                </Option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <input
              type="text"
              name="term"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-1/2 border-b-1 border-Gray-606060 outline-none px-2 py-2
              placeholder:text-Gray-606060 placeholder:font-light"
              placeholder="Address"
            />
            <div className="flex items-center gap-3 w-1/2">
              <button className="w-1/2 text-white bg-primary-500 py-3">
                Search
              </button>
              <p className="text-black">Or</p>
              <button
                className="flex items-center justify-center gap-2 w-1/2 text-primary-500 font-bold border-2 border-primary-500 py-2"
                onClick={geoFindMe}
              >
                <SendIcon className="w-4 h-4 -rotate-45" strokeWidth={2.5} />
                <p className="mt-1">Around Me</p>
              </button>
            </div>
          </div>
          <div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchModal;
