"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      fileList1: []
    };
  },
  methods: {
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    // 新增图片
    async afterRead(event) {
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: "success",
          message: "",
          url: result
        }));
        fileListLen++;
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        common_vendor.index.uploadFile({
          url: "http://192.168.2.21:7001/upload",
          // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test"
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1e3);
          }
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_gap2 + _easycom_u__textarea2 + _easycom_u_upload2 + _easycom_u_button2)();
}
const _easycom_u_gap = () => "../../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u__textarea = () => "../../../uni_modules/uview-plus/components/u--textarea/u--textarea.js";
const _easycom_u_upload = () => "../../../uni_modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_gap + _easycom_u__textarea + _easycom_u_upload + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "10",
      bgColor: "#efefef"
    }),
    b: common_vendor.o(($event) => _ctx.value1 = $event),
    c: common_vendor.p({
      border: "none",
      placeholder: "拍照说明:",
      modelValue: _ctx.value1
    }),
    d: common_vendor.o($options.afterRead),
    e: common_vendor.o($options.deletePic),
    f: common_vendor.p({
      fileList: $data.fileList1,
      name: "1",
      multiple: true,
      maxCount: 10
    }),
    g: common_vendor.o(_ctx.submit),
    h: common_vendor.p({
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47fe1204"], ["__file", "F:/daima/ylqc_driver/pages/order/service/service.vue"]]);
wx.createPage(MiniProgramPage);
