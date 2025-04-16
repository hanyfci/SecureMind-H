import React from 'react';

const MonthlyReport = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Monthly Report</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Monthly Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Total Projects</h3>
                        <p className="text-2xl font-bold text-blue-600">0</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Completed Projects</h3>
                        <p className="text-2xl font-bold text-green-600">0</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Ongoing Projects</h3>
                        <p className="text-2xl font-bold text-yellow-600">0</p>
                    </div>
                </div>
                <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Monthly progress chart will appear here</p>
                </div>
            </div>
        </div>
    );
};

export default MonthlyReport;