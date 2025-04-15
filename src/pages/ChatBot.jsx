import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionID] = useState(() => Math.random().toString(36).substring(7));

    const getBotResponse = async (userMessage) => {
        try {
            const response = await fetch(`http://127.0.0.1:5001/chatLLM/?query=${encodeURIComponent(userMessage)}&session_id=${encodeURIComponent(sessionID)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let botMessage = '';

            setMessages(prev => [...prev, { text: '', isUser: false, id: Date.now() }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                botMessage += decoder.decode(value, { stream: true });
                setMessages(prev => prev.map((msg, idx) => 
                    idx === prev.length - 1 ? { ...msg, text: botMessage } : msg
                ));
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { text: 'Sorry, I encountered an error.', isUser: false }]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages(prev => [...prev, { text: input, isUser: true }]);
            setInput('');
            setIsLoading(true);
            
            await getBotResponse(input);
            setIsLoading(false);
        }
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();
        const lineHeight = 10;
        let yPos = 20;

        doc.setFontSize(16);
        doc.text('Chat History', 20, yPos);
        yPos += lineHeight * 2;

        doc.setFontSize(12);
        messages.forEach((message) => {
            const prefix = message.isUser ? 'You: ' : 'Bot: ';
            const text = prefix + message.text;
            
            // Split text into lines with max width
            const lines = doc.splitTextToSize(text, 170);
            
            if (yPos + (lines.length * lineHeight) > 280) {
                doc.addPage();
                yPos = 20;
            }

            // Use basic text rendering without special font handling
            doc.text(lines, 20, yPos);
            yPos += lines.length * lineHeight + 5;
        });

        doc.save('chat-history.pdf');
    };

    return (
        <div className="flex flex-col h-[90vh] bg-gray-100">
            <div className="flex-1 p-3 max-w-4xl mx-auto w-full">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">AI Assistant</h1>
                    <div className="space-x-2">
                        <button
                            onClick={handleClearChat}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Clear Chat
                        </button>
                        <button
                            onClick={handleExportPDF}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Export PDF
                        </button>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md h-[calc(95vh-200px)] flex flex-col">
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-3 rounded-lg ${
                                    message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <form onSubmit={handleSubmit} className="border-t p-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message here.."
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className={`${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-lg transition-colors`}
                                disabled={isLoading || !input.trim()}
                            >
                                {isLoading ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;