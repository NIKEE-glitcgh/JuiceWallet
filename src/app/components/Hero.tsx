import { ArrowRight, CheckCircle2, RefreshCw, Wallet } from "lucide-react";
import { useState } from "react";
import TransferDialog from "./TransferDialog";
import Image from "next/image";

const Hero = () => {
    const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);

    return (
        <>
            {/* Hero Header */}
            <div className="text-center mb-12 px-4 sm:px-6 md:px-0">
                <Image
                    src="/logo.png"
                    alt="JUICE"
                    width={1000}
                    height={1000}
                    className="mx-auto mt-12 mb-6 w-32 sm:w-40 md:w-48 h-auto"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-blue-600 mb-4 tracking-tight">
                    Claims Wallet Max
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-20 md:px-40 text-gray-600 dark:text-gray-300 mx-auto">
                    Access your funds instantly and choose how you want to receive your
                    payment. Enhanced features with maximum flexibility.
                </p>
            </div>

            {/* Wallet Card */}
            <div className="flex justify-center mb-12 px-4">
                <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl p-6 sm:p-10 md:p-14 w-full max-w-5xl h-auto md:h-[400px] flex flex-col justify-center relative"
                    style={{ boxShadow: "0 8px 32px 0 rgba(60,80,220,0.18)" }}
                >
                    {/* Top section: title and button */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
                        <div>
                            <div className="flex items-center gap-2">
                                <Wallet />
                                <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-indigo-800 bg-clip-text text-transparent">
                                    Your Claims Wallet
                                </span>
                            </div>
                            <div className="text-xs sm:text-sm md:text-base text-white/80 mt-1">
                                Claim #CLM-2024-0078
                            </div>
                        </div>

                        <button
                            className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl cursor-pointer px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-2 font-semibold shadow transition"
                            onClick={() => setIsTransferDialogOpen(true)}
                        >
                            <RefreshCw />
                            Refresh
                        </button>
                    </div>

                    {/* Middle section: balance */}
                    <div className="flex flex-col items-center justify-center mt-6 md:mt-10">
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-2">
                            Available Balance
                        </div>
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            $4,750
                        </div>
                        <div className="text-xs sm:text-sm md:text-base text-white/80 mt-2 flex items-center gap-2 text-center">
                            <CheckCircle2 size={16} />
                            Funds ready for immediate use
                        </div>
                        <button className="mt-6 md:mt-8 mx-auto flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shadow animate-pulse transition-transform duration-200 ease-in-out">
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Transfer Dialog Component */}
            {isTransferDialogOpen && (
                <TransferDialog onClose={() => setIsTransferDialogOpen(false)} />
            )}
        </>
    );
};

export default Hero;
