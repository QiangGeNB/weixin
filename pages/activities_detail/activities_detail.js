// pages/activities_detail/activities_detail.js
var local_data = require('../../data/data_mock.js');
Page({
  data:{
    bus_info : local_data.data.detail.business_info,
    act_info : local_data.data.detail.activity_info,
    join_mark: local_data.data.detail.activity_info.member.max-local_data.data.detail.activity_info.member.now,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      act_id: options.act_id
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  test : function(){
    this.setData({
      join_mark: this.data.join_mark-1
    })
  }
})