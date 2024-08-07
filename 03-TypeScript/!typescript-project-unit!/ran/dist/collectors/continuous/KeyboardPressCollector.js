"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardPressCollector = void 0;
var _Utils = require("../../utils/Utils");
class KeyboardPressCollector {
  data = [];
  constructor(interval, bufferSize) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'keyboardPress';
  }
  startCollect() {
    try {
      document.addEventListener('keyup', this.handleKeyPress);
    } catch (error) {
      console.error('Failed to start keyboard press collection:', error);
    }
  }
  finishCollect() {
    try {
      document.removeEventListener('keyup', this.handleKeyPress);
      this.data = [];
    } catch (error) {
      console.error('Error finishing keyboard press collection:', error);
    }
  }
  handleKeyPress = event => {
    try {
      this.data = _Utils.Utils.maintainLastXItems(this.data, this.bufferSize, event);
    } catch (error) {
      console.error('Error handling key press:', error);
    }
  };
}
exports.KeyboardPressCollector = KeyboardPressCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfVXRpbHMiLCJyZXF1aXJlIiwiS2V5Ym9hcmRQcmVzc0NvbGxlY3RvciIsImRhdGEiLCJjb25zdHJ1Y3RvciIsImludGVydmFsIiwiYnVmZmVyU2l6ZSIsImdldERhdGEiLCJnZXRLZXkiLCJzdGFydENvbGxlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlQcmVzcyIsImVycm9yIiwiY29uc29sZSIsImZpbmlzaENvbGxlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJVdGlscyIsIm1haW50YWluTGFzdFhJdGVtcyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdG9ycy9jb250aW51b3VzL0tleWJvYXJkUHJlc3NDb2xsZWN0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb250aW51b3VzQ29sbGVjdG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Db250aW51b3VzQ29sbGVjdG9yJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvVXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRQcmVzc0NvbGxlY3RvciBpbXBsZW1lbnRzIENvbnRpbnVvdXNDb2xsZWN0b3I8S2V5Ym9hcmRFdmVudD4ge1xuICBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlcjtcbiAgcHVibGljIGJ1ZmZlclNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBLZXlib2FyZEV2ZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihpbnRlcnZhbDogbnVtYmVyLCBidWZmZXJTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgdGhpcy5idWZmZXJTaXplID0gYnVmZmVyU2l6ZTtcbiAgfVxuXG4gIGdldERhdGEoKTogS2V5Ym9hcmRFdmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0S2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdrZXlib2FyZFByZXNzJztcbiAgfVxuXG4gIHN0YXJ0Q29sbGVjdCgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGtleWJvYXJkIHByZXNzIGNvbGxlY3Rpb246JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaENvbGxlY3QoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlQcmVzcyk7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluaXNoaW5nIGtleWJvYXJkIHByZXNzIGNvbGxlY3Rpb246JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubWFpbnRhaW5MYXN0WEl0ZW1zKHRoaXMuZGF0YSwgdGhpcy5idWZmZXJTaXplLCBldmVudCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGtleSBwcmVzczonLCBlcnJvcik7XG4gICAgfVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7QUFFTyxNQUFNQyxzQkFBc0IsQ0FBK0M7RUFHeEVDLElBQUksR0FBb0IsRUFBRTtFQUVsQ0MsV0FBV0EsQ0FBQ0MsUUFBZ0IsRUFBRUMsVUFBa0IsRUFBRTtJQUNoRCxJQUFJLENBQUNELFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5QjtFQUVBQyxPQUFPQSxDQUFBLEVBQW9CO0lBQ3pCLE9BQU8sSUFBSSxDQUFDSixJQUFJO0VBQ2xCO0VBRUFLLE1BQU1BLENBQUEsRUFBVztJQUNmLE9BQU8sZUFBZTtFQUN4QjtFQUVBQyxZQUFZQSxDQUFBLEVBQVM7SUFDbkIsSUFBSTtNQUNGQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQztJQUN6RCxDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDRDQUE0QyxFQUFFQSxLQUFLLENBQUM7SUFDcEU7RUFDRjtFQUVBRSxhQUFhQSxDQUFBLEVBQVM7SUFDcEIsSUFBSTtNQUNGTCxRQUFRLENBQUNNLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNKLGNBQWMsQ0FBQztNQUMxRCxJQUFJLENBQUNULElBQUksR0FBRyxFQUFFO0lBQ2hCLENBQUMsQ0FBQyxPQUFPVSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsNENBQTRDLEVBQUVBLEtBQUssQ0FBQztJQUNwRTtFQUNGO0VBRVFELGNBQWMsR0FBSUssS0FBb0IsSUFBVztJQUN2RCxJQUFJO01BQ0YsSUFBSSxDQUFDZCxJQUFJLEdBQUdlLFlBQUssQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQ0csVUFBVSxFQUFFVyxLQUFLLENBQUM7SUFDekUsQ0FBQyxDQUFDLE9BQU9KLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQywyQkFBMkIsRUFBRUEsS0FBSyxDQUFDO0lBQ25EO0VBQ0YsQ0FBQztBQUNIO0FBQUNPLE9BQUEsQ0FBQWxCLHNCQUFBLEdBQUFBLHNCQUFBIiwiaWdub3JlTGlzdCI6W119