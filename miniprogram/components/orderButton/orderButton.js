// components/orderButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl:{
      type:String,
      value:'图标地址'
    },
    buttonName:{
      type : String,
      value : '订单名字'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail(){
      this.triggerEvent("cancelEvent")
    }
  }
})
