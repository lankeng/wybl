// pages/my/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['进行中的', '已完成的'],
    currentTab: 0  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  navbarTap: function (e) {//选项卡
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }, 

  sourcedit:function(){   //未回复
    wx.navigateTo({
      url: 'sourceedit/sourceedit',
    })
  },

  completed:function(){
    wx.navigateTo({
      url: 'sourcestate/sourcestate',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})