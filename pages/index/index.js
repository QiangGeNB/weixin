// pages/index/index.js
var local_data = require('../../data/data_mock.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities : local_data.data.activities
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  enter_act_detail: function(event){
    this.setData({
      chenlong: event.currentTarget.dataset.act_id
    });
    wx.navigateTo({
      url: '/pages/activities_detail/activities_detail?act_id=' + event.currentTarget.dataset.act_id,
      success: function(res){},
      fail: function() {},
      complete: function() {}
    })
  }
})