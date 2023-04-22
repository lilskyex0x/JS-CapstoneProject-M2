import commentsCounter from '../modules/cmdCounter.js';

describe('commentsCounter', () => {
  test('displays the correct comment count', () => {
    // Arrange
    const comments = ['Comment 1', 'Comment 2', 'Comment 3'];

    // Act
    commentsCounter(comments);

    // Assert
    expect(document.getElementById('c-total').textContent).toBe('3');
  });
});
