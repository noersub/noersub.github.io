
const _0x5b68ed=_0x5920;(function(_0x362327,_0xa84c6f){const _0x56d5db=_0x5920,_0x5e9fe9=_0x362327();while(!![]){try{const _0x51308d=-parseInt(_0x56d5db(0x95))/0x1+parseInt(_0x56d5db(0x78))/0x2+parseInt(_0x56d5db(0x84))/0x3*(-parseInt(_0x56d5db(0x7c))/0x4)+-parseInt(_0x56d5db(0x89))/0x5*(parseInt(_0x56d5db(0x9a))/0x6)+-parseInt(_0x56d5db(0x8f))/0x7*(parseInt(_0x56d5db(0x76))/0x8)+parseInt(_0x56d5db(0x88))/0x9+parseInt(_0x56d5db(0x8a))/0xa*(parseInt(_0x56d5db(0x7f))/0xb);if(_0x51308d===_0xa84c6f)break;else _0x5e9fe9['push'](_0x5e9fe9['shift']());}catch(_0xe4785){_0x5e9fe9['push'](_0x5e9fe9['shift']());}}}(_0x32ff,0x5be41));const _0x5d9f9c=(function(){let _0x248111=!![];return function(_0x3358a4,_0x37f3d5){const _0x17c912=_0x248111?function(){const _0x1a74ec=_0x5920;if(_0x37f3d5){const _0x4d80a8=_0x37f3d5[_0x1a74ec(0x91)](_0x3358a4,arguments);return _0x37f3d5=null,_0x4d80a8;}}:function(){};return _0x248111=![],_0x17c912;};}()),_0x5eeed3=_0x5d9f9c(this,function(){const _0x50444a=_0x5920;return _0x5eeed3[_0x50444a(0x83)]()[_0x50444a(0x9b)]('(((.+)+)+)+$')[_0x50444a(0x83)]()[_0x50444a(0x87)](_0x5eeed3)['search'](_0x50444a(0x96));});_0x5eeed3();const _0x30614e=(function(){let _0x1c80c2=!![];return function(_0x54b542,_0x224a0c){const _0x8fec6=_0x1c80c2?function(){if(_0x224a0c){const _0x32cc36=_0x224a0c['apply'](_0x54b542,arguments);return _0x224a0c=null,_0x32cc36;}}:function(){};return _0x1c80c2=![],_0x8fec6;};}()),_0x1e6c84=_0x30614e(this,function(){const _0x147bb9=_0x5920,_0x4bc64e=function(){const _0x3dd083=_0x5920;let _0x5071be;try{_0x5071be=Function(_0x3dd083(0x82)+_0x3dd083(0x92)+');')();}catch(_0x1d1e17){_0x5071be=window;}return _0x5071be;},_0x729a4a=_0x4bc64e(),_0x300761=_0x729a4a['console']=_0x729a4a['console']||{},_0x14e092=[_0x147bb9(0x81),_0x147bb9(0x80),_0x147bb9(0x8d),_0x147bb9(0x7a),'exception',_0x147bb9(0x8c),'trace'];for(let _0x279e2e=0x0;_0x279e2e<_0x14e092[_0x147bb9(0x7e)];_0x279e2e++){const _0x2e9f4c=_0x30614e[_0x147bb9(0x87)][_0x147bb9(0x77)][_0x147bb9(0x7b)](_0x30614e),_0x31b257=_0x14e092[_0x279e2e],_0x3a11e3=_0x300761[_0x31b257]||_0x2e9f4c;_0x2e9f4c[_0x147bb9(0x98)]=_0x30614e[_0x147bb9(0x7b)](_0x30614e),_0x2e9f4c[_0x147bb9(0x83)]=_0x3a11e3[_0x147bb9(0x83)]['bind'](_0x3a11e3),_0x300761[_0x31b257]=_0x2e9f4c;}});function _0x5920(_0x4cefc0,_0xd522c5){const _0x438478=_0x32ff();return _0x5920=function(_0x1e6c84,_0x30614e){_0x1e6c84=_0x1e6c84-0x76;let _0x44f9ff=_0x438478[_0x1e6c84];return _0x44f9ff;},_0x5920(_0x4cefc0,_0xd522c5);}_0x1e6c84();const apiKey=_0x5b68ed(0x7d),assetId=_0x5b68ed(0x94),getBitcoinPrice=async()=>{const _0x242f44=_0x5b68ed;try{const _0x5d2f71=await fetch(_0x242f44(0x79)+assetId+'&tsyms=USD',{'headers':{'authorization':_0x242f44(0x97)+apiKey}}),_0x15943a=await _0x5d2f71['json'](),_0x26541b=_0x15943a[_0x242f44(0x93)];return _0x26541b;}catch(_0x37fadb){return console[_0x242f44(0x7a)](_0x242f44(0x86),_0x37fadb),null;}},updateBitcoinPrice=async()=>{const _0x58e93a=_0x5b68ed,_0x18caf2=await getBitcoinPrice();if(_0x18caf2!==null){const _0x13c12d=document[_0x58e93a(0x85)]('bitcoin-price'),_0x16feb8=document[_0x58e93a(0x85)](_0x58e93a(0x8e)),_0x1cd1b1=new Date()[_0x58e93a(0x90)]();_0x13c12d[_0x58e93a(0x8b)]=_0x58e93a(0x99)+_0x18caf2,_0x16feb8[_0x58e93a(0x8b)]='Diperbarui\x20pada:\x20'+_0x1cd1b1;}};setInterval(updateBitcoinPrice,0xfa0);export{getBitcoinPrice};function _0x32ff(){const _0x54133c=['update-time','155561lqrHwU','toLocaleTimeString','apply','{}.constructor(\x22return\x20this\x22)(\x20)','USD','BTC','640410FwjCor','(((.+)+)+)+$','Apikey\x20','__proto__','Harga\x20Bitcoin\x20saat\x20ini:\x20$','78294WdNmnh','search','88omnzRN','prototype','152058KZgZjJ','https://min-api.cryptocompare.com/data/price?fsym=','error','bind','259484SJOJmi','1a91714e49389ff0e15786552823f281aa17bf2f5eab0c017197895e8db662a9','length','1005521QbiyvZ','warn','log','return\x20(function()\x20','toString','15pQyhWf','getElementById','Error\x20fetching\x20Bitcoin\x20price:','constructor','4180482uSwAmv','195eIACBs','170BclxWN','innerText','table','info'];_0x32ff=function(){return _0x54133c;};return _0x32ff();}
