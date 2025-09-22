import React, { useState } from 'react';
import { X, DollarSign, ArrowRight, Clock, Shield, Wallet } from 'lucide-react';

type ACHTransferCardProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ACHTransferCard({ isOpen, onClose }: ACHTransferCardProps) {
    const [transferAmount, setTransferAmount] = useState('');
    const [bankName, setBankName] = useState('');
    const [routingNumber, setRoutingNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const isDisabled = transferAmount.trim() === '' || parseFloat(transferAmount) <= 0;

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="bg-gray-800 rounded-2xl shadow-2xl w-[500px] max-w-full p-8 relative border border-gray-700">

                <div className="flex items-center gap-2 justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Wallet className="w-7 h-7 text-blue-500" />
                        <h2 className="text-xl font-bold text-gray-100">Transfer to ACH to Bank</h2>
                    </div>
                    {/* Close Button */}
                    <button
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                        aria-label="Close"
                        onClick={onClose}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="bg-blue-900/40 border border-blue-700/50 rounded-lg p-4 flex items-center gap-3 mb-6 text-blue-400">
                    <DollarSign size={28} />
                    <div>
                        <div className="text-xs text-gray-400">Available Balance</div>
                        <div className="text-2xl font-bold text-white">$4,750</div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Transfer Amount
                    </label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        className="w-full border border-gray-600 bg-gray-700 rounded-lg px-3 py-2 text-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                        placeholder="$ 0.00"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Bank Name
                    </label>
                    <input
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full border border-gray-600 bg-gray-700 rounded-lg px-3 py-2 text-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                        placeholder="Enter bank name"
                    />
                </div>

                <div className="mb-4 flex gap-2">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Routing Number
                        </label>
                        <input
                            type="text"
                            value={routingNumber}
                            onChange={(e) => setRoutingNumber(e.target.value)}
                            className="w-full border border-gray-600 bg-gray-700 rounded-lg px-3 py-2 text-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            placeholder="9 digits"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Account Number
                        </label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="w-full border border-gray-600 bg-gray-700 rounded-lg px-3 py-2 text-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            placeholder="Account number"
                        />
                    </div>
                </div>

                <div className="mb-6 space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock size={12} />
                        Processing time: 1-3 business days
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Shield size={12} />
                        Secure, encrypted transfer
                    </div>
                </div>

                <button
                    disabled={isDisabled}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${
                        isDisabled
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                >
                    Transfer Funds
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}