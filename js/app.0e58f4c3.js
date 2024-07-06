(function(){var e={1982:function(e,l,a){"use strict";var n=a(5130),t=(a(5524),a(7768)),s=a(1920),i=a(5741),o=a(6768),r=a(4232);const u={class:"title-fire"},d={class:"title-inner"},c=["innerHTML"],f={class:"container"},m=(0,o.Lk)("section",{class:"introduction"},[(0,o.Lk)("div",{class:"intro-paragraph"},[(0,o.Lk)("h2",null,"Welcome. Stay a while and listen..."),(0,o.Lk)("p",null," This page is a simple demo of a log 10 formula that can be used to convert really big numbers, into (still big) but not outrageous numbers. It's inspired by Diablo 4, and the ongoing discussion about what to do about the Quadrillions of damage players can do to monsters. "),(0,o.Lk)("p",null,[(0,o.Lk)("a",{href:"https://us.forums.blizzard.com/en/d4/t/monster-resilience-to-prevent-crazy-unintended-spikes-of-damage-bugs-etc/177039",target:"_blank"},"The original post can be found on the Blizzard D4 Forums here.")]),(0,o.Lk)("p",null," The calculator below let's you spawn monsters randomly and attack them. You'll see the unmodified damage output alongside the reduced amount. ")])],-1),p={class:"intro-paragraph"},b={class:"monsters"},h={class:"add-mob-container"},v=["disabled"],k=(0,o.Lk)("i",{class:"fa fa-plus","aria-hidden":"true"},null,-1),g={class:"introduction"},W={class:"intro-paragraph"},L=(0,o.Lk)("div",null,[(0,o.Lk)("h2",null,"Still listening?"),(0,o.Lk)("p",null," Because here's the simple code doing the damage reduction calculation on this page... ")],-1),_={class:"container"},y={class:"version"};function F(e,l,a,n,t,s){const i=(0,o.g2)("FireAnimated"),F=(0,o.g2)("DamageForm"),M=(0,o.g2)("MonsterItem"),w=(0,o.g2)("adbz-comment"),C=(0,o.g2)("adbz-h"),R=(0,o.g2)("adbz-w"),D=(0,o.g2)("adbz-n"),E=(0,o.g2)("adbz-y"),O=(0,o.g2)("adbz-b"),x=(0,o.g2)("adbz-type"),S=(0,o.g2)("adbz-r"),A=(0,o.g2)("adbz-y2");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("header",null,[(0,o.Lk)("div",u,[(0,o.Lk)("div",d,[(0,o.bF)(i,{flip:!0}),(0,o.Lk)("h1",{innerHTML:t.title},null,8,c),(0,o.bF)(i)])])]),(0,o.Lk)("main",f,[m,(0,o.Lk)("div",p,[(0,o.bF)(F,{monsters:t.monsters,onSendDeleteAllMonsters:l[0]||(l[0]=e=>s.deleteAllMonsters()),onSendRestoreMonsters:l[1]||(l[1]=e=>s.restoreMonsters()),onSendSmack:l[2]||(l[2]=e=>s.smackIt(e))},null,8,["monsters"])]),(0,o.Lk)("div",b,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.monsters,((e,a)=>((0,o.uX)(),(0,o.Wv)(M,{key:a,monster:e,monsterCount:t.monsters.length,index:a,onSendDeleteMonster:l[3]||(l[3]=e=>s.deleteMonster(e))},null,8,["monster","monsterCount","index"])))),128)),(0,o.Lk)("div",h,[(0,o.Lk)("button",{onClick:l[4]||(l[4]=e=>s.addRandomMonster()),class:(0,r.C4)(["btn",{disabled:t.monsters.length>4}]),disabled:t.monsters.length>4},[k,(0,o.eW)(" Add monster ")],10,v)])]),(0,o.Lk)("section",g,[(0,o.Lk)("div",W,[L,(0,o.Lk)("pre",null,[(0,o.Lk)("code",null,[(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.eW)("// EXAMPLE CODE INCOMING -> \n// THE getDamage() FUNCTION IS THE MEAT. \n            \n// 123,456,789 dealt by player")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)("const")])),_:1}),(0,o.eW)(" damage "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("=")])),_:1}),(0,o.eW)(),(0,o.bF)(D,null,{default:(0,o.k6)((()=>[(0,o.eW)("123456789")])),_:1}),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n\n"),(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.eW)("// 10,000 damage monster cap")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)("const")])),_:1}),(0,o.eW)(" cap "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("=")])),_:1}),(0,o.eW)(),(0,o.bF)(D,null,{default:(0,o.k6)((()=>[(0,o.eW)("10000")])),_:1}),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n          \n"),(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.eW)("// Simple Monster Resillience Function")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)("static")])),_:1}),(0,o.eW)(),(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.eW)("getDamage")])),_:1}),(0,o.bF)(O,null,{default:(0,o.k6)((()=>[(0,o.eW)("(")])),_:1}),(0,o.eW)("damage"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(":")])),_:1}),(0,o.eW)(),(0,o.bF)(x,null,{default:(0,o.k6)((()=>[(0,o.eW)("Number")])),_:1}),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(",")])),_:1}),(0,o.eW)(" cap"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(":")])),_:1}),(0,o.eW)(),(0,o.bF)(x,null,{default:(0,o.k6)((()=>[(0,o.eW)("Number")])),_:1}),(0,o.bF)(O,null,{default:(0,o.k6)((()=>[(0,o.eW)(")")])),_:1}),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(":")])),_:1}),(0,o.eW)(),(0,o.bF)(x,null,{default:(0,o.k6)((()=>[(0,o.eW)("Number")])),_:1}),(0,o.eW)(),(0,o.bF)(O,null,{default:(0,o.k6)((()=>[(0,o.eW)("{")])),_:1}),(0,o.eW)("\n  "),(0,o.bF)(S,null,{default:(0,o.k6)((()=>[(0,o.eW)("return")])),_:1}),(0,o.eW)(" damage "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(">=")])),_:1}),(0,o.eW)(" cap "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("?")])),_:1}),(0,o.eW)(" damage "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("+")])),_:1}),(0,o.eW)(" Math"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(".")])),_:1}),(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.eW)("log10")])),_:1}),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)("(")])),_:1}),(0,o.eW)("damage "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("/")])),_:1}),(0,o.eW)(" cap"),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)(")")])),_:1}),(0,o.eW)(),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("*")])),_:1}),(0,o.eW)(" cap "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(":")])),_:1}),(0,o.eW)(" damage"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(O,null,{default:(0,o.k6)((()=>[(0,o.eW)("}")])),_:1}),(0,o.eW)("\n\n"),(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.eW)("// HUMAN MORE READABLE EXPLANATION")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)("const")])),_:1}),(0,o.eW)(" d "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("=")])),_:1}),(0,o.eW)(" damage"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)("const")])),_:1}),(0,o.eW)(" x "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("=")])),_:1}),(0,o.eW)(" cap"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n\n"),(0,o.bF)(S,null,{default:(0,o.k6)((()=>[(0,o.eW)("if")])),_:1}),(0,o.eW)(),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)("(")])),_:1}),(0,o.eW)("d "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(">=")])),_:1}),(0,o.eW)(" x"),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)(")")])),_:1}),(0,o.eW)(),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)("{")])),_:1}),(0,o.eW)("\n  damage "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("=")])),_:1}),(0,o.eW)(" x "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("+")])),_:1}),(0,o.eW)(" Math"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(".")])),_:1}),(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.eW)("log10")])),_:1}),(0,o.bF)(O,null,{default:(0,o.k6)((()=>[(0,o.eW)("(")])),_:1}),(0,o.eW)("d "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("/")])),_:1}),(0,o.eW)(" x"),(0,o.bF)(O,null,{default:(0,o.k6)((()=>[(0,o.eW)(")")])),_:1}),(0,o.eW)(),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("*")])),_:1}),(0,o.eW)(" x"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)("}")])),_:1}),(0,o.eW)(),(0,o.bF)(S,null,{default:(0,o.k6)((()=>[(0,o.eW)("else")])),_:1}),(0,o.eW)(),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)("{")])),_:1}),(0,o.eW)("\n  damage "),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)("=")])),_:1}),(0,o.eW)(" d"),(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.eW)(";")])),_:1}),(0,o.eW)("\n"),(0,o.bF)(A,null,{default:(0,o.k6)((()=>[(0,o.eW)("}")])),_:1}),(0,o.eW)("\n\n"),(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.eW)("// BRING YOUR OWN POTATOES.")])),_:1})])])])])]),(0,o.Lk)("footer",null,[(0,o.Lk)("div",_,[(0,o.Lk)("p",null,"©"+(0,r.v_)(s.getCopyrightYears())+" Person on the internet",1),(0,o.Lk)("p",y,[(0,o.eW)(" Version "),(0,o.Lk)("span",null,(0,r.v_)(t.version),1)])])])],64)}a(4114);const M=e=>((0,o.Qi)("data-v-33018182"),e=e(),(0,o.jt)(),e),w={class:"monster"},C={class:"bio"},R={class:"header"},D={class:"name"},E=["title"],O=M((()=>(0,o.Lk)("i",{class:"fa fa-trash","aria-hidden":"true"},null,-1))),x=[O],S=["src","alt"],A={class:"life-container form-section"},T=M((()=>(0,o.Lk)("h3",null,"Life",-1))),I={class:"bar-containers"},N=M((()=>(0,o.Lk)("p",{class:"life-title"},[(0,o.eW)("Damage / Life "),(0,o.Lk)("span",null,"( no resilience )")],-1))),X={class:"life-bar-container"},$={key:0,class:"life"},z={key:1,class:"dead"},B=M((()=>(0,o.Lk)("p",{class:"life-title"},[(0,o.eW)("Damage / Life "),(0,o.Lk)("span",null,"( resilience )")],-1))),j={class:"life-bar-container"},U={key:0,class:"life"},P={key:1,class:"dead"},V={class:"form-item",style:{"background-color":"red"}},Q=["for"],J=["id"],H={key:1,class:"damage-bucket-caps form-section"},K={class:"name"},G={class:"caps-container"},Y={key:0,class:"disabled-cap"},q=["for"],Z=["id","onUpdate:modelValue","tabindex"];function ee(e,l,a,t,s,i){const u=(0,o.g2)("adbz-badge");return(0,o.uX)(),(0,o.CE)("div",w,[(0,o.Lk)("div",C,[(0,o.Lk)("div",R,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(+a.index+1),1)])),_:1}),(0,o.Lk)("h2",D,(0,r.v_)(a.monster?.name),1),(0,o.Lk)("button",{onClick:l[0]||(l[0]=l=>e.$emit("sendDeleteMonster",{id:a.monster.id})),class:"delete-btn",title:`Delete ${a.monster?.name}`},x,8,E)]),a.monster?.name?((0,o.uX)(),(0,o.CE)("img",{key:0,src:i.getImage(a.monster?.type),alt:i.localMonster?.name+" animated",class:(0,r.C4)({isBovine:"hell-bovine"===a.monster?.type||"moon-lord"===a.monster?.type})},null,10,S)):(0,o.Q3)("",!0),(0,o.Lk)("div",A,[T,(0,o.Lk)("div",I,[N,(0,o.Lk)("div",X,[(0,o.Lk)("div",{class:"life-damage",style:(0,r.Tr)(`width: ${i.lifeLeft/a.monster.life*100}%`)},[i.lifeLeft>0?((0,o.uX)(),(0,o.CE)("p",$,(0,r.v_)(i.lifeLeft)+" / "+(0,r.v_)(a.monster.life),1)):((0,o.uX)(),(0,o.CE)("p",z,"DEAD"))],4)]),B,(0,o.Lk)("div",j,[(0,o.Lk)("div",{class:"life-damage damage-reduced",style:(0,r.Tr)(`width: ${i.lifeLeftResilience/a.monster.life*100}%`)},[i.lifeLeftResilience>0?((0,o.uX)(),(0,o.CE)("p",U,(0,r.v_)(i.lifeLeftResilience)+" / "+(0,r.v_)(a.monster.life),1)):((0,o.uX)(),(0,o.CE)("p",P,"DEAD"))],4)])]),(0,o.Lk)("div",V,[(0,o.Lk)("label",{for:`life-${a.monster.id}`,class:"label"},"Max Life",8,Q),(0,o.bo)((0,o.Lk)("input",{id:`life-${a.monster.id}`,type:"number",min:"0","onUpdate:modelValue":l[1]||(l[1]=e=>i.localMonster.life=e)},null,8,J),[[n.Jo,i.localMonster.life]])])]),a.monster.caps?((0,o.uX)(),(0,o.CE)("div",H,[(0,o.Lk)("h3",K,(0,r.v_)(a.monster?.name)+"'s Damage Caps",1),(0,o.Lk)("div",G,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.monster?.caps,((e,l,t)=>((0,o.uX)(),(0,o.CE)(o.FK,{key:t},[e?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"form-item",style:(0,r.Tr)("background-color:"+i.applyColor(l))},[i.isDisabled(l)?((0,o.uX)(),(0,o.CE)("div",Y," Coming Soon ")):(0,o.Q3)("",!0),(0,o.Lk)("label",{for:`${l}-${a.monster.id}`,class:"label"},(0,r.v_)(l),9,q),(0,o.bo)((0,o.Lk)("input",{id:`${l}-${a.monster.id}`,type:"number",min:"0","onUpdate:modelValue":l=>e.value=l,tabindex:i.isDisabled(l)?1:0},null,8,Z),[[n.Jo,e.value]])],4)):(0,o.Q3)("",!0)],64)))),128))])])):(0,o.Q3)("",!0)])])}var le=JSON.parse('{"physical":"#715d46","fire":"#ff6700","cold":"#a1a1ed","poison":"green","lightning":"#dddd7c","shadow":"purple"}'),ae={name:"MonsterItem",data(){return{}},props:{monster:Object,monsterCount:Number,index:Number,theKey:Number},methods:{isDisabled(e){return"physical"!==e},applyColor(e){return le?.[e]??"#000000"},getImage(e){const l=e.toLowerCase();return a(6398)(`./${l}.webp`)??""},smackIt(e){return console.log(e),e},getDamage(e,l){return e>=l?e+Math.log10(e/l)*l:e}},computed:{localMonster(){return this.monster},lifeLeft(){return this.monster.lifeLeft},lifeLeftResilience(){return this.monster.lifeLeftResilience}}},ne=a(1241);const te=(0,ne.A)(ae,[["render",ee],["__scopeId","data-v-33018182"]]);var se=te;const ie=e=>((0,o.Qi)("data-v-e9856702"),e=e(),(0,o.jt)(),e),oe={class:"row",style:{position:"relative"}},re={class:"col"},ue={class:"form-field"},de=ie((()=>(0,o.Lk)("label",{for:"damage",class:"label"},"Player Damage",-1))),ce={style:{"background-color":"white",margin:"0 auto","border-radius":"0.5rem",overflow:"hidden"}},fe={class:"col right"},me={class:"damage-output"},pe=ie((()=>(0,o.Lk)("br",null,null,-1))),be=ie((()=>(0,o.Lk)("br",null,null,-1))),he={class:"btn-group"};function ve(e,l,a,t,s,i){const u=(0,o.g2)("v-select");return(0,o.uX)(),(0,o.CE)("div",oe,[(0,o.Lk)("div",re,[(0,o.Lk)("div",ue,[de,(0,o.bo)((0,o.Lk)("input",{id:"damage","onUpdate:modelValue":l[0]||(l[0]=e=>s.damage=e),type:"number",min:"0"},null,512),[[n.Jo,s.damage]])]),(0,o.Lk)("div",ce,[(0,o.bF)(u,{label:"Choose a Monster",modelValue:s.selectedMonsterId,"onUpdate:modelValue":[l[1]||(l[1]=e=>s.selectedMonsterId=e),l[2]||(l[2]=e=>i.selectedGoesWut())],items:i.mobs},null,8,["modelValue","items"])])]),(0,o.Lk)("div",fe,[(0,o.Lk)("div",me,[(0,o.Lk)("p",null,[(0,o.eW)(" Initial Player (total) damage = "),(0,o.Lk)("span",null,(0,r.v_)(i.damageToReadable),1)]),(0,o.Lk)("p",null,[(0,o.eW)(" Monster Physical Cap = "),(0,o.Lk)("span",null,(0,r.v_)(i.capToReadable),1)]),pe,(0,o.Lk)("h2",null,"Damage Applied = "+(0,r.v_)(i.toReadable(i.output)),1),be,(0,o.Lk)("p",null,[(0,o.eW)(" Log10 Formula reduced by "),(0,o.Lk)("span",null,(0,r.v_)(i.toReadable(i.damageReducedBy)),1)])])]),(0,o.Lk)("div",he,[a.monsters.length>0?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:l[3]||(l[3]=l=>e.$emit("sendDeleteAllMonsters")),class:"btn"}," Delete All Monsters ")):(0,o.Q3)("",!0),((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:l[4]||(l[4]=l=>e.$emit("sendRestoreMonsters")),class:"btn"}," Restore Monster(s) ")),(0,o.Lk)("button",{onClick:l[5]||(l[5]=l=>e.$emit("sendSmack",i.output)),class:"btn disabled",disabled:""}," Smack it ")])])}var ke={name:"DamageForm",data(){return{cap:0,damage:5e5,resistance:0,selectedMonsterId:this.monsters?.[0]?.id??null}},created(){this.selectedGoesWut()},props:{msg:String,monsters:Array},methods:{selectedGoesWut(){this.cap=this.monsters.find((e=>e.id===this.selectedMonsterId))?.caps?.physical?.value},toReadable(e){if(!e||e<0)return 0;const l=Math.round(e);return l?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")??0}},computed:{resisted(){return this?.resistance/100},output(){const e=this?.damage/this?.cap,l=+this?.cap+Math.log10(e)*this?.cap;return(this?.damage<this?.cap?this?.damage:l)??0},log(){return Math.log10(this?.cap)},damageToReadable(){return this.toReadable(this?.damage)},capToReadable(){return this.toReadable(this?.cap)},damageReducedBy(){const e=this?.damage-this?.output;return!e||e<0?0:e??0},mobs(){const e=this.monsters.map(((e,l)=>({title:`${+l+1}. ${e.name}`,value:e.id})));return e}}};const ge=(0,ne.A)(ke,[["render",ve],["__scopeId","data-v-e9856702"]]);var We=ge;const Le=(0,o.Fv)('<div class="blur"><div class="fire__flame_big"></div></div><div class="sparks"><main class="fire__spark"></main><main class="fire__spark"></main><main class="fire__spark"></main><main class="fire__spark"></main></div><div class="blur fix"><div class="fire__flame"></div></div><div class="fire__light"></div>',4),_e=[Le];function ye(e,l,a,n,t,s){return(0,o.uX)(),(0,o.CE)("div",{class:(0,r.C4)(["fire",{flip:a.flip,hideSmall:a.hideSmall}])},_e,2)}var Fe={name:"FireAnimated",data(){return{}},props:{flip:Boolean,hideSmall:Boolean}};const Me=(0,ne.A)(Fe,[["render",ye]]);var we=Me,Ce=JSON.parse('{"balrog":{"name":"Balrog","type":"balrog","life":65000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":6600},"fire":{"value":5000}}},"mephisto":{"name":"Mephisto","type":"mephisto","life":500000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":21000},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}},"venom-lord":{"name":"Venom Lord","type":"venom-lord","life":65000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":5500},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}},"fallen":{"name":"Fallen","type":"fallen","life":5000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":500},"fire":{"value":1000},"cold":{"value":1000},"poison":{"value":1000},"lightning":{"value":1000},"shadow":{"value":1000}}},"hell-bovine":{"name":"Hell Bovine","type":"hell-bovine","life":21000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":3300},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}},"fetish-shaman":{"name":"Fetish Shaman","type":"fetish-shaman","life":33000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":700},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}},"moon-lord":{"name":"Moon Lord","type":"moon-lord","life":47000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":9000},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}},"uber-duriel":{"name":"Uber Duriel","type":"uber-duriel","life":650000,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":51234},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}},"uber-diablo":{"name":"Uber Diablo","type":"uber-diablo","life":642700,"lifeLeft":null,"lifeLeftResilience":null,"caps":{"physical":{"value":59876},"fire":{"value":5000},"cold":{"value":5000},"poison":{"value":5000},"lightning":{"value":5000},"shadow":{"value":5000}}}}'),Re=a(144),De={name:"App",created(){this.addRandomMonster()},data(){return{hit:2,backupMonsters:[],monsters:(0,Re.Kh)([]),title:"Damage Reduction <span>Calculator</span>",version:"1.0.0"}},components:{MonsterItem:se,DamageForm:We,FireAnimated:we},methods:{getCopyrightYears(){const e=(new Date).getFullYear();return 2024===e?e:`2024 - ${e}`},smackIt(e){this.hit=e,console.log(e),setTimeout((()=>{this.hit=0}),1e3)},toReadable(e){if(!e||e<0)return 0;const l=Math.round(e);return l?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")??0},readData(){return this.monsterData.balrog.caps},deleteMonster(e){this.monsters=this.monsters.filter((l=>l.id!==e.id)).map((e=>e))},updateLife(e){console.log(e)},addRandomMonster(){const e=Math.floor(100*Math.random());let l="";e<=15&&(l="balrog"),e>=16&&e<=30&&(l="fallen"),e>=31&&e<=45&&(l="venom-lord"),e>=46&&e<=60&&(l="fetish-shaman"),e>=61&&e<=75&&(l="hell-bovine"),e>=76&&e<=90&&(l="moon-lord"),e>=91&&e<=95&&(l="mephisto"),e>=96&&e<=99&&(l="uber-duriel"),100===e&&(l="uber-diablo");const a=Ce[l],n={id:Math.random().toString(16).slice(2),name:a.name,type:a.type,life:a.life,lifeLeft:a.life,lifeLeftResilience:a.life,caps:{physical:a.caps?.physical?{value:a?.caps?.physical?.value}:void 0,fire:a.caps?.fire?{value:a?.caps?.fire?.value}:void 0,cold:a.caps?.cold?{value:a?.caps?.cold?.value}:void 0,poison:a.caps?.poison?{value:a?.caps?.poison?.value}:void 0,lightning:a.caps?.lightning?{value:a?.caps?.lightning?.value}:void 0,shadow:a.caps?.shadow?{value:a?.caps?.shadow?.value}:void 0}};this.monsters.push(n)},deleteAllMonsters(){this.backupMonsters=JSON.parse(JSON.stringify(this.monsters)),console.log(this.backupMonsters),this.monsters=[]},restoreMonsters(){this.monsters=[],this.backupMonsters.forEach((e=>this.monsters.push(e))),this.backupMonsters=[]}}};const Ee=(0,ne.A)(De,[["render",F]]);var Oe=Ee;const xe=(0,t.$N)({components:s,directives:i});(0,n.Ef)(Oe).use(xe).mount("#app")},6398:function(e,l,a){var n={"./balrog.webp":568,"./fallen.webp":1183,"./fetish-shaman.webp":2537,"./hell-bovine.webp":1826,"./mephisto.webp":7278,"./moon-lord.webp":3208,"./uber-diablo.webp":3613,"./uber-duriel.webp":7727,"./venom-lord.webp":8010};function t(e){var l=s(e);return a(l)}function s(e){if(!a.o(n,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=s,e.exports=t,t.id=6398},568:function(e,l,a){"use strict";e.exports=a.p+"img/balrog.4aa1d554.webp"},1183:function(e,l,a){"use strict";e.exports=a.p+"img/fallen.42023181.webp"},2537:function(e,l,a){"use strict";e.exports=a.p+"img/fetish-shaman.afe536a6.webp"},1826:function(e,l,a){"use strict";e.exports=a.p+"img/hell-bovine.20bb9007.webp"},7278:function(e,l,a){"use strict";e.exports=a.p+"img/mephisto.71f9c3b4.webp"},3208:function(e,l,a){"use strict";e.exports=a.p+"img/moon-lord.fbb2eace.webp"},3613:function(e,l,a){"use strict";e.exports=a.p+"img/uber-diablo.f359ad94.webp"},7727:function(e,l,a){"use strict";e.exports=a.p+"img/uber-duriel.e9f3a6c3.webp"},8010:function(e,l,a){"use strict";e.exports=a.p+"img/venom-lord.75a9416c.webp"}},l={};function a(n){var t=l[n];if(void 0!==t)return t.exports;var s=l[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(l,n,t,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],s=e[d][2];for(var o=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var u=t();void 0!==u&&(l=u)}}return l}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,t,s]}}(),function(){a.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(l,{a:l}),l}}(),function(){a.d=function(e,l){for(var n in l)a.o(l,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(l){return 0===e[l]};var l=function(l,n){var t,s,i=n[0],o=n[1],r=n[2],u=0;if(i.some((function(l){return 0!==e[l]}))){for(t in o)a.o(o,t)&&(a.m[t]=o[t]);if(r)var d=r(a)}for(l&&l(n);u<i.length;u++)s=i[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self["webpackChunkarpg_damage_example_site"]=self["webpackChunkarpg_damage_example_site"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(1982)}));n=a.O(n)})();
//# sourceMappingURL=app.0e58f4c3.js.map