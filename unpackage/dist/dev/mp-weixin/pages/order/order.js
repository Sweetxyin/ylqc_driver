"use strict";
const common_vendor = require("../../common/vendor.js");
const Processing = () => "../../components/order-status/order-processing.js";
const Complete = () => "../../components/order-status/order-complete.js";
const Cancel = () => "../../components/order-status/order-cancel.js";
const _sfc_main = {
  data() {
    return {
      list1: [{
        name: "进行中"
      }, {
        name: "已完成"
      }, {
        name: "已取消"
      }],
      tabIndex: 0,
      // tabStatus:true
      order_total: 1,
      //订单数量
      order_state: 1
    };
  },
  components: {
    Processing,
    Complete,
    Cancel
  },
  onLoad() {
  },
  methods: {
    tabChang(index) {
      this.tabIndex = index.index;
      console.log(this.tabIndex);
      console.log("index的值为：" + this.tabIndex + "和index" + index.index);
    }
  }
};
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  const _component_Processing = common_vendor.resolveComponent("Processing");
  const _component_Complete = common_vendor.resolveComponent("Complete");
  const _component_Cancel = common_vendor.resolveComponent("Cancel");
  (_easycom_u_tabs2 + _easycom_u_sticky2 + _easycom_u_empty2 + _component_Processing + _component_Complete + _component_Cancel)();
}
const _easycom_u_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_sticky = () => "../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
const _easycom_u_empty = () => "../../uni_modules/uview-plus/components/u-empty/u-empty.js";
if (!Math) {
  (_easycom_u_tabs + _easycom_u_sticky + _easycom_u_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.tabChang),
    b: common_vendor.p({
      list: $data.list1,
      scrollable: false,
      current: $data.tabIndex,
      itemStyle: "padding-left: 41px; padding-right:39px; height: 34px;",
      activeStyle: {
        color: "#3c9cff",
        fontWeight: "bold",
        transform: "scale(1.05)"
      }
    }),
    c: common_vendor.p({
      bgColor: "#fff"
    }),
    d: $data.tabIndex === 0
  }, $data.tabIndex === 0 ? common_vendor.e({
    e: $data.order_total === 0
  }, $data.order_total === 0 ? {
    f: common_vendor.p({
      mode: "order",
      icon: "http://cdn.uviewui.com/uview/empty/car.png"
    })
  } : {}) : $data.tabIndex === 1 ? common_vendor.e({
    h: $data.tabIndex === 0
  }, $data.tabIndex === 0 ? {
    i: common_vendor.p({
      mode: "order",
      icon: "http://cdn.uviewui.com/uview/empty/car.png"
    })
  } : {}) : common_vendor.e({
    j: $data.tabIndex === 0
  }, $data.tabIndex === 0 ? {
    k: common_vendor.p({
      mode: "order",
      icon: "http://cdn.uviewui.com/uview/empty/car.png"
    })
  } : {}), {
    g: $data.tabIndex === 1
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/daima/ylqc_driver/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
