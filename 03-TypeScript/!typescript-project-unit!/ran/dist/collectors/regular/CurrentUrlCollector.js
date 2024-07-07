"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentUrlCollector = void 0;
class CurrentUrlCollector {
  data = null;
  constructor(interval) {
    this.interval = interval;
  }
  getData() {
    return this.data;
  }
  getKey() {
    return 'currentUrl';
  }
  startCollect() {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting current URL:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start current URL collection:', error);
    }
  }
  finishCollect() {
    this.data = null;
  }
  collectData() {
    try {
      this.data = window.location.href;
    } catch (error) {
      console.error('Error getting current URL:', error);
      this.data = null;
    }
  }
}
exports.CurrentUrlCollector = CurrentUrlCollector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXJyZW50VXJsQ29sbGVjdG9yIiwiZGF0YSIsImNvbnN0cnVjdG9yIiwiaW50ZXJ2YWwiLCJnZXREYXRhIiwiZ2V0S2V5Iiwic3RhcnRDb2xsZWN0IiwiY29sbGVjdERhdGEiLCJzZXRJbnRlcnZhbCIsImVycm9yIiwiY29uc29sZSIsImZpbmlzaENvbGxlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3RvcnMvcmVndWxhci9DdXJyZW50VXJsQ29sbGVjdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3RvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdG9yJztcblxuZXhwb3J0IGNsYXNzIEN1cnJlbnRVcmxDb2xsZWN0b3IgaW1wbGVtZW50cyBDb2xsZWN0b3I8c3RyaW5nPiB7XG4gIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGludGVydmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gIH1cblxuICBnZXREYXRhKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBnZXRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2N1cnJlbnRVcmwnO1xuICB9XG5cbiAgc3RhcnRDb2xsZWN0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbGxlY3REYXRhKCk7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbGxlY3RpbmcgY3VycmVudCBVUkw6JywgZXJyb3IpO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgY3VycmVudCBVUkwgY29sbGVjdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoQ29sbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0RGF0YSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kYXRhID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgY3VycmVudCBVUkw6JywgZXJyb3IpO1xuICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLE1BQU1BLG1CQUFtQixDQUE4QjtFQUVwREMsSUFBSSxHQUFrQixJQUFJO0VBRWxDQyxXQUFXQSxDQUFDQyxRQUFnQixFQUFFO0lBQzVCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0VBQzFCO0VBRUFDLE9BQU9BLENBQUEsRUFBa0I7SUFDdkIsT0FBTyxJQUFJLENBQUNILElBQUk7RUFDbEI7RUFFQUksTUFBTUEsQ0FBQSxFQUFXO0lBQ2YsT0FBTyxZQUFZO0VBQ3JCO0VBRUFDLFlBQVlBLENBQUEsRUFBUztJQUNuQixJQUFJO01BQ0YsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUNsQkMsV0FBVyxDQUFDLE1BQU07UUFDaEIsSUFBSTtVQUNGLElBQUksQ0FBQ0QsV0FBVyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLE9BQU9FLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQywrQkFBK0IsRUFBRUEsS0FBSyxDQUFDO1VBQ3JELElBQUksQ0FBQ1IsSUFBSSxHQUFHLElBQUk7UUFDbEI7TUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDRSxRQUFRLENBQUM7SUFDbkIsQ0FBQyxDQUFDLE9BQU9NLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyx5Q0FBeUMsRUFBRUEsS0FBSyxDQUFDO0lBQ2pFO0VBQ0Y7RUFFQUUsYUFBYUEsQ0FBQSxFQUFTO0lBQ3BCLElBQUksQ0FBQ1YsSUFBSSxHQUFHLElBQUk7RUFDbEI7RUFFUU0sV0FBV0EsQ0FBQSxFQUFTO0lBQzFCLElBQUk7TUFDRixJQUFJLENBQUNOLElBQUksR0FBR1csTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUk7SUFDbEMsQ0FBQyxDQUFDLE9BQU9MLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyw0QkFBNEIsRUFBRUEsS0FBSyxDQUFDO01BQ2xELElBQUksQ0FBQ1IsSUFBSSxHQUFHLElBQUk7SUFDbEI7RUFDRjtBQUNGO0FBQUNjLE9BQUEsQ0FBQWYsbUJBQUEsR0FBQUEsbUJBQUEiLCJpZ25vcmVMaXN0IjpbXX0=