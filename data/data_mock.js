var data = {
  //首页需要的信息
  activities : [
    {
      bus_id : 1,
      act_id : 1,
      act_name : "大家一起来射箭",
      act_avatar : "/image/other/shejian.jpg",
      act_date : {
        _date: "3月1日",
        time : "下午5:00"
      },
      member : {
        max : 10,
        min : 5,
        now : 3
      },
      act_originator : {
        ori_avatar : "/image/other/shejian.jpg",
        ori_name : "陈龙"
      }
    },
    {
      bus_id : 1,
      act_id : 2,
      act_name : "李琰喊你回家射箭",
      act_avatar : "/image/other/shejian.jpg",
      act_date : {
        _date : "3月1日",
        time : "晚8:00"
      },
      member : {
        max : 5,
        min : 2,
        now : 62
      },
      act_originator : {
        ori_avatar : "/image/other/shejian.jpg",
        ori_name : "李琰"
      }
    },
    {
      bus_id : 1,
      act_id : 3,
      act_name : "崔瑶NB",
      act_avatar : "/image/other/shejian.jpg",
      act_date : {
        _date : "5月16日",
        time : "上午5:30"
      },
      member : {
        max : 10,
        min : 5,
        now : 100
      },
      act_originator : {
        ori_avatar : "/image/other/shejian.jpg",
        ori_name : "崔瑶"
      }
    }
  ]
};

module.exports = {
  data: data
};