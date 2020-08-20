let BootpayRest = require('../lib/bootpay');

BootpayRest.setConfig(
    '59bfc738e13f337dbd6ca48a',
    'pDc0NwlkEX3aSaHTp/PPL/i8vn5E/CqRChgyEp/gHD0=',
    'development'
);

(async () => {
    let response = await BootpayRest.getAccessToken()
    if (response.status === 200) {
        let result
        try {
            result = await BootpayRest.verify('5f0d42a7d111902931bea5ff')
        } catch (e) {
            return console.log(e.error)
        }
        console.log(result)
    }
})()