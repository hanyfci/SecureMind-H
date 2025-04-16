import React from 'react';

const DailyReport = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Daily Report</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Today's Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Total Activities</h3>
                        <p className="text-2xl font-bold text-blue-600">0</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Completed Tasks</h3>
                        <p className="text-2xl font-bold text-green-600">0</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Active Users</h3>
                        <p className="text-2xl font-bold text-purple-600">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyReport;