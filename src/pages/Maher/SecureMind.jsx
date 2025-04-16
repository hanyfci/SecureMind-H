import React from 'react';

const SecureMind = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">SecureMind Research</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Current Projects</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium">AI Security Analysis</h3>
                            <p className="text-gray-600 mt-2">Research on implementing secure AI systems</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium">Data Protection</h3>
                            <p className="text-gray-600 mt-2">Advanced data protection mechanisms</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Research Progress</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-600">Research statistics and progress charts will appear here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecureMind;