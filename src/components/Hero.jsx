import React from "react";
import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import Dropdown from "./DropDown";
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <div className="w-full h-full flex justify-center gap-4 px-18 pr-30  text-white">
            <div className="w-full h-full p-3">
                <div className="w-full h-38 flex relative div-cut-bottom rounded-lg  bg-gray-600 border-3 border-gray-600">
                    <div className="div-cut-bottom absolute bg-black flex w-full h-full rounded-lg p-2">
                        <div className="h-full w-full flex flex-col gap-2">
                            <div className="text-lg uppercase">
                                $SOLX crypto presale World's first Solana Layer 2 //
                            </div>
                            <button
                                className="rounded-3xl uppercase px-3 py-2 text-sm hover:cursor-pointer w-fit text-white"
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
                            <div className="uppercase font-bold text-lg text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#34d399_60%,_#064e3b)]">
                                83% Staking Rewards
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative div-cut-top bg-gray-600 border-3 border-gray-600 rounded-lg'>
                    <div className="w-full h-full div-bg div-cut-top rounded-lg">
                        <div className="w-full text-white flex justify-end">
                            <div className="w-4/5 knife-slice-left">
                                <Marquee className="bg-gradient-to-b from-blue-900 to-purple-950 overflow-hidden">
                                    {"Best ICO // The Future Of Crypto // Best Meme Coin // Huge Presale Rewards // Starlight Yield // No black holes in our galaxy // Best ICO // The Future Of Crypto // Best Meme Coin // Huge Presale Rewards // Starlight Yield // No black holes in our galaxy //"}
                                </Marquee>
                            </div>
                        </div>
                        <div className="w-full h-full flex pt-5">
                            <div className='w-2/4 h-full'>
                                <img src='/assets/images/gif/skate-man.gif'>
                                </img>
                            </div>
                            <div className='w-full h-full flex flex-col gap-4'>
                                <div className="w-full text-[29px] uppercase">
                                    Solaxy Crypto Presale
                                    <p className="text-blue-500">
                                        The Solana L2
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    {["Solana's first Layer 2 Chain", "Infinite scale", "best meme coin", "Multi-Chain Compatibility"].map((item, index) => (
                                        <div key={index} className="text-sm w-fit text-center flex justify-center items-center h-10 border-2 p-4 rounded-3xl uppercase">{item}</div>
                                    ))}
                                </div>
                                <div className="text-xl font-semibold capitalize font-sans">
                                    Solaxy is the next evolution in blockchain technology, designed to unlock the full potential of the Solana ecosystem. Experience unmatched scalability and a future-proof network built to redefine Solana's capabilities.
                                </div>
                                <div className="flex justify-start items-center mt-8 gap-3">
                                    <div className="rounded-full border-2 bg-blue-400 p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-xl bg-gradient-to-b from-[#7082f9e6] to-[#11c3f0da] bg-clip-text text-transparent"
                                        style={{
                                            filter:
                                                "drop-shadow(-2px -2px 0px #fff) drop-shadow(2px -2px 0px #fff) drop-shadow(2px 2px 0px #fff) drop-shadow(-2px 2px 0px #fff)",
                                        }}>
                                        CHAIN STATUS: LAUNCH IMMINENT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col relative justify-start p-2">
                <div className="border-1 border-b-0 border-gray-500 w-full h-fit p-4 bg-black relative ">
                    <img
                        className="absolute -left-10 -top-7 w-24 h-24 object-contain "
                        src="/assets/images/png/sidebar-icon.png"
                    ></img>
                    <div
                        className="flex flex-col absolute -z-1 -right-12 top-9 justify-center py-8 pl-10 gap-2  bg-gradient-to-b from-cyan-400 via-blue-400 to-violet-500"
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
                    <p className="text-2xl px-10 text-center bg-gradient-to-b from-blue-500 to-blue-800 bg-clip-text text-transparent tracking-tighter mb-3">
                        LAST CHANCE TO BUY $SOLX
                    </p>
                    <div className="w-full h-32 rounded-md p-1 overflow-hidden gap-2 flex flex-col  bg-radial-[at_50%_60%] from-white to-red-600">
                        <p className="text-center text-xl ">PRESALE ENDS IN</p>
                        <div className="bg-[url('/assets/images/gif/snow-bg.gif')] w-full h-2/3 bg-blend-luminosity">
                            <CountdownTimer targetDate={"2025-06-17T10:00:00"} />
                        </div>
                    </div>
                    <div className="w-full h-32 p-2 flex flex-col gap-1">
                        <p className="text-center text-xs">
                            USDT RAISED: $49,543,774.94 / $50,394,331
                        </p>
                        <ProgressBar raised={39545687.77} goal={50394331} />
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-center text-xs">
                                    YOUR PURCHASED SOLX = 0
                                </p>
                                <button
                                    onClick={() =>
                                        Modal.open(
                                            <div className="flex flex-col justify-center text-white items-center gap-4 p-6 bg-blue-950 rounded-3xl">
                                                <div className="bg-blue-900 rounded-full w-fit h-fit text-7xl  font-bold text-white px-10 p-4">
                                                    !
                                                </div>
                                                <p className="text-sm text-center">
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
                                <p className="text-center text-xs">
                                    YOUR STAKEABLE SOLX = 0
                                </p>
                                <button
                                    onClick={() =>
                                        Modal.open(
                                            <div className="flex flex-col justify-center text-white items-center gap-4 p-6 bg-blue-950 rounded-3xl">
                                                <div className="bg-blue-900 rounded-full w-fit h-fit text-7xl  font-bold text-white px-10 p-4">
                                                    !
                                                </div>
                                                <p className="text-sm text-center">
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
                            <div className="bg-black text-white px-3 text-xs absolute">
                                1 SOLX = $0.001758
                            </div>
                            <div className="w-full border-1 border-white"></div>
                        </div>
                        <div className="w-full h-fit flex gap-2 justify-around">
                            <button className=" text-black px-2 py-2.5 w-42 text-xs  rounded-xl bg-gradient-to-b from-lime-300 to-green-500 shadow-md border border-white/40">
                                BUY WITH CARD
                            </button>
                            <button className="px-2 py-2.5 rounded-xl w-42 text-xs bg-gradient-to-b from-cyan-400 via-blue-400 to-violet-500 shadow-md border border-white/40">
                                BUY WITH CRYPTO
                            </button>
                        </div>
                        <p className="uppercase text-xs text-center hover:underline hover:cursor-pointer ">
                            Don't Have a Wallet?
                        </p>
                    </div>
                </div>
                <div className="relative w-full h-14 border-1 border-t-0 border-gray-500 bg-gray-500 div-cut-bottom-2">
                    <div className="absolute w-full h-full bg-black div-cut-bottom-2">
                        <a className="relative w-full h-full flex justify-start" href="https://web3paymentsolutions.io/">
                            <img src="/assets/images/png/web3payments.png" width={150} height={150} className="absolute bottom-4 left-4" ></img>
                        </a>
                    </div>
                </div>
                <div className="w-full h-13 flex justify-end absolute bottom-20 right-5">
                    <button className="w-fit h-fit gap-2 flex justify-around items-center text-xs bg-gradient-to-b from-cyan-400 via-blue-400 to-violet-500 py-2 px-4 rounded-xl shadow-[0_0_10px_2px_rgba(34,211,238,0.6),0_0_20px_4px_rgba(96,165,250,0.5),0_0_30px_6px_rgba(139,92,246,0.4)]">
                        <img src="/assets/images/png/solana.png" width={30} height={30}></img>
                        Buy With SOlana
                    </button>
                </div>
            </div>
        </div>
    );
}
