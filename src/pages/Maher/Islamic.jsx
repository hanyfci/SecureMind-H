import React from 'react';

const Islamic = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Islamic Research</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Current Studies</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium">Islamic Finance</h3>
                            <p className="text-gray-600 mt-2">Research on modern Islamic banking and finance systems</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium">Digital Ethics</h3>
                            <p className="text-gray-600 mt-2">Islamic perspectives on digital technology and AI ethics</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Publications</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-600">Recent publications and research papers will appear here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Islamic;