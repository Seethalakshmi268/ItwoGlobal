import React, { useState, useEffect } from 'react';
import { DocumentTextIcon } from '@heroicons/react/outline';

const Dashboard = ({ userName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  // Load saved notes from localStorage when the component mounts
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    setSavedNotes(notes);
  }, []);

  // Save notes to localStorage when savedNotes changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  const handleSave = () => {
    if (noteText.trim() === '') {
      alert('Note cannot be empty!');
      return;
    }

    const newNote = {
      id: Date.now(),
      text: noteText,
      lastModified: new Date().toLocaleString(),
    };

    setSavedNotes([...savedNotes, newNote]);
    setNoteText('');
    alert('Note Saved!');
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    const updatedNotes = savedNotes.filter((note) => note.id !== id);
    setSavedNotes(updatedNotes);
    alert('Note Deleted');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Greeting Section */}
      <div className="text-center flex-1">
        <h1 className="text-4xl font-bold mb-4">Good Morning {userName}!</h1>
        {/* Notes Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {savedNotes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded shadow relative">
              <h3 className="text-lg font-semibold mb-2">Note</h3>
              <p>{note.text}</p>
              <small className="block text-gray-500 mt-2">
                Last Modified: {note.lastModified}
              </small>
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => handleDelete(note.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notes Button in Footer */}
      <footer className="py-4 mt-auto fixed bottom-0 right-0">
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white p-4 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600"
            onClick={() => setIsModalOpen(true)} // Open the modal on click
          >
            <DocumentTextIcon className="h-6 w-6" />
          </button>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4">Your Note</h2>

            {/* Text Area */}
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full h-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Write your note here..."
            />

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setNoteText('')}
                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
