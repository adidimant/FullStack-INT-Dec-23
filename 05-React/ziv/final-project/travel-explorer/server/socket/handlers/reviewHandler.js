import { logger } from '../../utils/logger.js';

export const handleReviews = (io, socket) => {
  socket.on('new-review', (review) => {
    logger.debug('New review received:', review);
    // Broadcast to all clients except sender
    socket.broadcast.emit('review-added', review);
  });

  socket.on('review-liked', (review) => {
    logger.debug('Review liked:', review);
    socket.broadcast.emit('review-updated', review);
  });
};