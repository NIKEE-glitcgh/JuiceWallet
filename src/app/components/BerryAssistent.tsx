import React, { useState } from 'react'

const BerryAssistent = () => {
    const [isBerryOpen, setIsBerryOpen] = useState(false)
    return (
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
    )
}

export default BerryAssistent