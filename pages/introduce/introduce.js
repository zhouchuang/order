var getData = require('/data.js');
const app = getApp();
Page({
  data: {
    menus:[],
    userInfo:{},
    totalMoney:0,
    totalPerson:0
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } 
    this.setData({
      menus: getData.localData.menus
    });
  },
  selectedHander:function(event){
    var name  = event.currentTarget.dataset.name;
    var type = event.currentTarget.dataset.type;
    for (var key in this.data.menus){
      if(this.data.menus[key].name==name){
        this.data.menus[key].status = (type=='default'?'warn':'default');
      }
    }
    this.setData({
      menus:this.data.menus
    });
  },
  checkboxChange:function(e){
    var num  =  0;
    var values = e.detail.value;
    for(var index in values){
      num += parseInt(values[index]);
    }
    this.setData({
      totalMoney: num,
      totalPerson: values.length
    });
  },
  checkboxHandler:function(e){
   
  },
  checkboxClick:function(e){
      console.log(e.currentTarget.dataset.index);
      console.log(e.currentTarget.checked);
  }
})