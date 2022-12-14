import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StringView from "../views/StringView.vue";
import BooleanView from "../views/BooleanView.vue";
import ObjectView from "../views/ObjectView.vue";
import ArrayView from "../views/ArrayView.vue";
import AutoCompleteView from "../views/AutoCompleteView.vue";
import CheckboxView from "../views/CheckboxView.vue";
import DateView from "../views/DateView.vue";
import NumberView from "../views/NumberView.vue";
import TimeView from "../views/TimeView.vue";
import TextView from "../views/TextView.vue";
import RadioView from "../views/RadioView.vue";
import TextareaView from "../views/TextareaView.vue";
import SliderView from "../views/SliderView.vue";
import RateView from "../views/RateView.vue";
import TagView from "../views/TagView.vue";
import SelectView from "../views/SelectView.vue";
import CascaderView from "../views/CascaderView.vue";
import LayoutView from "../views/LayoutView.vue";
import PasswordView from "../views/PasswordView.vue";
import ChkInputView from "../views/ChkInputView.vue";
import VisibleIfView from "../views/VisibleIfView.vue";

import CustomValidatorView from "../views/CustomValidatorView.vue";
import SubmitButtonView from "../views/SubmitButtonView.vue";
import redirect from "../layout/components/redirect.vue";

/* Layout */
import BasicLayout from "../layout/BasicLayout.vue";
import EmptyLayout from "../layout/EmptyLayout.vue";

Vue.use(VueRouter);

// ๅ่ https://pro.antdv.com/docs/router-and-nav
export const routes = [
  {
    path: "/redirect",
    component: EmptyLayout,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: redirect,
      },
    ],
  },
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: HomeView,
        meta: { title: "Home ้ฆ้กต", icon: "dashboard" },
      },
      {
        path: "form",
        component: EmptyLayout,
        redirect: "string",
        name: "form",
        meta: { title: "Components ็ปไปถ", icon: "form" },
        children: [
          {
            path: "string",
            name: "string",
            component: StringView,
            meta: { title: "String ๆๆฌๆก" },
          },
          {
            path: "boolean",
            name: "boolean",
            component: BooleanView,
            meta: { title: "Boolean ๅผๅณ" },
          },
          {
            path: "object",
            name: "object",
            component: ObjectView,
            meta: { title: "Object ๅฏน่ฑก" },
          },
          {
            path: "array",
            name: "array",
            component: ArrayView,
            meta: { title: "Array ๆฐ็ป" },
          },
          {
            path: "autoComplete",
            name: "autoComplete",
            component: AutoCompleteView,
            meta: { title: "AutoComplete ่ชๅจๅฎๆ" },
          },
          {
            path: "checkbox",
            name: "checkbox",
            component: CheckboxView,
            meta: { title: "Checkbox ๅค้ๆก" },
          },
          {
            path: "date",
            name: "date",
            component: DateView,
            meta: { title: "Date ๆฅๆ" },
          },
          {
            path: "number",
            name: "number",
            component: NumberView,
            meta: { title: "Number ๆฐๅญ" },
          },
          {
            path: "time",
            name: "time",
            component: TimeView,
            meta: { title: "Time ๆถ้ด" },
          },
          {
            path: "text",
            name: "text",
            component: TextView,
            meta: { title: "Text ๆๆฌ" },
          },
          {
            path: "radio",
            name: "radio",
            component: RadioView,
            meta: { title: "Radio ๅ้ๆก" },
          },
          {
            path: "textarea",
            name: "textarea",
            component: TextareaView,
            meta: { title: "Textarea ๅค่กๆๆฌๆก" },
          },
          {
            path: "slider",
            name: "slider",
            component: SliderView,
            meta: { title: "Slider ๆปๅจ่พๅฅๆก" },
          },
          {
            path: "rate",
            name: "rate",
            component: RateView,
            meta: { title: "Rate ่ฏๅ" },
          },
          {
            path: "select",
            name: "select",
            component: SelectView,
            meta: { title: "Select ้ๆฉๅจ" },
          },
          {
            path: "tag",
            name: "tag",
            component: TagView,
            meta: { title: "Tag ๆ?็ญพ" },
          },
          {
            path: "cascader",
            name: "cascader",
            component: CascaderView,
            meta: { title: "Cascader ็บง่้ๆฉ" },
          },
        ],
      },
      {
        path: "function",
        component: EmptyLayout,
        redirect: "custom-validator",
        name: "function",
        meta: { title: "Functional ๅ่ฝๆง", icon: "control" },
        children: [
          {
            path: "custom-validator",
            name: "custom-validator",
            component: CustomValidatorView,
            meta: { title: "่ชๅฎไนๆ?ก้ช" },
          },
          {
            path: "custom-submit-button",
            name: "custom-submit-button",
            component: SubmitButtonView,
            meta: { title: "่ชๅฎไนๆไบคๆ้ฎ" },
          },
          {
            path: "layout",
            name: "layout",
            component: LayoutView,
            meta: { title: "่กจๅๅธๅฑ" },
          },
          {
            path: "password",
            name: "password",
            component: PasswordView,
            meta: { title: "่ชๅฎไนๅฏ็?ๆก็ปไปถ" },
          },
          {
            path: "chkinput",
            name: "chkinput",
            component: ChkInputView,
            meta: { title: "่ชๅฎไน้ๆฉ่พๅฅๆก็ปไปถ" },
          },
          {
            path: "visible-if",
            name: "visible-if",
            component: VisibleIfView,
            meta: { title: "visibleIfๅจๆ่ฎพ็ฝฎ่กจๅ้กนๆฏๅฆๅฏ่ง" },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
