var data = {
  //首页需要的信息
  activities: [
    {
      bus_id: 1,
      act_id: 1,
      act_name: "大家一起来射箭",
      act_avatar: "/image/other/shejian.jpg",
      act_date: {
        _date: "3月1日",
        time: "下午5:00"
      },
      member: {
        max: 10,
        min: 5,
        now: 3
      },
      act_originator: {
        ori_avatar: "/image/other/shejian.jpg",
        ori_name: "陈龙"
      }
    },
    {
      bus_id: 1,
      act_id: 2,
      act_name: "李琰喊你回家射箭",
      act_avatar: "/image/other/shejian.jpg",
      act_date: {
        _date: "3月1日",
        time: "晚8:00"
      },
      member: {
        max: 5,
        min: 2,
        now: 62
      },
      act_originator: {
        ori_avatar: "/image/other/shejian.jpg",
        ori_name: "李琰"
      }
    },
    {
      bus_id: 1,
      act_id: 3,
      act_name: "崔瑶NB",
      act_avatar: "/image/other/shejian.jpg",
      act_date: {
        _date: "5月16日",
        time: "上午5:30"
      },
      member: {
        max: 10,
        min: 5,
        now: 100
      },
      act_originator: {
        ori_avatar: "/image/other/shejian.jpg",
        ori_name: "崔瑶"
      }
    }
  ],
  detail:
  {
    business_info: {
      bus_avatar: "/image/other/shejian.jpg",
      bus_introduce: {
        bus_name: "陈龙的射箭馆",
        bus_images: ["/image/other/timg.jpg", "/image/other/timg.jpg", "/image/other/timg.jpg"],
        bus_location: "北京市朝阳区平乐园100号",
        bus_map_image: "/image/other/shejian.jpg",
        bus_discount: ["满5人打8折", "出示学生证并关注公众号即可享受优惠"],
        bus_phone: "13263135237"
      }
    },
    activity_info: {
      bus_id: 1,
      act_id: 3,
      act_name: "崔瑶NB",
      act_avatar: "/image/other/shejian.jpg",
      act_date: {
        _date: "5月16日",
        time: "上午5:30"
      },
      member: {
        max: 10,
        min: 5,
        now: 4
      },
      act_originator: {
        ori_avatar: "/image/other/shejian.jpg",
        ori_name: "崔瑶"
      }
    }
  }

};

// "businesses": [
//   {
//     "bus_id": 1,
//     "bus_avatar": "活动头像url",
//     "bus_introduce": { //活动的介绍
//       "bus_name": "鼎福射箭馆",
//       "bus_images":"",
//       "bus_location": "平乐园十字路口",
//       "bus_info":"介绍",
//       "bus_discount": [{
//         "5":50,
//         "10":100
//       }],
//       "bus_phone": "13263135237"
//     }
//   }
// ],



module.exports = {
  data: data
};