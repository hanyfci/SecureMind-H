import { useState } from 'react';

export default function Settings() {
    const [modelType, setModelType] = useState('gpt-3.5-turbo');
    const [temperature, setTemperature] = useState(0.7);
    const [maxTokens, setMaxTokens] = useState(2048);
    const [language, setLanguage] = useState('English');

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold">AI Settings</h1>
            
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-3">Model Configuration</h2>
                    <select 
                        className="w-full p-2 border rounded"
                        value={modelType}
                        onChange={(e) => setModelType(e.target.value)}
                    >
                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                        <option value="gpt-4">GPT-4</option>
                        <option value="claude">Claude</option>
                    </select>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-3">Model Parameters</h2>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm mb-1">Temperature: {temperature}</label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={temperature}
                                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Max Tokens: {maxTokens}</label>
                            <input
                                type="range"
                                min="256"
                                max="4096"
                                step="256"
                                value={maxTokens}
                                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-3">Language Preferences</h2>
                    <select 
                        className="w-full p-2 border rounded"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </div>

                <button 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => alert('Settings saved!')}
                >
                    Save Settings
                </button>
            </div>
        </div>
    );
}