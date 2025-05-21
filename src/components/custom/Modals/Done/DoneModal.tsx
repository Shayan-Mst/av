import { X } from "lucide-react";

interface DoneModalProps {
  messageTitle?: string;
  messageBody?: string;
  onClose: () => void;
}

const DoneModal = ({
  messageTitle ,
  messageBody ,
  onClose,
}: DoneModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white w-[480px] rounded-xl p-6 shadow-lg relative text-center">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Check icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <p className="font-medium text-md text-gray-900 mb-2">{messageTitle}</p>
        <p className="text-sm text-gray-700 leading-6">{messageBody}</p>
      </div>
    </div>
  );
};

export default DoneModal;
