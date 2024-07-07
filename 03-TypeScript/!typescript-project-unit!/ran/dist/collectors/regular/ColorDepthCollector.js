"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorDepthCollector = void 0;
class ColorDepthCollector {
  data = null;
  constructor(interval) {
    this.interval = interval;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'colorDepth';
  }
  startCollect() {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting color depth:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start color depth collection:', error);
    }
  }
  finishCollect() {
    this.data = null;
  }
  collectData() {
    try {
      this.data = screen.colorDepth;
    } catch (error) {
      console.error('Error getting color depth:', error);
      this.data = null;
    }
  }
}
exports.ColorDepthCollector = ColorDepthCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb2xvckRlcHRoQ29sbGVjdG9yIiwiZGF0YSIsImNvbnN0cnVjdG9yIiwiaW50ZXJ2YWwiLCJnZXREYXRhIiwiZ2V0S2V5Iiwic3RhcnRDb2xsZWN0IiwiY29sbGVjdERhdGEiLCJzZXRJbnRlcnZhbCIsImVycm9yIiwiY29uc29sZSIsImZpbmlzaENvbGxlY3QiLCJzY3JlZW4iLCJjb2xvckRlcHRoIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0b3JzL3JlZ3VsYXIvQ29sb3JEZXB0aENvbGxlY3Rvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0b3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBDb2xvckRlcHRoQ29sbGVjdG9yIGltcGxlbWVudHMgQ29sbGVjdG9yPG51bWJlcj4ge1xuICBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihpbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0S2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdjb2xvckRlcHRoJztcbiAgfVxuXG4gIHN0YXJ0Q29sbGVjdCgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY29sbGVjdERhdGEoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb2xsZWN0aW5nIGNvbG9yIGRlcHRoOicsIGVycm9yKTtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGNvbG9yIGRlcHRoIGNvbGxlY3Rpb246JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaENvbGxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdERhdGEoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGF0YSA9IHNjcmVlbi5jb2xvckRlcHRoO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGNvbG9yIGRlcHRoOicsIGVycm9yKTtcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxNQUFNQSxtQkFBbUIsQ0FBOEI7RUFFcERDLElBQUksR0FBa0IsSUFBSTtFQUVsQ0MsV0FBV0EsQ0FBQ0MsUUFBZ0IsRUFBRTtJQUM1QixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtFQUMxQjtFQUVBQyxPQUFPQSxDQUFBLEVBQWtCO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0VBQ2xCO0VBRUFJLE1BQU1BLENBQUEsRUFBVztJQUNmLE9BQU8sWUFBWTtFQUNyQjtFQUVBQyxZQUFZQSxDQUFBLEVBQVM7SUFDbkIsSUFBSTtNQUNGLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbEJDLFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUk7VUFDRixJQUFJLENBQUNELFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsK0JBQStCLEVBQUVBLEtBQUssQ0FBQztVQUNyRCxJQUFJLENBQUNSLElBQUksR0FBRyxJQUFJO1FBQ2xCO01BQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMseUNBQXlDLEVBQUVBLEtBQUssQ0FBQztJQUNqRTtFQUNGO0VBRUFFLGFBQWFBLENBQUEsRUFBUztJQUNwQixJQUFJLENBQUNWLElBQUksR0FBRyxJQUFJO0VBQ2xCO0VBRVFNLFdBQVdBLENBQUEsRUFBUztJQUMxQixJQUFJO01BQ0YsSUFBSSxDQUFDTixJQUFJLEdBQUdXLE1BQU0sQ0FBQ0MsVUFBVTtJQUMvQixDQUFDLENBQUMsT0FBT0osS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDRCQUE0QixFQUFFQSxLQUFLLENBQUM7TUFDbEQsSUFBSSxDQUFDUixJQUFJLEdBQUcsSUFBSTtJQUNsQjtFQUNGO0FBQ0Y7QUFBQ2EsT0FBQSxDQUFBZCxtQkFBQSxHQUFBQSxtQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==