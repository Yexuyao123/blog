import {addLabel,getInputValue} from "./util.js"
import { View } from "./base/view.js"
import { Model } from "./base/model.js"
import { Controller } from "./base/controller.js"

!(function(){
  const model = Model({ClassName:"Message"})
  const view = View("#messages")
  const controller = Controller({
    component:{
      list:null,
      form:null
    },
    status:{
      loadingData:false
    },
    init:function(model,view){
      this.component.list = view.querySelector('ol.messageList')
      this.component.form = view.querySelector('form')
      this.status.loadingData = false
      this.dataInit()
    },
    dataInit(){
      this.status.loadingData = false
      this.clearForm()
      this.renderList()
    },
    renderList:function(){
      const list  = this.component.list
      this.model.fetch.call().then((data) => {
        // getMessageObject 是包含满足条件的 message 对象的数组
        while (list.childElementCount){
          list.removeChild(list.firstElementChild)
        }
        data.forEach((item) => {
          const {visitorName,visitorMessage } = item.attributes
          this.renderListItem(visitorName,visitorMessage,item.createdAt.toLocaleString())
        })
      })
    },
    bindEvents:function(){
      this.component.form.addEventListener("submit",(e)=>{
        e.preventDefault()
        if (this.status.loadingData) return 
        this.status.loadingData = true
        this.saveMessage()     
      })
    },
    saveMessage:function(){
      const visitorName = getInputValue("input[name=name]",this.component.form)
      const visitorMessage = getInputValue("input[name=content]",this.component.form)
      this.model.save.call(undefined,{visitorName,visitorMessage}).then(
        ()=>{
          this.dataInit()
        },
        ()=>{
          alert("提交失败,请重试")
        }
      )
    },
    renderListItem:function(messageName,messageContent,messageTime){
      const li = addLabel ("li", {classList:"messageStyle"})
      const obj = { messageName ,messageContent ,messageTime }
      Object.keys(obj).forEach((classList)=>{
        const textContent = obj[classList]
        li.appendChild(addLabel('div',{classList,textContent}))
      })
      this.component.list.appendChild(li)
    },
    clearForm:function(){
      ['name','content'].forEach((name)=>{
        this.component.form.querySelector(`input[name=${name}]`).value = ""
      })
    }
  
  })
  controller.init(model,view)
}.call())












