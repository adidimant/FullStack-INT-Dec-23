"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollCollector = void 0;
var _Utils = require("../../utils/Utils");
class ScrollCollector {
  data = [];
  constructor(interval, bufferSize) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'scroll';
  }
  startCollect() {
    try {
      window.addEventListener('scroll', this.handleScroll);
    } catch (error) {
      console.error('Failed to start scroll collection:', error);
    }
  }
  finishCollect() {
    try {
      window.removeEventListener('scroll', this.handleScroll);
      this.data = [];
    } catch (error) {
      console.error('Error finishing scroll collection:', error);
    }
  }
  handleScroll = () => {
    try {
      const scrollData = {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        timestamp: Date.now()
      };
      this.data = _Utils.Utils.maintainLastXItems(this.data, this.bufferSize, scrollData);
    } catch (error) {
      console.error('Error handling scroll:', error);
    }
  };
}
exports.ScrollCollector = ScrollCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfVXRpbHMiLCJyZXF1aXJlIiwiU2Nyb2xsQ29sbGVjdG9yIiwiZGF0YSIsImNvbnN0cnVjdG9yIiwiaW50ZXJ2YWwiLCJidWZmZXJTaXplIiwiZ2V0RGF0YSIsImdldEtleSIsInN0YXJ0Q29sbGVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJlcnJvciIsImNvbnNvbGUiLCJmaW5pc2hDb2xsZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbERhdGEiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJVdGlscyIsIm1haW50YWluTGFzdFhJdGVtcyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdG9ycy9jb250aW51b3VzL1Njcm9sbENvbGxlY3Rvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250aW51b3VzQ29sbGVjdG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Db250aW51b3VzQ29sbGVjdG9yJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvVXRpbHMnO1xuXG5pbnRlcmZhY2UgU2Nyb2xsRGF0YSB7XG4gIHNjcm9sbFg6IG51bWJlcjtcbiAgc2Nyb2xsWTogbnVtYmVyO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNjcm9sbENvbGxlY3RvciBpbXBsZW1lbnRzIENvbnRpbnVvdXNDb2xsZWN0b3I8U2Nyb2xsRGF0YT4ge1xuICBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlcjtcbiAgcHVibGljIGJ1ZmZlclNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBTY3JvbGxEYXRhW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihpbnRlcnZhbDogbnVtYmVyLCBidWZmZXJTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgdGhpcy5idWZmZXJTaXplID0gYnVmZmVyU2l6ZTtcbiAgfVxuXG4gIGdldERhdGEoKTogU2Nyb2xsRGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0S2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdzY3JvbGwnO1xuICB9XG5cbiAgc3RhcnRDb2xsZWN0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgc2Nyb2xsIGNvbGxlY3Rpb246JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaENvbGxlY3QoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluaXNoaW5nIHNjcm9sbCBjb2xsZWN0aW9uOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNjcm9sbCA9ICgpOiB2b2lkID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Nyb2xsRGF0YTogU2Nyb2xsRGF0YSA9IHtcbiAgICAgICAgc2Nyb2xsWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgIHNjcm9sbFk6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5tYWludGFpbkxhc3RYSXRlbXModGhpcy5kYXRhLCB0aGlzLmJ1ZmZlclNpemUsIHNjcm9sbERhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBzY3JvbGw6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO0FBUU8sTUFBTUMsZUFBZSxDQUE0QztFQUc5REMsSUFBSSxHQUFpQixFQUFFO0VBRS9CQyxXQUFXQSxDQUFDQyxRQUFnQixFQUFFQyxVQUFrQixFQUFFO0lBQ2hELElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0VBQzlCO0VBRUFDLE9BQU9BLENBQUEsRUFBaUI7SUFDdEIsT0FBTyxJQUFJLENBQUNKLElBQUk7RUFDbEI7RUFFQUssTUFBTUEsQ0FBQSxFQUFXO0lBQ2YsT0FBTyxRQUFRO0VBQ2pCO0VBRUFDLFlBQVlBLENBQUEsRUFBUztJQUNuQixJQUFJO01BQ0ZDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO0lBQ3RELENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsb0NBQW9DLEVBQUVBLEtBQUssQ0FBQztJQUM1RDtFQUNGO0VBRUFFLGFBQWFBLENBQUEsRUFBUztJQUNwQixJQUFJO01BQ0ZMLE1BQU0sQ0FBQ00sbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0osWUFBWSxDQUFDO01BQ3ZELElBQUksQ0FBQ1QsSUFBSSxHQUFHLEVBQUU7SUFDaEIsQ0FBQyxDQUFDLE9BQU9VLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxvQ0FBb0MsRUFBRUEsS0FBSyxDQUFDO0lBQzVEO0VBQ0Y7RUFFUUQsWUFBWSxHQUFHQSxDQUFBLEtBQVk7SUFDakMsSUFBSTtNQUNGLE1BQU1LLFVBQXNCLEdBQUc7UUFDN0JDLE9BQU8sRUFBRVIsTUFBTSxDQUFDUSxPQUFPO1FBQ3ZCQyxPQUFPLEVBQUVULE1BQU0sQ0FBQ1MsT0FBTztRQUN2QkMsU0FBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUcsQ0FBQztNQUN0QixDQUFDO01BQ0QsSUFBSSxDQUFDbkIsSUFBSSxHQUFHb0IsWUFBSyxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDRyxVQUFVLEVBQUVXLFVBQVUsQ0FBQztJQUM5RSxDQUFDLENBQUMsT0FBT0osS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHdCQUF3QixFQUFFQSxLQUFLLENBQUM7SUFDaEQ7RUFDRixDQUFDO0FBQ0g7QUFBQ1ksT0FBQSxDQUFBdkIsZUFBQSxHQUFBQSxlQUFBIiwiaWdub3JlTGlzdCI6W119