const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });

  it("Books should NOT be sorted", () => {
    const input = [
      "Гарри Поттер",
      "Властелин колец",
      "Волшебник изумрудного города",
      "Властелин колец",
    ];
    const expected = [
      "Властелин колец",
      "Властелин колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });
});
