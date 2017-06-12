exports.config = {
  // テスト対象のspecファイルのパス
  specs: ["tests/test.js"],

  // テスト対象のブラウザ
  capabilities: {
    browserName: 'chrome'
  },

  // テスト対象のアプリケーションのベースURL
  baseUrl: 'http://localhost:9000/'
};
