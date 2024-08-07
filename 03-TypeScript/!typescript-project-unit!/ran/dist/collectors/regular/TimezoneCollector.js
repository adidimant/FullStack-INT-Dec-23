"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimezoneCollector = void 0;
class TimezoneCollector {
  data = null;
  constructor(interval) {
    this.interval = interval;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'timezone';
  }
  startCollect() {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting timezone:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start timezone collection:', error);
    }
  }
  finishCollect() {
    this.data = null;
  }
  collectData() {
    try {
      this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (error) {
      console.error('Error getting timezone:', error);
      this.data = null;
    }
  }
}
exports.TimezoneCollector = TimezoneCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUaW1lem9uZUNvbGxlY3RvciIsImRhdGEiLCJjb25zdHJ1Y3RvciIsImludGVydmFsIiwiZ2V0RGF0YSIsImdldEtleSIsInN0YXJ0Q29sbGVjdCIsImNvbGxlY3REYXRhIiwic2V0SW50ZXJ2YWwiLCJlcnJvciIsImNvbnNvbGUiLCJmaW5pc2hDb2xsZWN0IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicmVzb2x2ZWRPcHRpb25zIiwidGltZVpvbmUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3RvcnMvcmVndWxhci9UaW1lem9uZUNvbGxlY3Rvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0b3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBUaW1lem9uZUNvbGxlY3RvciBpbXBsZW1lbnRzIENvbGxlY3RvcjxzdHJpbmc+IHtcbiAgcHVibGljIGludGVydmFsOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoaW50ZXJ2YWw6IG51bWJlcikge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgfVxuXG4gIGdldERhdGEoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGdldEtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAndGltZXpvbmUnO1xuICB9XG5cbiAgc3RhcnRDb2xsZWN0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbGxlY3REYXRhKCk7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbGxlY3RpbmcgdGltZXpvbmU6JywgZXJyb3IpO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgdGltZXpvbmUgY29sbGVjdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoQ29sbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0RGF0YSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kYXRhID0gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHRpbWV6b25lOicsIGVycm9yKTtcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxNQUFNQSxpQkFBaUIsQ0FBOEI7RUFFbERDLElBQUksR0FBa0IsSUFBSTtFQUVsQ0MsV0FBV0EsQ0FBQ0MsUUFBZ0IsRUFBRTtJQUM1QixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtFQUMxQjtFQUVBQyxPQUFPQSxDQUFBLEVBQWtCO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0VBQ2xCO0VBRUFJLE1BQU1BLENBQUEsRUFBVztJQUNmLE9BQU8sVUFBVTtFQUNuQjtFQUVBQyxZQUFZQSxDQUFBLEVBQVM7SUFDbkIsSUFBSTtNQUNGLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbEJDLFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUk7VUFDRixJQUFJLENBQUNELFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsNEJBQTRCLEVBQUVBLEtBQUssQ0FBQztVQUNsRCxJQUFJLENBQUNSLElBQUksR0FBRyxJQUFJO1FBQ2xCO01BQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0NBQXNDLEVBQUVBLEtBQUssQ0FBQztJQUM5RDtFQUNGO0VBRUFFLGFBQWFBLENBQUEsRUFBUztJQUNwQixJQUFJLENBQUNWLElBQUksR0FBRyxJQUFJO0VBQ2xCO0VBRVFNLFdBQVdBLENBQUEsRUFBUztJQUMxQixJQUFJO01BQ0YsSUFBSSxDQUFDTixJQUFJLEdBQUdXLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUMsQ0FBQ0MsZUFBZSxDQUFDLENBQUMsQ0FBQ0MsUUFBUTtJQUM5RCxDQUFDLENBQUMsT0FBT04sS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHlCQUF5QixFQUFFQSxLQUFLLENBQUM7TUFDL0MsSUFBSSxDQUFDUixJQUFJLEdBQUcsSUFBSTtJQUNsQjtFQUNGO0FBQ0Y7QUFBQ2UsT0FBQSxDQUFBaEIsaUJBQUEsR0FBQUEsaUJBQUEiLCJpZ25vcmVMaXN0IjpbXX0=