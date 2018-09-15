// pages/discounts/discounts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wsy: [{
      "title": "5次洗发卡",
      "give": "赠送10积分",
      "cost": "199",
      "oldcost": "399",
      "state": "1"
    }],
    ysy: [{
      "title": "2次洗发卡",
      "give": "赠送5积分",
      "cost": "99",
      "oldcost": "199",
      "state": "2"
    }],
    ygq: [{
      "title": "2次洗发卡",
      "give": "赠送5积分",
      "cost": "99",
      "oldcost": "199",
      "state": "3"
    }],
    choose: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  change: function(e) {
    var id = e.currentTarget.dataset.id;
    console.log("id:" + id);
    this.setData({
      choose: id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})