const Table = () => {
    return (
        <div className="mb-12 w-full max-w-5xl mx-auto p-5 md:p-8 rounded-2xl bg-gray-100 dark:bg-slate-800 ">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Recent Transactions
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full rounded-xl shadow-sm">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
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
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
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
                                <span className="dark:bg-green-900/30 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                                    Completed
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                                Virtual Card
                            </td>
                        </tr>
                        <tr>
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
                                <span className="dark:bg-green-900/30 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
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
                                <span className="dark:bg-green-900/30 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
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

    )
}

export default Table