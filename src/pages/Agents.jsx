import React from 'react';

const AgentCard = ({ name, description, status }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${
                status === 'active' ? 'bg-green-100 text-green-800' : 
                status === 'idle' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-gray-100 text-gray-800'
            }`}>
                {status}
            </span>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Start
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                Configure
            </button>
        </div>
    </div>
);

const Agents = () => {
    const agentsList = [
        {
            name: "Research Assistant",
            description: "Helps with academic research, paper analysis, and literature review",
            status: "active"
        },
        {
            name: "Data Analyzer",
            description: "Processes and analyzes large datasets, generates insights and visualizations",
            status: "idle"
        },
        {
            name: "Code Assistant",
            description: "Assists with code review, debugging, and optimization",
            status: "active"
        },
        {
            name: "Document Processor",
            description: "Handles document parsing, summarization, and information extraction",
            status: "offline"
        }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">AI Agents</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agentsList.map((agent, index) => (
                    <AgentCard key={index} {...agent} />
                ))}
            </div>
        </div>
    );
};

export default Agents;