import { ArrowRight, Clock, DollarSign, Shield, Wallet } from 'lucide-react';
import React, { useState } from 'react';

const TransferDialog = ({ onClose }: { onClose: () => void }) => {
    const [amount, setAmount] = useState(''); 

    const isDisabled = !amount || parseFloat(amount) <= 0; 

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
            <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-2xl w-[400px] max-w-full p-8 relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    aria-label="Close"
                    onClick={() => onClose()}
                >
                    &times;
                </button>

                <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400">
                    <Wallet />
                    <h2 className="text-xl font-bold text-black dark:text-white">
                        Transfer to Virtual Card
                    </h2>
                </div>

                <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-3 mb-6 text-blue-700 dark:text-blue-400">
                    <DollarSign className='size-10' />
                    <div>
                        <div className="text-sm text-gray-500">Available Balance</div>
                        <div className="text-2xl font-bold text-white">$4,750</div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                        Transfer Amount
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border rounded-lg px-3 py-3 dark:bg-gray-700 text-white text-base focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="$ 0.00"
                    />
                </div>

                <div className="mb-6 space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className='size-4 text-gray-500' />
                        Available immediately
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className='size-4 text-gray-500' />
                        Secure, encrypted transfer
                    </div>
                </div>

                <button
                    disabled={isDisabled}
                    className={`w-full font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2
            ${isDisabled
                            ? 'bg-gray-300 text-gray-400 cursor-not-allowed dark:bg-slate-600 dark:text-gray-500'
                            : 'bg-gray-200 dark:bg-blue-700 hover:bg-blue-600 hover:dark:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-200'
                        }`}
                >
                    Transfer Funds
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TransferDialog;
