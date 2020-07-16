function runVM(name,code){
  let wxAppCode={},handle={cssFile:name};
  let vm=new VM({sandbox:Object.assign(new GwxCfg(),{__wxAppCode__:wxAppCode,setCssToHead:cssRebuild.bind(handle)})});
  vm.run(code);
  for(let name in wxAppCode)if(name.endsWith(".wxss")){
      handle.cssFile=path.resolve(frameName,"..",name);
      wxAppCode[name]();
  }
}
// 替换为
function runVM(name,code){
  let wxAppCode = {};
  let handle = {cssFile: name};
  let gg = new GwxCfg();
  let tsandbox = {
    $gwx: GwxCfg.prototype["$gwx"],
    __mainPageFrameReady__: GwxCfg.prototype["$gwx"], //解决 $gwx is not defined
    __vd_version_info__: GwxCfg.prototype["$gwx"], //解决__vd_version_info__ is not defined
    __wxAppCode__: wxAppCode,
    setCssToHead: cssRebuild.bind(handle)
  }
  let vm = new VM({sandbox: tsandbox});
  vm.run(code);
  for (let name in wxAppCode) {
    if (name.endsWith(".wxss")) {
      handle.cssFile = path.resolve(frameName, "..", name);
      wxAppCode[name]();
    }
  }
}
