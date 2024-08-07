"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnlineStatusCollector = void 0;
class OnlineStatusCollector {
  data = null;
  constructor(interval) {
    this.interval = interval;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'onlineStatus';
  }
  startCollect() {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting online status:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start online status collection:', error);
    }
  }
  finishCollect() {
    this.data = null;
  }
  collectData() {
    try {
      this.data = navigator.onLine;
    } catch (error) {
      console.error('Error getting online status:', error);
      this.data = null;
    }
  }
}
exports.OnlineStatusCollector = OnlineStatusCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPbmxpbmVTdGF0dXNDb2xsZWN0b3IiLCJkYXRhIiwiY29uc3RydWN0b3IiLCJpbnRlcnZhbCIsImdldERhdGEiLCJnZXRLZXkiLCJzdGFydENvbGxlY3QiLCJjb2xsZWN0RGF0YSIsInNldEludGVydmFsIiwiZXJyb3IiLCJjb25zb2xlIiwiZmluaXNoQ29sbGVjdCIsIm5hdmlnYXRvciIsIm9uTGluZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdG9ycy9yZWd1bGFyL09ubGluZVN0YXR1c0NvbGxlY3Rvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0b3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBPbmxpbmVTdGF0dXNDb2xsZWN0b3IgaW1wbGVtZW50cyBDb2xsZWN0b3I8Ym9vbGVhbj4ge1xuICBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoaW50ZXJ2YWw6IG51bWJlcikge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgfVxuXG4gIGdldERhdGEoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBnZXRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ29ubGluZVN0YXR1cyc7XG4gIH1cblxuICBzdGFydENvbGxlY3QoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29sbGVjdERhdGEoKTtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNvbGxlY3REYXRhKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29sbGVjdGluZyBvbmxpbmUgc3RhdHVzOicsIGVycm9yKTtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IG9ubGluZSBzdGF0dXMgY29sbGVjdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoQ29sbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0RGF0YSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kYXRhID0gbmF2aWdhdG9yLm9uTGluZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBvbmxpbmUgc3RhdHVzOicsIGVycm9yKTtcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxNQUFNQSxxQkFBcUIsQ0FBK0I7RUFFdkRDLElBQUksR0FBbUIsSUFBSTtFQUVuQ0MsV0FBV0EsQ0FBQ0MsUUFBZ0IsRUFBRTtJQUM1QixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtFQUMxQjtFQUVBQyxPQUFPQSxDQUFBLEVBQW1CO0lBQ3hCLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0VBQ2xCO0VBRUFJLE1BQU1BLENBQUEsRUFBVztJQUNmLE9BQU8sY0FBYztFQUN2QjtFQUVBQyxZQUFZQSxDQUFBLEVBQVM7SUFDbkIsSUFBSTtNQUNGLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbEJDLFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUk7VUFDRixJQUFJLENBQUNELFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsaUNBQWlDLEVBQUVBLEtBQUssQ0FBQztVQUN2RCxJQUFJLENBQUNSLElBQUksR0FBRyxJQUFJO1FBQ2xCO01BQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsMkNBQTJDLEVBQUVBLEtBQUssQ0FBQztJQUNuRTtFQUNGO0VBRUFFLGFBQWFBLENBQUEsRUFBUztJQUNwQixJQUFJLENBQUNWLElBQUksR0FBRyxJQUFJO0VBQ2xCO0VBRVFNLFdBQVdBLENBQUEsRUFBUztJQUMxQixJQUFJO01BQ0YsSUFBSSxDQUFDTixJQUFJLEdBQUdXLFNBQVMsQ0FBQ0MsTUFBTTtJQUM5QixDQUFDLENBQUMsT0FBT0osS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDhCQUE4QixFQUFFQSxLQUFLLENBQUM7TUFDcEQsSUFBSSxDQUFDUixJQUFJLEdBQUcsSUFBSTtJQUNsQjtFQUNGO0FBQ0Y7QUFBQ2EsT0FBQSxDQUFBZCxxQkFBQSxHQUFBQSxxQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==