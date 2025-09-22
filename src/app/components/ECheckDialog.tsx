import { useState } from "react";
import { X, DollarSign, Wallet, Shield, Clock, } from "lucide-react";
import { Plus } from "lucide-react";

interface ECheckDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const ECheckDialog = ({ isOpen, onClose }: ECheckDialogProps) => {
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    if (!isOpen) return null;

    const isDisabled = amount.trim() === "" || parseFloat(amount) <= 0 || address.trim() === "";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-slate-800 rounded-2xl shadow-2xl w-[500px] max-w-full p-8 relative border border-gray-700">


                {/* Header */}
                <div className="flex items-center gap-2 justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Wallet className="w-7 h-7 text-blue-500" />
                        <h2 className="text-xl font-bold text-gray-100">Transfer to eCheck</h2>
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

                {/* Balance Info */}
                <div className="bg-gray-800 rounded-xl p-6 mb-6 flex items-center gap-4">
                    <DollarSign className="size-12 text-blue-400" />
                    <div>
                        <div className="text-gray-400">Available Balance</div>
                        <div className="text-2xl font-extrabold text-white">$4,750</div>
                    </div>

                </div>

                {/* Transfer Amount */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">
                        Transfer Amount
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            $
                        </span>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-xl px-4 py-3 pl-8 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="0.00"
                        />
                    </div>
                </div>

                {/* Mailing Address */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-white mb-2">
                        Mailing Address
                    </label>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="Enter your mailing address"
                        rows={3}
                    />
                </div>

                {/* Info */}
                <div className="mb-8 space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>Delivery time: 5-7 business days</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="size-4" />
                        <span>Secure, encrypted transfer</span>
                    </div>
                </div>

                {/* Transfer Button */}
                <button
                    disabled={isDisabled}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors
                       ${isDisabled
                            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-500 text-white"
                        }`}
                >
                    Transfer Funds <span className="text-xl">→</span>
                </button>
            </div >
        </div >
    );
};

export default ECheckDialog;