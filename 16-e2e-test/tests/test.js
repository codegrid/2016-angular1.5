describe('myApp', function () {
  beforeEach(function () {
    // index.htmlを開く
    browser.get('/index.html');
  });

  it('リストに4件のデータが表示されること', function () {
    expect($$('.membersList li').count()).toBe(4);
  });

  it('フォームに入力するとリストに要素が追加されること', function () {
    var form = $('.addForm');
    var input = form.$('input');
    var items = $$('.membersList li');

    // フォームを送信
    input.sendKeys('foo');
    form.submit();

    expect(items.count()).toBe(5);
    expect(items.last().getText()).toBe('foo');
    expect(input.getAttribute('value')).toBe('');
  });
});
