import {addLabel,  eleMap} from "./util.js"

!(function(){
  const model = {
    //初始化
    init:function(){
      // LC初始化
      AV.init({
        appId: "ueriV0pxGqmoDxvYknzHLY3x-gzGzoHsz",
        appKey: "Iqx5cPCf55cts7k0BhyB0O7g",
        serverURL: "https://ueriv0px.lc-cn-n1-shared.com"
      });
      // console.log("初始化成功")
    },
    // 获取数据
    fetch:function(){
      // 从数据库拉取最新留言
      const query = new AV.Query('Message'); //获取 Message 表格
      // 设置筛选条件
      query.descending('createdAt'); // 按 createdAt 降序排列,新到旧
      const onePageNumber = 10
      query.limit(onePageNumber); // 最多获取 10 条结果,最近10条
      return query.find()
    },
    //上传保存数据
    save:function(obj){
      const MessageObject = AV.Object.extend('Message');
      const messageObject = new MessageObject();
      for(const key in obj) {
        messageObject.set(key,obj[key])
        // console.log('保存' + key + '成功')
      }
      return messageObject.save()
    }
  }
  const view = eleMap.messages

  const controller = {
    model:null,
    view:null,
    myForm:null,
    messageList:null,
    init:function(model,view){
      this.model = model
      this.view = view
      this.myForm = eleMap.postMessageForm
      this.messageList = view.querySelector("ol[class=messageList]")
      this.model.init()
      this.findMessage()
      this.bindEvents()
    },
    findMessage:function(){
      this.model.fetch.call().then((getMessageObject) => {
        // getMessageObject 是包含满足条件的 message 对象的数组
        const that = this
        const getMessage = getMessageObject.reverse()
        getMessage.forEach((_,index) => {
          const messageObj = getMessage[index]
          that.creatMessageLiDom (messageObj)
        })
      })
    },
    bindEvents:function(){
      this.myForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        this.saveMessage()        
      })
    },
    saveMessage:function(){
      const visitor = {}
      visitor.visitorName = this.myForm.querySelector("input[name=name]").value
      visitor.visitorMessage = this.myForm.querySelector("input[name=content]").value
      const that = this
      this.model.save.call(undefined,visitor).then(
        (messageObject)=>{that.saveSuccess(messageObject)},
        (error)=>{that.saveError(error)}
      )    
    },

    saveSuccess:function(messageObject){
      // console.log("保存时间"+messageObject.createdAt.toLocaleString())
      // window.location.reload()//刷新页面
      this.creatMessageLiDom (messageObject)
      const messageChild = this.messageList.querySelectorAll("li")
      if(messageChild.length>10){
        this.messageList.removeChild(messageChild[0])
      }
      // eleMap.postMessageForm.reset()
      this.myForm.querySelector("input[name=name]").value = ""
      this.myForm.querySelector("input[name=content]").value = ""
    },
    saveError:function(error){
      alert("提交失败,请重试")
    },
    creatMessageLiDom:function(messageObj){
      const li = addLabel ("li", {classList:"messageStyle"})
      const messageNameEle = addLabel ("div", {classList:"messageName",textContent:messageObj.attributes.visitorName})
      const messageContentEle = addLabel ("div", {classList:"messageContent",textContent:messageObj.attributes.visitorMessage})
      const messageTimeEle = addLabel ("div", {classList:"messageTime",textContent:messageObj.createdAt.toLocaleString()})
      // console.log(li,messageNameEle,messageContentEle,messageTimeEle)
      li.appendChild(messageNameEle)
      li.appendChild(messageContentEle)
      li.appendChild(messageTimeEle)
      this.messageList.appendChild(li)
    }

  }
  controller.init.call(controller, model,view)

}.call())












