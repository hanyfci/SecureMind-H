import React, { useState, useRef } from 'react';

const Summarize = () => {
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const summaryRef = useRef(null);

    const handleFileUpload = async (event) => {
        const uploadedFile = event.target.files[0];
        if (!uploadedFile) return;

        setFile(uploadedFile);
        const formData = new FormData();
        formData.append('file', uploadedFile);

        try {
            const response = await fetch('http://127.0.0.1:5001/uploadfile/', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setSummary(data.message);
        } catch (error) {
            setSummary(`Error uploading file: ${error.message}`);
        }
    };

    const handleSummarize = async () => {
        if (!file) return;
        setLoading(true);
        setSummary('');

        try {
            const response = await fetch('http://127.0.0.1:5001/summarizeLLM', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value, { stream: true });
                setSummary(prev => prev + chunk);
                
                if (summaryRef.current) {
                    summaryRef.current.scrollTop = summaryRef.current.scrollHeight;
                }
            }
        } catch (error) {
            setSummary(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const clearSummary = () => {
        setSummary('');
        setFile(null);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Text Summarizer</h1>
            
            <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="fileInput"
                        accept=".txt,.doc,.docx,.pdf"
                    />
                    <label htmlFor="fileInput" className="cursor-pointer">
                        <div className="text-gray-600">
                            {file ? file.name : 'Drop your file here or click to upload'}
                        </div>
                    </label>
                </div>

                <div className="flex space-x-2">
                    <button
                        onClick={handleSummarize}
                        disabled={!file || loading}
                        className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Summarizing...' : 'Summarize'}
                    </button>
                    
                    <button
                        onClick={clearSummary}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    >
                        Clear
                    </button>
                </div>

                {summary && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Summary:</h2>
                        <div 
                            ref={summaryRef}
                            className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-auto"
                            style={{ direction: 'rtl', textAlign: 'right' }}
                        >
                            {summary}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Summarize;