describe('MainCtrl', function() {
  // 対象モジュールの読み込み
  beforeEach(module('myApp'));

  // 対象コントローラーの初期化
  var vm, mockMembers;
  beforeEach(inject(function($controller) {
    // MainCtrlの関数に渡すモックのデータをつくる
    mockMembers = [];

    // MainCtrlの関数を実行する
    vm = $controller('MainCtrl', { members: mockMembers });
  }));

  describe('vm.members', function() {
    it('membersサービスのデータが設定されること', function() {
      expect(vm.members).toBe(mockMembers);
    });
  });

  describe('vm.addMember', function() {
    beforeEach(function() {
      vm.newName = 'new user!';
      vm.addMember();
    });

    it('vm.newNameの値がvm.membersに追加されること', function() {
      expect(vm.members).toEqual([{ name: 'new user!' }]);
    });

    it('vm.newNameの値が空になること', function() {
      expect(vm.newName).toBe('');
    });
  });
});
