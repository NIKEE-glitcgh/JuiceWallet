import { Shield, Globe, Clock } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Secure Access",
        description: "Bank-grade security protecting your virtual card details",
    },
    {
        icon: Globe,
        title: "Global Acceptance",
        description: "Use your virtual card anywhere Mastercard is accepted",
    },
    {
        icon: Clock,
        title: "Real-time Updates",
        description: "Track transactions and balance updates instantly",
    },
];

export default function FeatureCards() {
    return (
        <div className="mb-12 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className="rounded-2xl bg-gray-100 dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400">
                            <Icon className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
