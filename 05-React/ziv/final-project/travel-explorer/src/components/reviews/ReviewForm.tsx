import React, { useState } from 'react';
import { Star, Upload, X } from 'lucide-react';
import { ReviewFormData } from '../../types/review.types';

interface ReviewFormProps {
  countryId: string; // Add countryId prop
  onSubmit: (data: ReviewFormData) => void;
  onClose: () => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ countryId, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    authorName: '',
    isAnonymous: false,
    state: '',
    content: '',
    rating: 0,
    photoUrl: '',
    countryId // Initialize with provided countryId
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Review</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo
            </label>
            <div className="flex items-center space-x-4">
              {formData.photoUrl && (
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={formData.photoUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <label className="flex items-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                <Upload className="w-5 h-5 mr-2" />
                <span>Upload Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={formData.authorName}
                onChange={(e) =>
                  setFormData({ ...formData, authorName: e.target.value })
                }
                className="flex-1 p-2 border rounded-md"
                required={!formData.isAnonymous}
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.isAnonymous}
                  onChange={(e) =>
                    setFormData({ ...formData, isAnonymous: e.target.checked })
                  }
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-600">Anonymous</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Review
            </label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              maxLength={1000}
              rows={3}
              className="w-full p-2 border rounded-md resize-none"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              {formData.content.length}/1000 characters
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= formData.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};