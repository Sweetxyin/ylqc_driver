"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "order-processing",
  data() {
    return {
      indexList: [
        {
          orderId: "123",
          //订单编号
          orderType: "任务订单",
          //订单类型
          orderStatus: "订单已生成",
          //订单状态
          orderTime: "6月20日10:12",
          //订单时间
          startAddress: "柳州市延龙汽车",
          //始发地址
          endAddress: "柳州市万象城",
          //收件地址
          deliveryTime: "6月20日12:10",
          //送达时间
          price: 50
          //金额
        },
        {
          orderId: "234",
          //订单编号
          orderType: "抢单订单",
          //订单类型
          orderStatus: "订单已生成",
          //订单状态
          orderTime: "2023.5.18",
          //订单时间
          startAddress: "柳州市阳和科三考场",
          //始发地址
          endAddress: "柳州市地王新天地",
          //收件地址
          deliveryTime: "6月20日12:10",
          //送达时间
          price: 65
          //金额
        }
      ]
    };
  },
  methods: {
    toOrderDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/order/orderdetails/orderdetails"
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_icon2 + _easycom_u_button2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.indexList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.orderType),
        b: "c9df37dd-0-" + i0,
        c: common_vendor.t(item.orderTime),
        d: common_vendor.t(item.orderStatus),
        e: "c9df37dd-1-" + i0,
        f: common_vendor.t(item.startAddress),
        g: "c9df37dd-2-" + i0,
        h: common_vendor.t(item.endAddress),
        i: common_vendor.t(item.deliveryTime),
        j: common_vendor.t(item.price),
        k: common_vendor.o((...args) => $options.toOrderDetail && $options.toOrderDetail(...args), index),
        l: "c9df37dd-3-" + i0,
        m: index
      };
    }),
    b: common_vendor.p({
      name: "clock-fill",
      size: "14"
    }),
    c: common_vendor.p({
      name: "car-fill",
      color: "#00cc33",
      size: "16"
    }),
    d: common_vendor.p({
      name: "car-fill",
      color: "#dc143c",
      size: "16"
    }),
    e: common_vendor.p({
      type: "info",
      shape: "circle",
      size: "small",
      plain: true,
      text: "取消订单"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c9df37dd"], ["__file", "F:/daima/ylqc_driver/components/order-status/order-processing.vue"]]);
wx.createComponent(Component);
