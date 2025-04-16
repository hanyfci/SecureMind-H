import React from 'react';

const Robotics = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Robotics Research</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Active Research Areas</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium">AI-Powered Robotics</h3>
                            <p className="text-gray-600 mt-2">Integration of AI systems in robotic applications</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium">Human-Robot Interaction</h3>
                            <p className="text-gray-600 mt-2">Research on improving human-robot collaboration</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Lab Projects</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-600">Current robotics lab projects and demonstrations will appear here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Robotics;