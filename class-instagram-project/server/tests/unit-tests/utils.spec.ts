import Utils from '../../src/services/utils.service';

describe('Utils tester', () => {

  beforeAll(() => {
    // put here code that needs to be run one time, before all tests (like database connection, server establishment, other big one-time creations)
  });

  beforeEach(() => {
    // put here code that needs to be run before each test (like "reseting" objects / mock data)
  });

  afterAll(() => {
    // clear things you created / close connections to db and more
  });

  afterEach(() => {
    // less common, since i can also put the code here in beforeEach. use it when you explicitly want to run some code after each test
  });

  describe('queryToNumber function tester', () => {
    it('should return the number when the input is a number', () => {
      const result = Utils.convertQueryToNumber(45, 0);
      expect(result).toBe(45);
    });

    it('should convert a valid string number to a number', () => {
      const result = Utils.convertQueryToNumber('45', 0);
      expect(result).toBe(45);
      const obj1 = { key1: 'abc' };
      expect(obj1).toMatchObject({ key1: 'abc'});
    });

    it('should return null for an invalid string', () => {
      const result = Utils.convertQueryToNumber('asd', 0);
      expect(result).toBeNull();
    });

    it('should return the default value when the input is not a number or a valid string', () => {
      const result = Utils.convertQueryToNumber([], 5);
      expect(result).toBe(5);
    });

    it('should return the default value when the input is undefined', () => {
      const result = Utils.convertQueryToNumber(undefined, 10);
      expect(result).toBe(10);
    });

    it('should return the default value when the input is null', () => {
      const result = Utils.convertQueryToNumber(null, 20);
      expect(result).toBe(20);
    });
  });
});