"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isLogin: true,
      orderList: [{
        wholeCourse: 12,
        //全程公里数
        distance: 2,
        //距离司机公里数
        orderTime: "6月19日13:33",
        //订单生成时间
        startAddress: "柳州市延龙汽车",
        //始发地址
        endAddress: "柳州市万象城",
        //收件地址
        goodsType: "配件",
        //货物种类
        deliveryTime: "6月19日15:33",
        //送达时间
        orderAmount: 70
        //订单金额
      }, {
        wholeCourse: 8,
        //全程公里数
        distance: 3,
        //距离司机公里数
        orderTime: "6月19日12:33",
        //订单生成时间
        startAddress: "柳州市延龙汽车",
        //始发地址
        endAddress: "柳州市万象城",
        //收件地址
        goodsType: "日用品",
        //货物种类
        deliveryTime: "6月19日13:33",
        //送达时间
        orderAmount: 54
        //订单金额	
      }]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_button2 + _easycom_u_icon2)();
}
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.isLogin
  }, !$data.isLogin ? {
    b: common_vendor.p({
      type: "primary",
      plain: true,
      size: "small",
      text: "去登录"
    })
  } : {
    c: common_vendor.f($data.orderList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.wholeCourse),
        b: common_vendor.t(item.distance),
        c: "c994d4eb-1-" + i0,
        d: common_vendor.t(item.orderTime),
        e: "c994d4eb-2-" + i0,
        f: common_vendor.t(item.startAddress),
        g: "c994d4eb-3-" + i0,
        h: common_vendor.t(item.endAddress),
        i: common_vendor.t(item.goodsType),
        j: common_vendor.t(item.deliveryTime),
        k: common_vendor.t(item.orderAmount),
        l: "c994d4eb-4-" + i0,
        m: index
      };
    }),
    d: common_vendor.p({
      name: "clock-fill",
      size: "14"
    }),
    e: common_vendor.p({
      name: "car-fill",
      color: "#00cc33",
      size: "16"
    }),
    f: common_vendor.p({
      name: "car-fill",
      color: "#dc143c",
      size: "16"
    }),
    g: common_vendor.p({
      type: "error",
      size: "small",
      text: "抢单"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c994d4eb"], ["__file", "F:/daima/ylqc_driver/pages/seizeorders/seizeorders.vue"]]);
wx.createPage(MiniProgramPage);
