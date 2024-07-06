"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClicksCollector = void 0;
var _Utils = require("../../utils/Utils");
class ClicksCollector {
  data = [];
  constructor(interval, bufferSize) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'clicks';
  }
  startCollect() {
    try {
      document.addEventListener('click', this.handleClick);
    } catch (error) {
      console.error('Failed to start clicks collection:', error);
    }
  }
  finishCollect() {
    try {
      document.removeEventListener('click', this.handleClick);
      this.data = [];
    } catch (error) {
      console.error('Error finishing clicks collection:', error);
    }
  }
  handleClick = event => {
    try {
      this.data = _Utils.Utils.maintainLastXItems(this.data, this.bufferSize, event);
    } catch (error) {
      console.error('Error handling click:', error);
    }
  };
}
exports.ClicksCollector = ClicksCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfVXRpbHMiLCJyZXF1aXJlIiwiQ2xpY2tzQ29sbGVjdG9yIiwiZGF0YSIsImNvbnN0cnVjdG9yIiwiaW50ZXJ2YWwiLCJidWZmZXJTaXplIiwiZ2V0RGF0YSIsImdldEtleSIsInN0YXJ0Q29sbGVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiZXJyb3IiLCJjb25zb2xlIiwiZmluaXNoQ29sbGVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsIlV0aWxzIiwibWFpbnRhaW5MYXN0WEl0ZW1zIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0b3JzL2NvbnRpbnVvdXMvQ2xpY2tzQ29sbGVjdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRpbnVvdXNDb2xsZWN0b3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0NvbnRpbnVvdXNDb2xsZWN0b3InO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9VdGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDbGlja3NDb2xsZWN0b3IgaW1wbGVtZW50cyBDb250aW51b3VzQ29sbGVjdG9yPE1vdXNlRXZlbnQ+IHtcbiAgcHVibGljIGludGVydmFsOiBudW1iZXI7XG4gIHB1YmxpYyBidWZmZXJTaXplOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogTW91c2VFdmVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoaW50ZXJ2YWw6IG51bWJlciwgYnVmZmVyU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgIHRoaXMuYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemU7XG4gIH1cblxuICBnZXREYXRhKCk6IE1vdXNlRXZlbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGdldEtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnY2xpY2tzJztcbiAgfVxuXG4gIHN0YXJ0Q29sbGVjdCgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGNsaWNrcyBjb2xsZWN0aW9uOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBmaW5pc2hDb2xsZWN0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZpbmlzaGluZyBjbGlja3MgY29sbGVjdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGljayA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5tYWludGFpbkxhc3RYSXRlbXModGhpcy5kYXRhLCB0aGlzLmJ1ZmZlclNpemUsIGV2ZW50KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgY2xpY2s6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO0FBRU8sTUFBTUMsZUFBZSxDQUE0QztFQUc5REMsSUFBSSxHQUFpQixFQUFFO0VBRS9CQyxXQUFXQSxDQUFDQyxRQUFnQixFQUFFQyxVQUFrQixFQUFFO0lBQ2hELElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0VBQzlCO0VBRUFDLE9BQU9BLENBQUEsRUFBaUI7SUFDdEIsT0FBTyxJQUFJLENBQUNKLElBQUk7RUFDbEI7RUFFQUssTUFBTUEsQ0FBQSxFQUFXO0lBQ2YsT0FBTyxRQUFRO0VBQ2pCO0VBRUFDLFlBQVlBLENBQUEsRUFBUztJQUNuQixJQUFJO01BQ0ZDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7TUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsb0NBQW9DLEVBQUVBLEtBQUssQ0FBQztJQUM1RDtFQUNGO0VBRUFFLGFBQWFBLENBQUEsRUFBUztJQUNwQixJQUFJO01BQ0ZMLFFBQVEsQ0FBQ00sbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0osV0FBVyxDQUFDO01BQ3ZELElBQUksQ0FBQ1QsSUFBSSxHQUFHLEVBQUU7SUFDaEIsQ0FBQyxDQUFDLE9BQU9VLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxvQ0FBb0MsRUFBRUEsS0FBSyxDQUFDO0lBQzVEO0VBQ0Y7RUFFUUQsV0FBVyxHQUFJSyxLQUFpQixJQUFXO0lBQ2pELElBQUk7TUFDRixJQUFJLENBQUNkLElBQUksR0FBR2UsWUFBSyxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDRyxVQUFVLEVBQUVXLEtBQUssQ0FBQztJQUN6RSxDQUFDLENBQUMsT0FBT0osS0FBSyxFQUFFO01BQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHVCQUF1QixFQUFFQSxLQUFLLENBQUM7SUFDL0M7RUFDRixDQUFDO0FBQ0g7QUFBQ08sT0FBQSxDQUFBbEIsZUFBQSxHQUFBQSxlQUFBIiwiaWdub3JlTGlzdCI6W119