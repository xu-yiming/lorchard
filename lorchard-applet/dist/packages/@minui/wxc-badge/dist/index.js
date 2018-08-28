'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    value: {
      type: [Number, String],
      value: 0
    },
    max: {
      type: [Number, String],
      value: 100
    },
    type: {
      type: String,
      value: 'number'
    },
    _system_: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {},
  attached: function attached() {
    var host = this;
    var data = host.data;
    var max = parseInt(data.max, 10);
    var value = parseInt(data.value, 10);

    // 超出 max 范围显示 max+
    if (value && max && value > max) {
      host.setData({
        value: max + '+'
      });
    }

    // 设置系统信息
    wx.getSystemInfo && wx.getSystemInfo({
      success: function success(res) {
        host.setData({
          _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
        });
      }
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwibWF4IiwiX3N5c3RlbV8iLCJkYXRhIiwibWV0aG9kcyIsImF0dGFjaGVkIiwiaG9zdCIsInBhcnNlSW50Iiwic2V0RGF0YSIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJzeXN0ZW0iLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJSUEsYUFBVyxFO0FBQ1hDLGNBQVk7QUFDVkMsV0FBTztBQUNMQyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQUREO0FBRUxILGFBQU87QUFGRixLQURHO0FBS1ZJLFNBQUs7QUFDSEgsWUFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVISCxhQUFPO0FBRkosS0FMSztBQVNWQyxVQUFNO0FBQ0pBLFlBQU1FLE1BREY7QUFFSkgsYUFBTztBQUZILEtBVEk7QUFhVkssY0FBVTtBQUNSSixZQUFNRSxNQURFO0FBRVJILGFBQU87QUFGQztBQWJBLEc7QUFrQlpNLFFBQU0sRTtBQUNOQyxXQUFTLEU7QUFDVEMsWUFBVSxvQkFBVztBQUNuQixRQUFJQyxPQUFPLElBQVg7QUFDQSxRQUFJSCxPQUFPRyxLQUFLSCxJQUFoQjtBQUNBLFFBQUlGLE1BQU1NLFNBQVNKLEtBQUtGLEdBQWQsRUFBbUIsRUFBbkIsQ0FBVjtBQUNBLFFBQUlKLFFBQVFVLFNBQVNKLEtBQUtOLEtBQWQsRUFBcUIsRUFBckIsQ0FBWjs7QUFFQTtBQUNBLFFBQUlBLFNBQVNJLEdBQVQsSUFBZ0JKLFFBQVFJLEdBQTVCLEVBQWlDO0FBQy9CSyxXQUFLRSxPQUFMLENBQWE7QUFDWFgsZUFBT0ksTUFBTTtBQURGLE9BQWI7QUFHRDs7QUFFRDtBQUNBUSxPQUFHQyxhQUFILElBQW9CRCxHQUFHQyxhQUFILENBQWlCO0FBQ25DQyxlQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJOLGFBQUtFLE9BQUwsQ0FBYTtBQUNYTixvQkFBVSxDQUFDLENBQUMsQ0FBQ1UsSUFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQUgsR0FBbUMsU0FBbkMsR0FBK0M7QUFEOUMsU0FBYjtBQUdEO0FBTGtDLEtBQWpCLENBQXBCO0FBT0QiLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICAgIH0sXG4gICAgYmVoYXZpb3JzOiBbXSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICB2YWx1ZTogMTAwXG4gICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnbnVtYmVyJ1xuICAgICAgfSxcbiAgICAgIF9zeXN0ZW1fOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgaG9zdCA9IHRoaXM7XG4gICAgICBsZXQgZGF0YSA9IGhvc3QuZGF0YTtcbiAgICAgIGxldCBtYXggPSBwYXJzZUludChkYXRhLm1heCwgMTApO1xuICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZGF0YS52YWx1ZSwgMTApO1xuXG4gICAgICAvLyDotoXlh7ogbWF4IOiMg+WbtOaYvuekuiBtYXgrXG4gICAgICBpZiAodmFsdWUgJiYgbWF4ICYmIHZhbHVlID4gbWF4KSB7XG4gICAgICAgIGhvc3Quc2V0RGF0YSh7XG4gICAgICAgICAgdmFsdWU6IG1heCArICcrJ1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyDorr7nva7ns7vnu5/kv6Hmga9cbiAgICAgIHd4LmdldFN5c3RlbUluZm8gJiYgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBob3N0LnNldERhdGEoe1xuICAgICAgICAgICAgX3N5c3RlbV86ICEhfnJlcy5zeXN0ZW0uaW5kZXhPZignQW5kcm9pZCcpID8gJ2FuZHJvaWQnIDogJ2lvcydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9Il19