const itemsCounter = require('../modules/itemsCounter.js');

describe('calculate the list item of homepage', () => {
  test('result should get the number of item', () => {
    const list = [
      { 'Olu Mel': 'Olu Mel' },
      { '.GIFfany': 'Lilo & Stitch: The Series,Stitch!' },
      { 627: 'Lilo & Stitch: The Series,Stitch!' },
      { '9-Eye': 'The Timekeeper' },
    ];
    const result = itemsCounter(list);

    expect(result).toBe(4);
  });

  test('result should get the number of item', () => {
    const list = ['studentA', 'studentB', 'studentC'];
    const result = itemsCounter(list);

    expect(result).toBe(3);
  });
});
