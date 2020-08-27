const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

var BootpayRest = require('bootpay-rest-client');

dotenv.config();

const app = express();
app.use(cors());
app.set('port', process.env.PORT ||8000);
app.use(morgan('dev'));

app.post('/v1/payment/test/', (req, res) =>{
	console.log(req.body);
	
})

app.use(bodyParser.json());

BootpayRest.setConfig(
    '59a4d32b396fa607c2e75e00',
    't3UENPWvsUort5WG0BFVk2+yBzmlt3UDvhDH2Uwp0oA='    
);
BootpayRest.getAccessToken().then(function (response) {
	if (response.status === 200) {
		console.log(response);
	}
});


// BootpayRest.setConfig(
//     '59a4d32b396fa607c2e75e00',
//     't3UENPWvsUort5WG0BFVk2+yBzmlt3UDvhDH2Uwp0oA='    
// );

BootpayRest.getAccessToken().then(function (response) {
	// Access Token을 발급 받았을 때
	if (response.status === 200 && response.data.token !== undefined) {
		BootpayRest.verify('[[receipt id ]]').then(function (_response) {
			// 검증 결과를 제대로 가져왔을 때
			if (_response.status === 200) {
				// 원래 주문했던 금액이 일치하는가?
				// 그리고 결제 상태가 완료 상태인가?
				if (_response.data.price === price && _response.data.status === 1) {
					// TODO: 이곳이 상품 지급 혹은 결제 완료 처리를 하는 로직으로 사용하면 됩니다.
				}
			}
		});
	}
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
    
})



