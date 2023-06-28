"use strict";
const common_vendor = require("../../../common/vendor.js");
const orderMap = () => "../../../components/order-map/order-map.js";
const _sfc_main = {
  data() {
    return {
      licensePlate: "桂B12343",
      //车牌
      driverName: "韦师傅",
      //司机姓名
      score: "4.9",
      //评分
      totalPrice: 49,
      //订单总价
      list: [
        {
          name: "chat-fill",
          title: "信息联系"
        },
        {
          name: "phone-fill",
          title: "电话联系"
        },
        {
          name: "server-fill",
          title: "联系客服"
        },
        {
          name: "edit-pen-fill",
          title: "评价司机"
        }
      ],
      orderList: [{
        orderId: "1234566",
        //订单编号
        orderStatus: "订单进行中",
        //订单状态
        orderTime: "2023.5.17",
        //订单时间
        startName: "柳州市延龙汽车",
        //发件地名称
        startAddress: "广西壮族自治区柳州市鱼峰区和悦路1号",
        //发件地址
        endName: "柳州市万象城",
        //收件地址
        endAddress: "广西壮族自治区柳州市鱼峰区文昌路17号",
        //收件地址
        totalPrice: 50,
        //订单总价
        contacts: "小明",
        //联系人
        conPhone: "155664455",
        //联系电话
        goodsNumber: "3",
        //货物数量
        notes: "无"
        //订单备注
      }],
      roadList: [{
        orderStatus: "订单已完成",
        //订单状态
        orderTime: "2023.5.17",
        //订单时间
        roadName: "柳州市汽贸园",
        //发件地址
        roadAddress: "广西壮族自治区柳州市鱼峰区和悦路1号",
        //收件地址
        contacts: "小明",
        //联系人
        conPhone: "155664455"
        //联系电话
      }, {
        orderStatus: "订单进行中",
        //订单状态
        orderTime: "2023.5.17",
        //订单时间
        roadName: "柳州市汽贸园",
        //发件地址
        roadAddress: "广西壮族自治区柳州市鱼峰区和悦路1号",
        //收件地址
        contacts: "小明",
        //联系人
        conPhone: "155664455"
        //联系电话
      }]
    };
  },
  components: {
    orderMap
  },
  methods: {
    toService() {
      common_vendor.index.navigateTo({
        url: "/pages/order/service/service"
      });
    }
  }
};
if (!Array) {
  const _component_orderMap = common_vendor.resolveComponent("orderMap");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_component_orderMap + _easycom_u_gap2 + _easycom_u_icon2 + _easycom_u_button2)();
}
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_gap + _easycom_u_icon + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "15",
      bgColor: "#efefef"
    }),
    b: common_vendor.t($data.totalPrice),
    c: common_vendor.f($data.orderList, (item, index, i0) => {
      return {
        a: "bde4f0ef-2-" + i0,
        b: common_vendor.t(item.startName),
        c: common_vendor.t(item.startAddress),
        d: common_vendor.t(item.contacts),
        e: common_vendor.t(item.conPhone),
        f: common_vendor.f($data.roadList, (oradItem, oradIndex, i1) => {
          return {
            a: "bde4f0ef-3-" + i0 + "-" + i1,
            b: common_vendor.t(oradItem.roadName),
            c: "bde4f0ef-4-" + i0 + "-" + i1,
            d: common_vendor.t(oradItem.roadAddress),
            e: common_vendor.t(oradItem.orderStatus),
            f: oradItem.orderStatus === "订单已完成",
            g: common_vendor.t(oradItem.orderStatus),
            h: oradItem.orderStatus === "订单进行中",
            i: common_vendor.t(oradItem.contacts),
            j: common_vendor.t(oradItem.conPhone),
            k: "bde4f0ef-5-" + i0 + "-" + i1,
            l: common_vendor.o((...args) => $options.toService && $options.toService(...args), oradIndex),
            m: oradIndex
          };
        }),
        g: "bde4f0ef-6-" + i0,
        h: common_vendor.t(item.endName),
        i: "bde4f0ef-7-" + i0,
        j: common_vendor.t(item.endAddress),
        k: common_vendor.t(item.orderStatus),
        l: item.orderStatus === "订单已完成",
        m: common_vendor.t(item.orderStatus),
        n: item.orderStatus === "订单进行中",
        o: common_vendor.t(item.contacts),
        p: common_vendor.t(item.conPhone),
        q: "bde4f0ef-8-" + i0,
        r: common_vendor.o((...args) => $options.toService && $options.toService(...args), index),
        s: common_vendor.t(item.orderId),
        t: common_vendor.t(item.orderTime),
        v: common_vendor.t(item.conPhone),
        w: common_vendor.t(item.goodsNumber),
        x: common_vendor.t(item.notes),
        y: index
      };
    }),
    d: common_vendor.p({
      name: "car-fill",
      color: "#00cc33",
      size: "16"
    }),
    e: common_vendor.p({
      name: "car-fill",
      color: "#666666",
      size: "16"
    }),
    f: common_vendor.p({
      name: "arrow-right",
      size: "14"
    }),
    g: common_vendor.p({
      type: "info",
      shape: "circle",
      plain: true,
      text: "送达确认",
      size: "mini"
    }),
    h: common_vendor.p({
      name: "car-fill",
      color: "red",
      size: "16"
    }),
    i: common_vendor.p({
      name: "arrow-right",
      size: "14"
    }),
    j: common_vendor.p({
      type: "info",
      shape: "circle",
      plain: true,
      text: "送达确认",
      size: "mini"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bde4f0ef"], ["__file", "F:/daima/ylqc_driver/pages/order/orderdetails/orderdetails.vue"]]);
wx.createPage(MiniProgramPage);
