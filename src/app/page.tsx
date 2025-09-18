"use client";

import { Header } from "../components/Header";
import { useState } from "react";
import { HelpSidebarBase } from "../components/HelpSidebarBase";
import Image from "next/image";

export default function Home() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isBerryOpen, setIsBerryOpen] = useState(false);
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [isDirectDialogOpen, setIsDirectDialogOpen] = useState(false);
  const [isAchDialogOpen, setIsAchDialogOpen] = useState(false);
  const [isEcheckDialogOpen, setIsEcheckDialogOpen] = useState(false);
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
  return (
  <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
        {/* Claims Wallet Max Title & Description */}
        <div className="text-center mb-12">
          <Image
            src="https://juiceclaims.com/Juice-2024-Logo-2000x800.png"
            alt="JUICE"
            width={1000}
            height={1000}
            className="mx-auto mt-12 mb-8 w-48 h-auto"
          />
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
            Claims Wallet Max
          </h1>
          <p className="text-lg px-40 mx-20 text-gray-600 dark:text-gray-300">
            Access your funds instantly and choose how you want to receive your
            payment. Enhanced features with maximum flexibility.
          </p>
        </div>
        {/* Wallet Card Section */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl p-14 w-full max-w-5xl h-[400px] relative flex flex-col justify-center"
            style={{ boxShadow: "0 8px 32px 0 rgba(60,80,220,0.18)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-white opacity-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13h6v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v2"
                    />
                  </svg>
                  <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-indigo-800 bg-clip-text text-transparent">
                    Your Claims Wallet
                  </span>
                </div>
                <div className="text-base text-white/80 mt-1">
                  Claim #CLM-2024-0078
                </div>
              </div>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl cursor-pointer px-6 py-3 flex items-center gap-2 font-semibold shadow transition"
                onClick={() => setIsTransferDialogOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0115 0m-15 0a7.5 7.5 0 0015 0m-15 0v.75m15-.75v.75"
                  />
                </svg>
                Refresh
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="text-lg font-semibold text-white/90 mb-2">
                Available Balance
              </div>
              <div className="text-6xl font-extrabold tracking-tight">
                $4,750
              </div>
              <div className="text-base text-white/80 mt-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-white/80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Funds ready for immediate use
              </div>
              <button className="mt-8 mx-auto flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 w-16 h-16 shadow transition-transform duration-200 hover:scale-125 active:scale-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h8m0 0l-4-4m4 4l-4 4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Payment Method Cards Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
            Select Payment Method
          </h2>
          <div className="flex flex-col gap-10 items-start w-full max-w-5xl mx-auto">
            {/* Virtual Mastercard */}
            <div className="w-full max-w-full border rounded-xl shadow-sm p-10 flex items-center gap-6 bg-white dark:bg-gray-900 relative">
              <div className="flex-none">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl p-4 w-40 h-28 flex flex-col justify-between">
                  <span className="text-lg font-bold text-white">JUICE</span>
                  <span className="text-white text-sm">**** 4444</span>
                  <span className="flex gap-1">
                    <span className="bg-red-500 rounded-full w-4 h-4 inline-block"></span>
                    <span className="bg-yellow-400 rounded-full w-4 h-4 inline-block"></span>
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    Virtual Mastercard
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                    INSTANT
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">
                  Get instant access to your funds with a virtual Mastercard
                  that can be used anywhere online or added to your mobile
                  wallet.
                </div>
                <button
                  className="text-blue-600 cursor-pointer hover:underline font-medium"
                  onClick={() => setIsTransferDialogOpen(true)}
                >
                  Select Virtual Card &rarr;
                </button>
              </div>
            </div>
            {/* Direct to Visa/Mastercard & ACH to Bank */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-full">
              <div className="flex-1 border rounded-xl shadow-sm p-10 bg-white dark:bg-gray-900 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-100 text-green-700 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <rect x="4" y="7" width="16" height="10" rx="2" />
                      <path d="M4 7V5a2 2 0 012-2h12a2 2 0 012 2v2" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    Direct to Visa/Mastercard
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">
                  Send money to your existing credit or debit card
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    &#128337; 10-30 minutes
                  </span>
                  <button
                    className="text-blue-600 cursor-pointer hover:underline font-medium self-end"
                    onClick={() => setIsDirectDialogOpen(true)}
                  >
                    Select &rarr;
                  </button>
                </div>
              </div>
              <div className="flex-1 border rounded-xl shadow-sm p-10 bg-white dark:bg-gray-900 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-gray-100 text-gray-700 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3 10v6a2 2 0 002 2h14a2 2 0 002-2v-6" />
                      <path d="M16 10V6a4 4 0 00-8 0v4" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    ACH to Bank
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">
                  Transfer directly to your bank account
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    &#128337; 1-3 business days
                  </span>
                  <button
                    className="text-blue-600 cursor-pointer hover:underline font-medium self-end"
                    onClick={() => setIsAchDialogOpen(true)}
                  >
                    Select &rarr;
                  </button>
                </div>
              </div>
            </div>
            {/* eCheck */}
            <div className="w-full max-w-[49%] border rounded-xl shadow-sm p-10 flex items-center gap-6 bg-white dark:bg-gray-900">
              <div className="flex-1">
                <span className="font-bold text-lg text-gray-900 dark:text-white">
                  eCheck
                </span>
                <div className="text-gray-600 dark:text-gray-300 mb-2">
                  Traditional check sent to your mailing address
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    &#128337; 5-7 business days
                  </span>
                  <button
                    className="text-blue-600 cursor-pointer hover:underline font-medium"
                    onClick={() => setIsEcheckDialogOpen(true)}
                  >
                    Select &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Transactions Table */}
        <div className="mb-12 w-full max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Date
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Description
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Amount
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Status
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Method
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    2024-03-15
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Home Depot Purchase
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    $250.00
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Virtual Card
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    2024-03-14
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Lowes Hardware
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    $175.50
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Virtual Card
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    2024-03-13
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Claim Payment
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    $5,000.00
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                    Deposit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="mb-12 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-700 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3.08A17.938 17.938 0 0012 3a17.938 17.938 0 00-7.65 13.92c-.77 1.413.192 3.08 1.732 3.08z"
                />
              </svg>
            </span>
            <h3 className="font-bold text-lg mb-2">Secure Access</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bank-grade security protecting your virtual card details
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-700 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v5l3 3"
                />
              </svg>
            </span>
            <h3 className="font-bold text-lg mb-2">Global Acceptance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use your virtual card anywhere Mastercard is accepted
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-700 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <h3 className="font-bold text-lg mb-2">Real-time Updates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track transactions and balance updates instantly
            </p>
          </div>
        </div>
      </main>
      {/* Footer Section */}
  <footer className="footer-always-light bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 mt-8">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <span className="text-gray-600 dark:text-gray-400">
              &#127760; English
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 max-w-2xl">
            Juice is not a bank. Banking services are provided by First Century
            Bank, N.A., Member FDIC, pursuant to a license from Mastercard
            International.
            <br />
            For customer service please call Juice: (855)-687-2114.
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
          <div className="text-xs text-gray-400">
            © 2025 Juice Financial. All rights reserved. Juice Insurance v1.3.0
          </div>
        </div>
      </footer>

      {/* Berry Assistant Bird Icon & Chatbot Popup */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          aria-label="Open Berry Assistant"
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 rounded-full shadow-lg w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsBerryOpen(true)}
        >
          {/* Bird SVG Icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="currentColor" className="text-white dark:text-black" />
            <path
              d="M12 28c2-6 8-10 16-8-2-4-6-6-10-6-6 0-10 4-10 10 0 2 2 4 4 4z"
              fill="currentColor"
              className="text-blue-500 dark:text-blue-300"
            />
            <ellipse cx="24" cy="18" rx="2" ry="1.5" fill="currentColor" className="text-white dark:text-black" />
            <circle cx="24" cy="18" r="0.5" fill="currentColor" className="text-blue-500 dark:text-blue-300" />
          </svg>
        </button>
        {isBerryOpen && (
          <div className="fixed bottom-8 right-8 z-50">
            <div className="w-[370px] rounded-xl shadow-2xl bg-white flex flex-col overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-blue-600 text-white px-6 py-4 text-lg font-semibold">
                Berry Assistant
                <div className="text-xs font-normal mt-1">Juice Financial</div>
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl"
                  aria-label="Close"
                  onClick={() => setIsBerryOpen(false)}
                >
                  &times;
                </button>
              </div>
              {/* Chat Area */}
              <div
                className="flex-1 px-6 py-4 space-y-3 overflow-y-auto"
                style={{ maxHeight: "340px" }}
              >
                <div className="bg-gray-100 rounded-lg p-2 text-gray-800">
                  Hello! I&apos;m Berry <span className="ml-1">👋</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-2 text-gray-800">
                  I am here to help insurance companies like yours with our
                  comprehensive solutions for managing incoming and outgoing
                  payments.
                </div>
                <div className="bg-gray-100 rounded-lg p-2 text-gray-800">
                  If you have any questions or need assistance, feel free to ask
                </div>
              </div>
              {/* Input Area */}
              <form
                className="flex items-center border-t border-gray-200 px-4 py-3 bg-white"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Type your question..."
                />
                <button
                  type="submit"
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Dropdowns and Modals Implementation */}
      {/* Payment Solutions Dropdown Example */}
      {/* Replace with your dropdown logic or component */}
      {/* Language Selector Dropdown Example */}
      {/* Replace with your dropdown logic or component */}
      <HelpSidebarBase
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        content={helpContent}
      />
      {/* Transfer Dialog Component */}
      {isTransferDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[400px] max-w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
              onClick={() => setIsTransferDialogOpen(false)}
            >
              &times;
            </button>
            <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <h2 className="text-xl font-bold text-blue-700">
                Transfer to Virtual Card
              </h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 mb-6 text-blue-700 dark:text-blue-400">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1v22M19 5H5" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Available Balance</div>
                <div className="text-2xl font-bold text-blue-700">$4,750</div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transfer Amount
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="$ 0.00"
              />
            </div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                Available immediately
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                Secure, encrypted transfer
              </div>
            </div>
            <button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:dark:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-200 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
              Transfer Funds
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* Direct to Visa/Mastercard Dialog Component */}
      {isDirectDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[400px] max-w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
              onClick={() => setIsDirectDialogOpen(false)}
            >
              &times;
            </button>
            <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <h2 className="text-xl font-bold text-blue-700">
                Transfer to Direct to Visa/Mastercard
              </h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 mb-6 text-blue-700 dark:text-blue-400">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1v22M19 5H5" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Available Balance</div>
                <div className="text-2xl font-bold text-blue-700">$4,750</div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transfer Amount
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="$ 0.00"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Card number"
              />
            </div>
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Billing zip code"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                Typically takes 10-30 minutes
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                Secure, encrypted transfer
              </div>
            </div>
            <button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:dark:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-200 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
              Transfer Funds
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* ACH to Bank Dialog Component */}
      {isAchDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[400px] max-w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
              onClick={() => setIsAchDialogOpen(false)}
            >
              &times;
            </button>
            <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <h2 className="text-xl font-bold text-blue-700">
                Transfer to ACH to Bank
              </h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 mb-6 text-blue-700 dark:text-blue-400">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1v22M19 5H5" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Available Balance</div>
                <div className="text-2xl font-bold text-blue-700">$4,750</div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transfer Amount
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="$ 0.00"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter bank name"
              />
            </div>
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Routing Number
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="9 digits"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Account number"
                />
              </div>
            </div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                Processing time: 1-3 business days
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                Secure, encrypted transfer
              </div>
            </div>
            <button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:dark:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-200 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
              Transfer Funds
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* eCheck Dialog Component */}
      {isEcheckDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[400px] max-w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
              onClick={() => setIsEcheckDialogOpen(false)}
            >
              &times;
            </button>
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2e59e8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <h2 className="text-xl font-bold text-blue-700">
                Transfer to eCheck
              </h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2e59e8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1v22M19 5H5" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Available Balance</div>
                <div className="text-2xl font-bold text-blue-700">$4,750</div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transfer Amount
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="$ 0.00"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mailing Address
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your mailing address"
                rows={2}
              />
            </div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                Delivery time: 5-7 business days
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                Secure, encrypted transfer
              </div>
            </div>
            <button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:dark:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-200 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
              Transfer Funds
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
