'use client';

import React, { useState } from 'react';
import { useLoanOfficer } from '@/lib/LoanOfficerContext';
import { searchLoanOfficers } from '@/lib/mockData';
import { useRouter } from 'next/navigation';
import { ChatMessage } from '@/lib/types';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi! I\'m here to help you find the perfect mortgage solution. Have you worked with one of our loan officers before?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showLOSearch, setShowLOSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedLoanOfficer, setSelectedLoanOfficer } = useLoanOfficer();
  const router = useRouter();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Great! Let me help you with that. Would you like to search for a specific loan officer, or shall we proceed with finding the best match for your needs?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleLOSearch = () => {
    const results = searchLoanOfficers(searchQuery);
    if (results.length > 0) {
      setSelectedLoanOfficer(results[0]);
      router.push(`/loan-officer/${results[0].id}`);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-all duration-200 z-50 flex items-center gap-2"
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="font-semibold">Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Chat with us</h3>
              <p className="text-sm text-primary-100">
                {selectedLoanOfficer
                  ? `Connected with ${selectedLoanOfficer.name}`
                  : 'We\'re here to help'}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary-100"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* LO Search Interface */}
            {showLOSearch && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  Search for your loan officer:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter loan officer name..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    onClick={handleLOSearch}
                    className="bg-primary-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-700"
                  >
                    Search
                  </button>
                </div>
                <button
                  onClick={() => setShowLOSearch(false)}
                  className="text-sm text-gray-600 mt-2 hover:text-gray-900"
                >
                  Skip this step
                </button>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2 mb-3 flex-wrap">
              <button
                onClick={() => setShowLOSearch(!showLOSearch)}
                className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100"
              >
                Find Loan Officer
              </button>
              <button
                onClick={() => router.push('/#lead-form')}
                className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-colors"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
