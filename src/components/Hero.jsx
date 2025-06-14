import React from "react";
import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import Dropdown from "./DropDown";

export default function Hero() {
    return (
        <div className="w-full h-full flex justify-center gap-4 px-28 pr-42  text-white">
            <div className="w-full h-full   border-2 p-3">
                <div className="w-full h-30 flex">
                    <div className="h-full w-full">
                        <div className="text-2xl font-bold uppercase">
                            $SOLX crypto presale World's first Solana Layer 2 //
                        </div>
                        <button
                            className="rounded-xl uppercase p-1 hover:cursor-pointer text-white font-bold"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to bottom, #b91c1c, #f87171, #ec4899)",
                            }}
                        >
                            Launching on major exchanges
                        </button>
                    </div>
                    <div className="h-full w-2/3 flex justify-center gap-3 flex-col items-end p-3">
                        <div>
                            <Dropdown
                                defaultValue={"SOLAXY TESTNET"}
                                options={[
                                    { name: "BLOCK EXPLORER", status: "LIVE" },
                                    { name: "BRIDGE", status: "LIVE" },
                                    { name: "NEPTOON", status: "COMING SOON" },
                                    {
                                        name: "IGNITER",
                                        status: "COMING SOON",
                                    },
                                    { name: "WIKI", status: "COMING SOON" },
                                ]}
                                onSelect={(value) => console.log("Selected:", value)}
                            />
                        </div>
                        <div className="uppercase font-bold text-2xl text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#34d399_60%,_#064e3b)]">
                            83% Staking Rewards
                        </div>
                    </div>
                </div>
                <div className='w-full h-3/4 border-2 border-red-400'>

                    <div className='w-1/3 h-full'>
                        <img src='/assets/images/gif/skate-man.gif'>
                        </img>
                    </div>
                    <div className='w-full h-full border-2'>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-black flex flex-col justify-start p-2">
                <div className="border-2 w-full h-fit p-4 bg-black relative ">
                    <img
                        className="absolute -left-10 -top-7 w-24 h-24 object-contain "
                        src="/assets/images/png/sidebar-icon.png"
                    ></img>
                    <div
                        className="flex flex-col absolute -right-12 top-9 justify-center py-8 pl-10 gap-2  bg-gradient-to-b from-cyan-400 via-blue-400 to-violet-500"
                        style={{
                            clipPath: " polygon(46% 0, 100% 12%, 100% 87%, 46% 100%)",
                        }}
                    >
                        <a href="https://x.com/SOLAXYTOKEN">
                            <img
                                className="w-12 h-12 object-contain cursor-pointer"
                                src="/assets/images/png/X.png"
                            ></img>
                        </a>
                        <a href="https://t.me/solaxytoken">
                            <img
                                className="w-12 h-12 object-contain cursor-pointer"
                                src="/assets/images/png/telegram.png"
                            ></img>
                        </a>
                    </div>
                    <p className="font-bold text-2xl px-10 text-center font-serif">
                        LAST CHANCE TO BUY $SOLX
                    </p>
                    <div className="w-full h-32 rounded-md p-1 overflow-hidden gap-2 flex flex-col  bg-radial-[at_50%_60%] from-white to-red-600">
                        <p className="font-bold text-center text-2xl ">PRESALE ENDS IN</p>
                        <div className="bg-[url('/assets/images/gif/snow-bg.gif')] w-full h-2/3 bg-blend-luminosity">
                            <CountdownTimer targetDate={"2025-06-17T10:00:00"} />
                        </div>
                    </div>
                    <div className="w-full h-32 p-2 flex flex-col gap-1">
                        <p className="text-center text-md font-bold">
                            USDT RAISED: $49,543,774.94 / $50,394,331
                        </p>
                        <ProgressBar raised={39545687.77} goal={50394331} />
                        <div>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-center text-md font-bold">
                                    YOUR PURCHASED SOLX = 0
                                </p>
                                <button
                                    onClick={() =>
                                        Modal.open(
                                            <div className="flex flex-col justify-center text-white items-center gap-4 p-6 bg-blue-950 rounded-3xl">
                                                <div className="bg-blue-900 rounded-full w-fit h-fit text-7xl  font-bold text-white px-10 p-4">
                                                    !
                                                </div>
                                                <p className="text-xl font-bold text-center">
                                                    Your total purchased tokens are all tokens purchased
                                                    using the connected wallet. This includes all staked
                                                    and unstaked tokens.
                                                </p>
                                                <button
                                                    className="bg-violet-500 rounded-2xl w-fit h-fit p-2 px-8 font-bold hover:bg-red-500"
                                                    onClick={Modal.close}
                                                >
                                                    OK
                                                </button>
                                            </div>
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-center text-md font-bold">
                                    YOUR STAKEABLE SOLX = 0
                                </p>
                                <button
                                    onClick={() =>
                                        Modal.open(
                                            <div className="flex flex-col justify-center text-white items-center gap-4 p-6 bg-blue-950 rounded-3xl">
                                                <div className="bg-blue-900 rounded-full w-fit h-fit text-7xl  font-bold text-white px-10 p-4">
                                                    !
                                                </div>
                                                <p className="text-xl font-bold text-center">
                                                    Unclaimed SOLX that was bought using ETH or ERC-20
                                                    USDT can be staked now. Please note that all early
                                                    staked tokens can be withdrawn 7 days after token
                                                    claiming goes live, which will happen after the
                                                    presale has concluded.{" "}
                                                </p>
                                                <button
                                                    className="bg-violet-500 rounded-2xl w-fit h-fit p-2 px-8 font-bold hover:bg-red-500"
                                                    onClick={Modal.close}
                                                >
                                                    OK
                                                </button>
                                            </div>
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit p-2 flex flex-col gap-5 ">
                        <div className="w-full grid place-items-center h-full relative">
                            <div className="bg-black text-white px-3 text-md font-bold absolute">
                                1 SOLX = $0.001758
                            </div>
                            <div className="w-full border-1 border-white"></div>
                        </div>
                        <div className="w-full h-fit flex gap-2">
                            <button className="font-bold text-black p-2 px-4 rounded-xl bg-gradient-to-b from-lime-300 to-green-500 shadow-md border border-white/40">
                                BUY WITH CARD
                            </button>
                            <button className="font-bold p-2 px-4 rounded-xl bg-gradient-to-b from-cyan-400 via-blue-400 to-violet-500 shadow-md border border-white/40">
                                BUY WITH CRYPTO
                            </button>
                        </div>
                        <p className="uppercase font-bold text-center hover:underline hover:cursor-pointer ">
                            Don't Have a Wallet?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
