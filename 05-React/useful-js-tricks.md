1) Create some object based on other object keys:
const newObject = {
  ...oldObject,
  newKey: 'some-value', // new key with a new value (or overriding the "newKey" that exist in oldObject)
};

2) Creating an object that creates keys only if defined:
const styleObj = {
    ...(width && { width }),
    ...(height && { height }),
};

3) create an array based on previous array:
const newArr = [...oldArray, newItem];

4) conditional rendering - render an html element/component - by some condition

  return (
      {img && <img src={img} alt={altImg} />}
      )

5) separate array items from array (in this case - useState always returns an array of two items)
const [prevScreenshot, setPrevScreenshot] = useState<string>(Screenshot1);

6) separate / pick specific keys from an object (deconstruct some keys):

const { key1, key2 } = someObject;

we also do it in props:

const Component1 = ({ prop1, prop2, children }) => {
  return (
    <></>
  )
};

7) tenary operator:
const classname = isLoading ? 'loading' : 'active';

8) specific shortcut for tenary operator:
instead of:
const value = a ? a : b;
we can do:
const value = a ?? b;

9) Push all elements from 1 array to second array:
postsCollection.push(...data.results);

10) 
