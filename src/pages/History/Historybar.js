import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthComponent from "../Auth/AuthComponent";

function Historybar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);

  function handleWalletClick() {
    setIsWalletMenuOpen(!isWalletMenuOpen);
  }

  return (
    <div className="z-30 flex flex-col flex-shrink-0 overflow-y-auto w-69 block font-plus text-white hidden md:block lg:block" style={{borderLeft: "1px solid #2F2D3B"}}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-start items-center gap-3 pt-6 pl-2">
            <img src="/demo/assets/history.svg" className="w-6 h-6" alt="History"/>
            <p className="font-normal text-18 leading-25">Famous Artist</p>
          </div>
          <div className="pt-2 pl-2 pr-6 flex flex-col">
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-start items-center gap-3 pt-6 pl-2">
            <img src="/demo/assets/history.svg" className="w-6 h-6" alt="History"/>
            <p className="font-normal text-18 leading-25">History</p>
          </div>
          <div className="pt-2 pl-2 pr-6 flex flex-col">
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
            <div className="p-45 gap-45 flex group flex-row justify-start items-center cursor-pointer hover:bg-primary-800 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #2F2D3B"}}>
              <div className="flex flex-row justify-start items-center gap-45">
                <div className="relative flex justify-center items-center w-[36px] h-[36px]">
                  <img className="absolute rounded-2 top-0 left-0 w-26 h-26" src="/demo/assets/avatar_play.png"/>
                  <img className="absolute top-1 left-1 rounded-2 w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out" src="/demo/assets/history_play.svg"/>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                  <div className="font-plus font-normal text-14 leading-18">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"><img className="rounded-2" src="/demo/assets/option.svg"/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 px-6">
          <AuthComponent width={'247px'} height={'334px'}/>
        </div>
    </div>
  );
}

export default Historybar;
