import path_ from '@/view/assets/icon/logo.png'

const showTray = (gui) => {

  //创建托盘
  tray = new gui.Tray({
    title: '云雀',
    icon: path_
  });
  tray.tooltip = '云雀';
  //添加一个菜单
  var menu = new gui.Menu();
  menu.append(new gui.MenuItem({
    label: ' 退出',
    icon: path_,
  }));
  tray.menu = menu;
  //托盘点击事件
  tray.on('click', function () {
    win.show();
  });
  win.on('close', function (event) {});
  tray.menu.items[0].click = function () {
    win.hide();
    //在这一部分可以添加应用的终结执行命令
    tray.remove();
    tray = null;
    win.removeAllListeners('close');
    gui.App.quit();
    this.close(true);
  };
}
export default tray;
