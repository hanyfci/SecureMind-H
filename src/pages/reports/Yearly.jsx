import React from 'react';

const YearlyReport = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Yearly Report</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Annual Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Total Revenue</h3>
                        <p className="text-2xl font-bold text-blue-600">$0</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Projects Delivered</h3>
                        <p className="text-2xl font-bold text-green-600">0</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">New Clients</h3>
                        <p className="text-2xl font-bold text-purple-600">0</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Team Growth</h3>
                        <p className="text-2xl font-bold text-yellow-600">0%</p>
                    </div>
                </div>
                <div className="w-full h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Annual performance chart will appear here</p>
                </div>
            </div>
        </div>
    );
};

export default YearlyReport;