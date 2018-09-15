// pages/product/product.js
Page({
  db : wx.cloud.database(),
  /**
   * 页面的初始数据
   */
  data: {
    typeClass: 1,
    products : null,
    productTypes : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var $this = this;
    this.getProducts('1');
    this.db.collection('productType').get({
      success:function(res){
        $this.setData({
          productTypes : res.data
        });
      },
      fail: console.error
    });
  },

  getProducts :function(typeId){
    var $this = this;
    this.db.collection('productinfo').where({
      productType: typeId+''
    }).get({
      success: function (res) {
        console.log("获取产品列表：");
        console.log(res.data);
        $this.setData({
          products: res.data
        })
      },
      fail: function (e) {
        console.log(e.errMsg);
      }
    });
  },

  selectType: function(e) {
    var classtype = e.currentTarget.dataset.type;
    this.setData({
      typeClass: classtype
    });
    this.getProducts(classtype);
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