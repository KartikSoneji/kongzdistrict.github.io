(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),l(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(d){s=!0,console.error("WS error in setup",t,d)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,l(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,l,d,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,l=f.data.itemsAvailable.toNumber(),d=f.itemsRedeemed.toNumber(),p=l-d,m=f.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,d,x,O,g;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,f=t.connection,d=t.program,e.next=7,m(s.publicKey);case 7:return x=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return g=e.sent,e.next=16,d.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:x,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:g,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),l(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),b=n.n(u),f=(n(353),n(354),n(12)),l=n(1),d=n.n(l),p=n(4),m=n(13),j=n(132),x=n(134),O=n(313),g=n(596),y=n(601),v=n(605),h=n(604),S=n(15),k=n(52),w=n(175),P=n(133),R=n(30),K=Object(x.a)(w.a)(r||(r=Object(j.a)([""]))),C=x.a.span(c||(c=Object(j.a)([""]))),T=x.a.div(a||(a=Object(j.a)([""]))),M=Object(x.a)(g.a)(i||(i=Object(j.a)([""]))),B=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(C,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},L=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(o.useState)(!1),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),b=Object(m.a)(u,2),l=b[0],j=b[1],x=Object(o.useState)(!1),g=Object(m.a)(x,2),w=g[0],C=g[1],L=Object(o.useState)(0),A=Object(m.a)(L,2),I=A[0],E=A[1],D=Object(o.useState)(0),W=Object(m.a)(D,2),N=W[0],_=W[1],G=Object(o.useState)(0),q=Object(m.a)(G,2),U=(q[0],q[1]),Y=Object(o.useState)({open:!1,message:"",severity:void 0}),F=Object(m.a)(Y,2),H=F[0],z=F[1],V=Object(o.useState)(new Date(e.startDate)),J=Object(m.a)(V,2),X=J[0],Z=J[1],Q=Object(k.c)(),$=Object(o.useState)(),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(d.a.mark((function t(){var n,r,c,a,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(Q,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,E(a),U(i),_(o),j(0===i),Z(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(d.a.mark((function t(){var n,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,C(!0),!Q||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(P.c)(te,e.config,Q.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),z({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!Q){t.next=23;break}return t.next=21,e.connection.getBalance(Q.publicKey);case 21:i=t.sent,r(i/S.LAMPORTS_PER_SOL);case 23:return C(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q){t.next=5;break}return t.next=3,e.connection.getBalance(Q.publicKey);case 3:n=t.sent,r(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Q,e.connection]),Object(o.useEffect)(re,[Q,e.candyMachineId,e.connection]),Object(R.jsx)("main",{className:"mint-container",style:{backgroundColor:"black",display:"flex",height:"20vh"},children:Object(R.jsxs)("div",{style:{padding:20,display:"flex",flex:1,flexDirection:"column"},children:[Object(R.jsxs)("div",{style:{backgroundColor:"#black",display:"flex",justifyContent:"space-between"},children:[Q&&Object(R.jsxs)("p",{children:["Wallet ",Object(P.d)(Q.publicKey.toBase58()||"")]}),Object(R.jsx)("div",{}),Object(R.jsx)(K,{children:Q?"Connected":"Connect Wallet"})]}),Object(R.jsxs)("div",{style:{backgroundColor:"#black",flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(R.jsx)(T,{children:Object(R.jsx)(M,{disabled:!l||w||i,onClick:ce,variant:"contained",children:l?"SOLD OUT":i?w?Object(R.jsx)(y.a,{}):"MINT":Object(R.jsx)(O.a,{date:X,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:B})})}),Object(R.jsx)("div",{children:Q&&Object(R.jsxs)("p",{children:["Supply: ",N,"/",I]})})]}),Object(R.jsx)(v.a,{open:H.open,autoHideDuration:6e3,onClose:function(){return z(Object(f.a)(Object(f.a)({},H),{},{open:!1}))},children:Object(R.jsx)(h.a,{onClose:function(){return z(Object(f.a)(Object(f.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})})},A=n(32),I=n(116),E=n(340),D=n(602),W=new A.d.PublicKey("EBR58CfaKLbHk4SfrrSzhsSpbCb7ekRtxqHoGngxCe74"),N=new A.d.PublicKey("5egmNkxDszs1rGtGs7xrG75fGwuNyt5hq5yYjP8FSdo7"),_=new A.d.PublicKey("GnGscszqybda6L1SsbdDF7Wqr3HjW9NCf9pTEyvXjpVv"),G="devnet",q=new A.d.Connection("https://explorer-api.devnet.solana.com"),U=parseInt("1634619600",10),Y=Object(E.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),F=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(G)}),[]),t=Object(o.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:G}),Object(I.d)({network:G})]}),[]);return Object(R.jsx)(D.a,{theme:Y,children:Object(R.jsx)(k.a,{endpoint:e,children:Object(R.jsx)(k.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(w.b,{children:Object(R.jsx)(L,{candyMachineId:_,config:N,connection:q,startDate:U,treasury:W,txTimeout:3e4})})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(F,{})}),document.getElementById("root")),H()}},[[569,1,2]]]);
//# sourceMappingURL=main.3ff5a5b9.chunk.js.map