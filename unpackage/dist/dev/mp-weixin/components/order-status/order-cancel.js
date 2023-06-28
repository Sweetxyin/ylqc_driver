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
          orderStatus: "订单已取消",
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
          orderStatus: "订单已取消",
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
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.indexList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.orderType),
        b: "3f5d5f3b-0-" + i0,
        c: common_vendor.t(item.orderTime),
        d: common_vendor.t(item.orderStatus),
        e: "3f5d5f3b-1-" + i0,
        f: common_vendor.t(item.startAddress),
        g: "3f5d5f3b-2-" + i0,
        h: common_vendor.t(item.endAddress),
        i: common_vendor.t(item.deliveryTime),
        j: common_vendor.t(item.price),
        k: index
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
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f5d5f3b"], ["__file", "F:/daima/ylqc_driver/components/order-status/order-cancel.vue"]]);
wx.createComponent(Component);
