"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userName: "",
      //真实姓名
      phone: "",
      //电话号码
      userId: "",
      //身份证号
      licensePlate: "",
      //车牌
      vehicleModel: ""
      //车型
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u__input2 + _easycom_u_button2)();
}
const _easycom_u__input = () => "../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u__input + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.userName = $event),
    b: common_vendor.p({
      placeholder: "请输入",
      border: "none",
      inputAlign: "right",
      fontSize: "30rpx",
      disabled: _ctx.inputStatus,
      modelValue: $data.userName
    }),
    c: common_vendor.o(($event) => $data.phone = $event),
    d: common_vendor.p({
      placeholder: "请输入",
      border: "none",
      inputAlign: "right",
      fontSize: "30rpx",
      disabled: _ctx.inputStatus,
      modelValue: $data.phone
    }),
    e: common_vendor.o(($event) => $data.userId = $event),
    f: common_vendor.p({
      placeholder: "请输入",
      border: "none",
      inputAlign: "right",
      fontSize: "30rpx",
      disabled: _ctx.inputStatus,
      modelValue: $data.userId
    }),
    g: common_vendor.o(($event) => $data.licensePlate = $event),
    h: common_vendor.p({
      placeholder: "请输入",
      border: "none",
      inputAlign: "right",
      fontSize: "30rpx",
      disabled: _ctx.inputStatus,
      modelValue: $data.licensePlate
    }),
    i: common_vendor.o(($event) => $data.vehicleModel = $event),
    j: common_vendor.p({
      placeholder: "请输入",
      border: "none",
      inputAlign: "right",
      fontSize: "30rpx",
      disabled: _ctx.inputStatus,
      modelValue: $data.vehicleModel
    }),
    k: common_vendor.p({
      type: "primary",
      text: "提交认证"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aab5e4ba"], ["__file", "F:/daima/ylqc_driver/pages/user/authentication.vue"]]);
wx.createPage(MiniProgramPage);
