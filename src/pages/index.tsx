import { useState } from 'react';
import studentsData from '../data/students.json';
import SearchForm from '../components/SearchForm';
import StudentModal from '../components/StudentModal';

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (ic: string) => {
    const student = studentsData.students.find(s => s.ic === ic);
    if (student) {
      setSelectedStudent(student);
      setError('');
      setIsModalOpen(true);
    } else {
      setError('No student found with this IC number');
      setSelectedStudent(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hua Xia Class Finder
          </h1>
          <p className="text-xl text-gray-600">
            Find your classroom by entering your IC number
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>

        {error && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-100 rounded-xl p-4 text-center text-red-600 shadow-sm">
            {error}
          </div>
        )}

        <StudentModal
          student={selectedStudent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}