import cookies from 'vue-cookies'  //yarn add vue-cookies
// cookies.set('session', '123')//可以将cookies设为123即document.cookies="session=123"
const state = {
    // show_login_dialog: false,
    // // on 表示 显示的是登录框，up 则是注册框
    // on_or_up: 'on',
    //用户是否登录了，登录了就有cookies，cookies名字叫session
    sign_on: cookies.get('session') ? true : false,
    // login_info: {
    //     'message': ''
    // },
    // user_info: {

    // }
}
export default {
    namespaced: true,
    state 
}