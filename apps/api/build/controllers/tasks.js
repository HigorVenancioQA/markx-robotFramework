(function(_0x4f8bd0,_0x221bc4){const _0x4b1640=a1_0x14d9,_0x4d83a5=_0x4f8bd0();while(!![]){try{const _0x1f737e=parseInt(_0x4b1640(0x1b8))/0x1*(parseInt(_0x4b1640(0x1c0))/0x2)+-parseInt(_0x4b1640(0x1bb))/0x3*(-parseInt(_0x4b1640(0x1c4))/0x4)+parseInt(_0x4b1640(0x1c6))/0x5*(-parseInt(_0x4b1640(0x1b4))/0x6)+parseInt(_0x4b1640(0x1cc))/0x7+parseInt(_0x4b1640(0x1c2))/0x8+parseInt(_0x4b1640(0x1b9))/0x9*(-parseInt(_0x4b1640(0x1b7))/0xa)+parseInt(_0x4b1640(0x1c7))/0xb*(-parseInt(_0x4b1640(0x1b6))/0xc);if(_0x1f737e===_0x221bc4)break;else _0x4d83a5['push'](_0x4d83a5['shift']());}catch(_0x1a94cc){_0x4d83a5['push'](_0x4d83a5['shift']());}}}(a1_0x1a7e,0xeea37));function a1_0x14d9(_0x2dee50,_0xfecce7){const _0x1a7ec3=a1_0x1a7e();return a1_0x14d9=function(_0x14d97b,_0xd561d9){_0x14d97b=_0x14d97b-0x1b2;let _0x1f99e3=_0x1a7ec3[_0x14d97b];return _0x1f99e3;},a1_0x14d9(_0x2dee50,_0xfecce7);}import a1_0x4a3470 from'../models/task';export default{'create':async(_0x48c919,_0x29a54a)=>{const _0x4d81a7=a1_0x14d9,{text:_0x21a939,is_done:_0x304559}=_0x48c919[_0x4d81a7(0x1bd)],_0x13d620=await a1_0x4a3470[_0x4d81a7(0x1ba)]({'text':_0x21a939});if(_0x13d620)return _0x29a54a['status'](0x199)[_0x4d81a7(0x1ca)]({'message':_0x4d81a7(0x1cb)});const _0x3a8e26=new a1_0x4a3470({'text':_0x21a939,'is_done':_0x304559});try{const _0x51d316=await _0x3a8e26[_0x4d81a7(0x1c3)]();return _0x29a54a[_0x4d81a7(0x1be)](0xc9)[_0x4d81a7(0x1ca)](_0x51d316);}catch(_0x25f7cd){if(_0x25f7cd[_0x4d81a7(0x1b5)]===_0x4d81a7(0x1b2))return _0x29a54a[_0x4d81a7(0x1be)](0x190)['json'](_0x25f7cd);return console[_0x4d81a7(0x1c8)](_0x25f7cd),_0x29a54a[_0x4d81a7(0x1be)](0x1f4)[_0x4d81a7(0x1ca)](_0x25f7cd);}},'list':async(_0x497058,_0x1f0600)=>{const _0x570139=a1_0x14d9;let _0x9f75cc={};_0x497058[_0x570139(0x1c1)]['text']&&(_0x9f75cc['text']=new RegExp(_0x497058['query'][_0x570139(0x1bc)],'i'));const _0xad6cca=await a1_0x4a3470[_0x570139(0x1c9)](_0x9f75cc,{},{'sort':'-date'});return _0x1f0600[_0x570139(0x1be)](0xc8)[_0x570139(0x1ca)](_0xad6cca);},'remove':async(_0x4b67b8,_0x36642d)=>{const _0x4b4d7a=a1_0x14d9,{task_id:_0x296697}=_0x4b67b8['params'],_0x1fd8a3=await a1_0x4a3470['findOneAndDelete']({'_id':_0x296697});if(!_0x1fd8a3)return _0x36642d[_0x4b4d7a(0x1be)](0x194)[_0x4b4d7a(0x1bf)]();return _0x36642d[_0x4b4d7a(0x1be)](0xcc)[_0x4b4d7a(0x1bf)]();},'done':async(_0x3fd5c2,_0x10f3fd)=>{const _0x516349=a1_0x14d9,{task_id:_0x4c8da1}=_0x3fd5c2[_0x516349(0x1b3)],_0x2ddf15=await a1_0x4a3470[_0x516349(0x1ba)]({'_id':_0x4c8da1});if(!_0x2ddf15)return _0x10f3fd[_0x516349(0x1be)](0x194)[_0x516349(0x1bf)]();try{return await a1_0x4a3470[_0x516349(0x1c5)]({'_id':_0x4c8da1},{'$set':{'is_done':!![]}}),_0x10f3fd[_0x516349(0x1be)](0xcc)[_0x516349(0x1bf)]();}catch(_0x23f1c9){if(_0x23f1c9['name']==='ValidationError')return _0x10f3fd[_0x516349(0x1be)](0x190)[_0x516349(0x1ca)](_0x23f1c9);return _0x10f3fd[_0x516349(0x1be)](0x1f4)[_0x516349(0x1ca)](_0x23f1c9);}},'todo':async(_0x596029,_0x365e2e)=>{const _0x3bbfef=a1_0x14d9,{task_id:_0x11f2c9}=_0x596029[_0x3bbfef(0x1b3)],_0xb68a7b=await a1_0x4a3470[_0x3bbfef(0x1ba)]({'_id':_0x11f2c9});if(!_0xb68a7b)return _0x365e2e[_0x3bbfef(0x1be)](0x194)['end']();try{return await a1_0x4a3470[_0x3bbfef(0x1c5)]({'_id':_0x11f2c9},{'$set':{'is_done':![]}}),_0x365e2e[_0x3bbfef(0x1be)](0xcc)[_0x3bbfef(0x1bf)]();}catch(_0x4dc662){if(_0x4dc662['name']===_0x3bbfef(0x1b2))return _0x365e2e[_0x3bbfef(0x1be)](0x190)[_0x3bbfef(0x1ca)](_0x4dc662);return _0x365e2e[_0x3bbfef(0x1be)](0x1f4)[_0x3bbfef(0x1ca)](_0x4dc662);}}};function a1_0x1a7e(){const _0x378b2a=['save','1674788QHfBtx','findByIdAndUpdate','125AZDePR','33QKREnR','log','find','json','Duplicated\x20task!','2220281DbcaSx','ValidationError','params','132474xrTHit','name','443748MKDbDO','148450FRaZib','802293iDGsAu','1089ttthht','findOne','3rGKDTu','text','body','status','end','2qXBKJt','query','15187576rOriOW'];a1_0x1a7e=function(){return _0x378b2a;};return a1_0x1a7e();}