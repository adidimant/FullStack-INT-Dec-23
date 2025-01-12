import axios from 'axios';
import { io } from 'socket.io-client';
import { Review, ReviewFormData } from '../../types/review.types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5503';

const reviewsApi = axios.create({
  baseURL: `${API_URL}/api/reviews`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Initialize Socket.IO client with explicit URL
const socket = io(API_URL, {
  withCredentials: true,
  transports: ['websocket', 'polling']
});

// Log socket connection events
socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('connect_error', (error) => {
  console.error('Socket.IO connection error:', error);
});

export const createReview = async (data: ReviewFormData): Promise<Review> => {
  try {
    const { data: review } = await reviewsApi.post('/', data);
    socket.emit('new-review', review);
    return review;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

export const getReviews = async (): Promise<Review[]> => {
  try {
    const { data: reviews } = await reviewsApi.get('/');
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const likeReview = async (reviewId: string): Promise<Review> => {
  try {
    const { data: review } = await reviewsApi.post(`/${reviewId}/like`);
    socket.emit('review-liked', review);
    return review;
  } catch (error) {
    console.error('Error liking review:', error);
    throw error;
  }
};

export const subscribeToReviews = (onNewReview: (review: Review) => void) => {
  socket.on('review-added', onNewReview);
  return () => {
    socket.off('review-added', onNewReview);
  };
};