"use client";

import { Header } from "../components/Header";
import { useState } from "react";
import { HelpSidebarBase } from "../components/HelpSidebarBase";
import Image from "next/image";
import { ArrowRight, CheckCircle2, RefreshCw, CreditCard, Landmark, Mail, Clock, Wallet } from "lucide-react";
import Table from "./components/Table";
import FeatureCards from "./components/Features";
import { Footer } from "@/components/Footer";
import Hero from "./components/Hero";
import TransferDialog from "./components/TransferDialog";
import ECheckDialog from "./components/ECheckDialog";
import ACHTransferCard from "./components/ACHTransferCard";
import DirectTransferCard from "./components/DirectTransferCard";
import BerryAssistent from "./components/BerryAssistent";

const helpContent = {
  title: "Claims Wallet Plus Help",
  description:
    "Claims Wallet Plus offers enhanced features including a virtual Mastercard and mobile wallet integration for your claim funds.",
  features: [
    {
      title: "Virtual Mastercard",
      description:
        "Access a virtual Mastercard that can be used for online and in-store purchases wherever Mastercard is accepted.",
    },
    {
      title: "Mobile Wallet Integration",
      description:
        "Add your virtual card to Apple Pay, Google Pay, or Samsung Pay for contactless payments.",
    },
    {
      title: "Transaction History",
      description: "View and track all your claim transactions.",
    },
  ],
};

export default function Home() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [isDirectDialogOpen, setIsDirectDialogOpen] = useState(false);
  const [isAchDialogOpen, setIsAchDialogOpen] = useState(false);
  const [isEcheckDialogOpen, setIsEcheckDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header />

      {/* info button */}
      <div className="fixed top-1/6 right-1 transform -rotate-90 cursor-pointer bg-slate-800 px-5 text-lg py-1 text-gray-400 rounded-md border border-white/10 ">
        INFO
      </div>

      <main className="flex-1 container mx-auto px-4 pt-24 pb-8">

        {/* Wallet Card Section (Hero) */}
        <Hero />


        {/* Payment Method Cards Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text"
          >
            Select Payment Method
          </h2>

          <div className="flex flex-col gap-10 items-start w-full max-w-5xl mx-auto ">

            {/* Virtual Mastercard */}
            <div className="w-full border-2 border-blue-500/30 rounded-xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 bg-white dark:bg-slate-800 hover:dark:bg-slate-700 transition-colors duration-300 relative">

              {/* Card Section */}
              <div className="flex-none">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl p-4 w-56 h-32 sm:w-64 sm:h-36 flex flex-col justify-between shadow-lg border border-blue-300/40">

                  {/* Logo */}
                  <div>
                    <Image
                      src="/logo.png"
                      width={90}
                      height={30}
                      alt="logo"
                      className="w-[80px] sm:w-[90px] h-auto object-contain"
                    />
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Card number */}
                    <span className="text-white text-sm sm:text-base font-medium tracking-widest">
                      **** 4444
                    </span>

                    {/* Overlapping circles */}
                    <div className="flex -space-x-2">
                      <span className="bg-red-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-block opacity-90"></span>
                      <span className="bg-yellow-400 rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-block opacity-90"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                    <CreditCard className="text-blue-500 size-10 bg-slate-800 p-2 rounded-full" />
                    Virtual Mastercard
                  </span>
                  <span className="bg-green-400/20 text-green-500/80 text-xs  px-3 py-1 font-medium rounded-full self-center md:self-start">
                    INSTANT
                  </span>
                </div>

                <div className="text-gray-600 dark:text-gray-300 mb-3 text-sm sm:text-base">
                  Get instant access to your funds with a virtual Mastercard
                  that can be used anywhere online or added to your mobile
                  wallet.
                </div>

                <button
                  className="text-blue-600 cursor-pointer font-medium flex items-center justify-center md:justify-start gap-2 group"
                  onClick={() => setIsTransferDialogOpen(true)}
                >
                  Select Virtual Card
                  <ArrowRight className="size-5 group-hover:translate-x-1 duration-300" />
                </button>
              </div>
            </div>

            {/* Direct to Visa/Mastercard & ACH to Bank */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              {/* Visa/Mastercard */}
              <div className="flex-1 border-1 border-white/10 rounded-xl shadow-md hover:shadow-lg p-6 sm:p-8 bg-white dark:bg-gray-900 flex flex-col justify-between transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-green-500/20 text-green-700 p-2 rounded-full">
                    <CreditCard className="w-5 h-5" />
                  </span>
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    Direct to Visa/Mastercard
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 my-3 text-sm">
                  Send money to your existing credit or debit card
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 10–30 minutes
                  </span>
                  <button
                    className="text-blue-600 cursor-pointer flex items-center gap-2 group  font-medium"
                    onClick={() => setIsDirectDialogOpen(true)}
                  >
                    Select <ArrowRight className="size-5 group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </div>

              {/* ACH to Bank */}
              <div className="flex-1 border-1 border-white/10 rounded-xl shadow-md hover:shadow-lg p-6 sm:p-8 bg-white dark:bg-gray-900 flex flex-col justify-between transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-green-500/20 text-green-700 p-2 rounded-full">
                    <Landmark className="w-5 h-5" />
                  </span>
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    ACH to Bank
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 my-3 text-sm">
                  Transfer directly to your bank account
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 1-3 business days
                  </span>
                  <button
                    className="text-blue-600 cursor-pointer flex items-center gap-2 group font-medium"
                    onClick={() => setIsAchDialogOpen(true)}
                  >
                    Select <ArrowRight className="size-5 group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* eCheck */}
            <div className="w-full border-1 border-white/10 md:w-[49%]  rounded-xl shadow-md hover:shadow-lg p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-gray-900 transition-shadow duration-300 mt-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-500/20 text-green-700 p-2 rounded-full">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="font-bold text-lg text-gray-900 dark:text-white">
                  eCheck
                </span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 my-3 text-sm">
                Traditional check sent to your mailing address
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 5-7 business days
                </span>
                <button
                  className="text-blue-600 cursor-pointer  font-medium flex items-center gap-2 group"
                  onClick={() => setIsEcheckDialogOpen(true)}
                >
                  Select <ArrowRight className="size-5 group-hover:translate-x-1 duration-300" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* Recent Transactions Table */}
        <Table />

        {/* Info Cards Section */}
        <FeatureCards />

      </main>
      {/* Footer Section */}
      <Footer />

      {/* Berry Assistant Bird Icon & Chatbot Popup */}
      <BerryAssistent />

      <HelpSidebarBase
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        content={helpContent}
      />

      {/* Transfer Dialog Component */}
      {isTransferDialogOpen && (
        <TransferDialog onClose={() => setIsTransferDialogOpen(false)} />
      )}

      {/* Direct to Visa/Mastercard Dialog Component */}
      {isDirectDialogOpen && (
        <DirectTransferCard isOpen={isDirectDialogOpen} onClose={() => setIsDirectDialogOpen(false)} />
      )}
      {/* ACH to Bank Dialog Component */}
      {isAchDialogOpen && (
        <ACHTransferCard isOpen={isAchDialogOpen} onClose={() => setIsAchDialogOpen(false)} />
      )}
      {/* eCheck Dialog Component */}
      {isEcheckDialogOpen && (
        <ECheckDialog isOpen={isEcheckDialogOpen} onClose={() => setIsEcheckDialogOpen(false)} />
      )}
    </div>
  );
}
