
export class Utils {
    static maintainLastXItems<T>(array: T[], bufferSize: number, newItem: T): void {
      if(typeof newItem === 'object' && 'isTrusted' && 'key' && 'KeyT' && 'location' && 'ctrlKey'){
        console.log('keyupEvent');
      }
      
      if (array.length < bufferSize) {
        array.push(JSON.parse(JSON.stringify(newItem)));
      } else {
        array.shift();
        array.push(newItem);
      }
    }
}