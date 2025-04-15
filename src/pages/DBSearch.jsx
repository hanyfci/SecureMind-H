import { useState } from 'react';

export default function DBSearch() {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        try {
            // TODO: Implement API call to generate SQL and search DB
            console.log('Searching with:', searchText);
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Database Search</h1>
            <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Enter your search query:</label>
                    <textarea 
                        className="border rounded-lg p-2 min-h-[100px]"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Describe what you want to search for..."
                    />
                </div>
                <button 
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Generate SQL & Search
                </button>
                {result && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Results:</h2>
                        <pre className="bg-gray-100 p-2 rounded mt-2">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
}