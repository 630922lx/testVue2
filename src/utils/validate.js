// 姓名验证
export function nameRule(rule, value, callback) {
    // 请输入4-10位昵称
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (value == '') {
        callback(new Error('请输入用户名'))

    } else if (!reg.test(value)) {
        callback(new Error('请输入4-10位用户名'))
    } else {
        callback()
    }
}
//密码验证
export function passRule(rule, value, callback) {
    // 6-12位密码需要包含大小写字母和数组以及特殊符号
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/
    if (value == '') {
        callback(new Error('请输入密码'))

    } else if (!pass.test(value)) {
        callback(new Error('12位密码需要包含大小写字母和数组以及特殊符号'))
    } else {
        callback()
    }
}