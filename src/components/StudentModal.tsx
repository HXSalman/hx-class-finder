import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Student {
  id: string;
  name: string;
  ic: string;
  roomNo: string;
  floorName: string;
  class: string;
}

interface StudentModalProps {
  student: Student | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentModal({
  student,
  isOpen,
  onClose,
}: StudentModalProps) {
  if (!student) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-50 rounded-full opacity-50" />

              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 transition-colors p-2 hover:bg-gray-300 rounded-full z-10"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="text-center mb-8 relative z-[1]">
                <div className="inline-block bg-blue-50 rounded-2xl px-8 py-4 mb-3">
                  <p className="text-blue-500 font-medium mb-1">Room Number</p>
                  <h2 className="text-6xl font-bold text-blue-600">
                    {student.roomNo}
                  </h2>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700">
                  {student.floorName}
                </h3>
              </div>

              <div className="space-y-6 relative z-[1]">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Student Name
                  </label>
                  <p className="text-lg font-semibold text-gray-800">
                    {student.name}
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    IC Number
                  </label>
                  <p className="text-lg font-semibold text-gray-800">
                    {student.ic}
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Seat No
                  </label>
                  <p className="text-lg font-semibold text-gray-800">
                    {student.id}
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Classroom Name
                  </label>
                  <p className="text-lg font-semibold text-gray-800">
                    {student.class}
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
