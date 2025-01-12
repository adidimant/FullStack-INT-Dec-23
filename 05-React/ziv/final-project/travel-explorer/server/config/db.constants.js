export const DB_CONNECTION_EVENTS = {
    CONNECTED: 'connected',
    ERROR: 'error',
    DISCONNECTED: 'disconnected',
    RECONNECTED: 'reconnected'
  };
  
  export const DB_OPTIONS = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    retryWrites: true,
    w: 'majority'
  };