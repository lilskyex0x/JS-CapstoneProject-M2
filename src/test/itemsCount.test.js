import countProducts from "../modules/countItems.js";

describe('countProducts function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="card">Product 1</div>
      <div class="card">Product 2</div>
      <div class="card">Product 3</div>
    `;
  });
  it('return the number of products on the page', () => {
    expect(countProducts()).toEqual(3);
  });
  it('return 0 when there are no products on the page', () => {
    document.body.innerHTML = '';
    expect(countProducts()).toEqual(0);
  });
});
