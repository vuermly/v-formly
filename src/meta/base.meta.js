import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";

class BaseMeta {
  constructor(state, id, meta) {
    if (this.constructor == BaseMeta) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.id = id;
    this.state = state;
    this.meta = meta;
    this.type = (this.meta.ui && this.meta.ui.component) || this.meta.type;
    this.ui = Object.assign({}, this.state.ui, this.meta.ui);

    // TODO:可能需要一个getter/setter，setter需要判断是否有错误，有错误才设置上去
    this.error = undefined;
    state.context.addContext(id, this);
    this._value = undefined;

    this._initMetaValue = this.getInitMetaValue();
    this.initValue();
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (this.meta.default) {
      this.value = this.meta.default;
    }
  }

  setValue(val) {
    this._value = val || undefined;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    if (this._value === val) return;

    this.setValue(val);

    Vue.bus.emit(`${FORM_VALUE_CHANGE}-${this.state._formId}`, {
      id: this.id,
      value: this._value,
    });

    this.state.updateObjProp(this.state.formData, this.id, this._value);
    this.state.validate.runValidationFormItem(this);
  }

  /**
   * v-formly 中通过v-model传入的组件初始值
   * @returns 组件初始值
   */
  getInitMetaValue() {
    const props = this.id.split("/").filter((f) => f);
    let curVal = "";
    props.reduce((acc, key, idx) => {
      if (idx === props.length - 1) {
        curVal = acc[key];
      }

      return acc[key] || {};
    }, this.state.formData);

    return curVal;
  }
}

// 注意：此类为基类，不能直接实例化
export { BaseMeta };
