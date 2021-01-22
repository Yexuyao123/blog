const Model = function(options){
  const resourceName = options.ClassName
  return{
    init:function(){
      // LC初始化
      AV.init({
        appId: "ueriV0pxGqmoDxvYknzHLY3x-gzGzoHsz",
        appKey: "Iqx5cPCf55cts7k0BhyB0O7g",
        serverURL: "https://ueriv0px.lc-cn-n1-shared.com"
      });
      // console.log("初始化成功")
    },
    fetch:function(){
      // 从数据库拉取最新留言
      const query = new AV.Query(resourceName); //获取 Message 表格
      // 设置筛选条件
      query.descending('createdAt'); // 按 createdAt 降序排列,新到旧
      const onePageNumber = 10
      query.limit(onePageNumber); // 最多获取 10 条结果,最近10条
      return query.find()
    },
    save:function(obj){
      const MessageObject = AV.Object.extend(resourceName);
      const messageObject = new MessageObject();
      for(const key in obj) {
        messageObject.set(key,obj[key])
        // console.log('保存' + key + '成功')
      }
      return messageObject.save()
    }
  }
}

export {Model}