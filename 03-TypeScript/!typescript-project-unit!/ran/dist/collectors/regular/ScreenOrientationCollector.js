"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenOrientationCollector = void 0;
class ScreenOrientationCollector {
  data = null;
  constructor(interval) {
    this.interval = interval;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'screenOrientation';
  }
  startCollect() {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting screen orientation:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start screen orientation collection:', error);
    }
  }
  finishCollect() {
    this.data = null;
  }
  collectData() {
    try {
      if (screen.orientation) {
        this.data = screen.orientation.type;
      } else {
        this.data = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      }
    } catch (error) {
      console.error('Error getting screen orientation:', error);
      this.data = null;
    }
  }
}
exports.ScreenOrientationCollector = ScreenOrientationCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTY3JlZW5PcmllbnRhdGlvbkNvbGxlY3RvciIsImRhdGEiLCJjb25zdHJ1Y3RvciIsImludGVydmFsIiwiZ2V0RGF0YSIsImdldEtleSIsInN0YXJ0Q29sbGVjdCIsImNvbGxlY3REYXRhIiwic2V0SW50ZXJ2YWwiLCJlcnJvciIsImNvbnNvbGUiLCJmaW5pc2hDb2xsZWN0Iiwic2NyZWVuIiwib3JpZW50YXRpb24iLCJ0eXBlIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0b3JzL3JlZ3VsYXIvU2NyZWVuT3JpZW50YXRpb25Db2xsZWN0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuT3JpZW50YXRpb25Db2xsZWN0b3IgaW1wbGVtZW50cyBDb2xsZWN0b3I8c3RyaW5nPiB7XG4gIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGludGVydmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gIH1cblxuICBnZXREYXRhKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBnZXRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3NjcmVlbk9yaWVudGF0aW9uJztcbiAgfVxuXG4gIHN0YXJ0Q29sbGVjdCgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY29sbGVjdERhdGEoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb2xsZWN0aW5nIHNjcmVlbiBvcmllbnRhdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzdGFydCBzY3JlZW4gb3JpZW50YXRpb24gY29sbGVjdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoQ29sbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0RGF0YSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHNjcmVlbi5vcmllbnRhdGlvbikge1xuICAgICAgICB0aGlzLmRhdGEgPSBzY3JlZW4ub3JpZW50YXRpb24udHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHNjcmVlbiBvcmllbnRhdGlvbjonLCBlcnJvcik7XG4gICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU8sTUFBTUEsMEJBQTBCLENBQThCO0VBRTNEQyxJQUFJLEdBQWtCLElBQUk7RUFFbENDLFdBQVdBLENBQUNDLFFBQWdCLEVBQUU7SUFDNUIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBLFFBQVE7RUFDMUI7RUFFQUMsT0FBT0EsQ0FBQSxFQUFrQjtJQUN2QixPQUFPLElBQUksQ0FBQ0gsSUFBSTtFQUNsQjtFQUVBSSxNQUFNQSxDQUFBLEVBQVc7SUFDZixPQUFPLG1CQUFtQjtFQUM1QjtFQUVBQyxZQUFZQSxDQUFBLEVBQVM7SUFDbkIsSUFBSTtNQUNGLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbEJDLFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUk7VUFDRixJQUFJLENBQUNELFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0NBQXNDLEVBQUVBLEtBQUssQ0FBQztVQUM1RCxJQUFJLENBQUNSLElBQUksR0FBRyxJQUFJO1FBQ2xCO01BQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsZ0RBQWdELEVBQUVBLEtBQUssQ0FBQztJQUN4RTtFQUNGO0VBRUFFLGFBQWFBLENBQUEsRUFBUztJQUNwQixJQUFJLENBQUNWLElBQUksR0FBRyxJQUFJO0VBQ2xCO0VBRVFNLFdBQVdBLENBQUEsRUFBUztJQUMxQixJQUFJO01BQ0YsSUFBSUssTUFBTSxDQUFDQyxXQUFXLEVBQUU7UUFDdEIsSUFBSSxDQUFDWixJQUFJLEdBQUdXLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJO01BQ3JDLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ2IsSUFBSSxHQUFHYyxNQUFNLENBQUNDLFdBQVcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLEdBQUcsVUFBVSxHQUFHLFdBQVc7TUFDL0U7SUFDRixDQUFDLENBQUMsT0FBT1IsS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLG1DQUFtQyxFQUFFQSxLQUFLLENBQUM7TUFDekQsSUFBSSxDQUFDUixJQUFJLEdBQUcsSUFBSTtJQUNsQjtFQUNGO0FBQ0Y7QUFBQ2lCLE9BQUEsQ0FBQWxCLDBCQUFBLEdBQUFBLDBCQUFBIiwiaWdub3JlTGlzdCI6W119