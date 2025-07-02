<template>
  <header>
    <div class="title-fire">
      <div class="title-inner">
        <FireAnimated :flip="true"></FireAnimated>
        <h1 v-html="title"></h1>
        <FireAnimated></FireAnimated>
      </div>
    </div>
  </header>
  <main class="container">
    <section class="introduction">
      <div class="intro-paragraph">
        <h2>Welcome. Stay a while and listen...</h2>
        <p>
          This page is a simple demo of a log 10 formula that can be used to
          convert really big numbers, into (still big) but not outrageous
          numbers. It's inspired by Diablo 4, and the ongoing discussion about
          what to do about the Quadrillions of damage players can do to
          monsters.
        </p>
        <p>
          The calculator below let's you spawn monsters randomly and attack
          them. You'll see the unmodified damage output alongside the reduced
          amount.
        </p>
      </div>
    </section>
    <!-- <img alt="Balrog" src="./assets/balrog.webp" />
    <img alt="Mephisto" src="./assets/mephisto.webp" />
    <img alt="Venom Lord" src="./assets/venom-lord.webp" /> -->
    <!-- <template v-if="hit > 0">
      <span class="smack">
        {{ toReadable(hit) }}
      </span>
    </template> -->

    <div class="intro-paragraph">
      <DamageForm
        :monsters="monsters"
        @sendDeleteAllMonsters="deleteAllMonsters()"
        @sendRestoreMonsters="restoreMonsters()"
        @sendSmack="smackIt($event)"
        @sendAddRandomMonster="addRandomMonster()"
        @sendDeleteMonster="deleteMonster($event)"
        @sendUpdateMonsterCap="updateMonsterCap($event)"
        @sendUpdateMonsterLife="updateMonsterLife($event)"
      ></DamageForm>
    </div>

    <div class="monsters">
      <div class="intro-paragraph" style="width: 100%; margin: 1rem">
        <h2>Monster details</h2>
        <p>
          This section is a work in progress. Eventually it might capture
          monster life after several "hits," and different types of caps /
          immunities.
        </p>
      </div>
      <template v-for="(monster, index) in monsters" :key="index">
        <MonsterItem
          :monster="monster"
          :monsterCount="monsters.length"
          :index="index"
          @sendDeleteMonster="deleteMonster($event)"
        />
      </template>
      <div class="add-mob-container">
        <button
          @click="addRandomMonster()"
          class="btn"
          :disabled="monsters.length > 4"
          :class="{ disabled: monsters.length > 4 }"
        >
          <i class="fa fa-plus" aria-hidden="true"></i> Add monster
        </button>
      </div>
    </div>

    <section class="introduction">
      <div class="intro-paragraph">
        <div>
          <h2>Still listening?</h2>
          <p>
            Because here's the simple code doing the damage reduction
            calculation on this page...
          </p>
        </div>
        <pre><code><adbz-comment>// EXAMPLE CODE INCOMING -> 
// THE getDamage() FUNCTION IS THE MEAT. 
            
// 123,456,789 dealt by player</adbz-comment>
<adbz-h>const</adbz-h> damage <adbz-w>=</adbz-w> <adbz-n>123456789</adbz-n><adbz-w>;</adbz-w>

<adbz-comment>// 10,000 damage monster cap</adbz-comment>
<adbz-h>const</adbz-h> cap <adbz-w>=</adbz-w> <adbz-n>10000</adbz-n><adbz-w>;</adbz-w>
          
<adbz-comment>// Simple Monster Resillience Function</adbz-comment>
<adbz-h>static</adbz-h> <adbz-y>getDamage</adbz-y><adbz-b>(</adbz-b>damage<adbz-w>:</adbz-w> <adbz-type>Number</adbz-type><adbz-w>,</adbz-w> cap<adbz-w>:</adbz-w> <adbz-type>Number</adbz-type><adbz-b>)</adbz-b><adbz-w>:</adbz-w> <adbz-type>Number</adbz-type> <adbz-b>{</adbz-b>
  <adbz-r>return</adbz-r> damage <adbz-w>>=</adbz-w> cap <adbz-w>?</adbz-w> cap <adbz-w>+</adbz-w> Math<adbz-w>.</adbz-w><adbz-y>log10</adbz-y><adbz-y2>(</adbz-y2>damage <adbz-w>/</adbz-w> cap<adbz-y2>)</adbz-y2> <adbz-w>*</adbz-w> cap <adbz-w>:</adbz-w> damage<adbz-w>;</adbz-w>
<adbz-b>}</adbz-b>

<adbz-comment>// HUMAN MORE READABLE EXPLANATION</adbz-comment>
<adbz-h>const</adbz-h> d <adbz-w>=</adbz-w> damage<adbz-w>;</adbz-w>
<adbz-h>const</adbz-h> x <adbz-w>=</adbz-w> cap<adbz-w>;</adbz-w>

<adbz-r>if</adbz-r> <adbz-y2>(</adbz-y2>d <adbz-w>>=</adbz-w> x<adbz-y2>)</adbz-y2> <adbz-y2>{</adbz-y2>
  damage <adbz-w>=</adbz-w> x <adbz-w>+</adbz-w> Math<adbz-w>.</adbz-w><adbz-y>log10</adbz-y><adbz-b>(</adbz-b>d <adbz-w>/</adbz-w> x<adbz-b>)</adbz-b> <adbz-w>*</adbz-w> x<adbz-w>;</adbz-w>
<adbz-y2>}</adbz-y2> <adbz-r>else</adbz-r> <adbz-y2>{</adbz-y2>
  damage <adbz-w>=</adbz-w> d<adbz-w>;</adbz-w>
<adbz-y2>}</adbz-y2>

<adbz-comment>// BRING YOUR OWN POTATOES.</adbz-comment></code></pre>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">
      <p>&copy;{{ getCopyrightYears() }} Person on the internet</p>
      <p class="version">
        Version <span>{{ version }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
import MonsterItem from "./components/MonsterItem.vue";
import DamageForm from "./components/DamageForm.vue";
import FireAnimated from "./components/FireAnimated.vue";
import defaultMonsterData from "./assets/data/monster-defaults.json";
import { reactive } from "vue";

export default {
  name: "App",
  created() {
    this.addRandomMonster();
  },
  data() {
    return {
      hit: 2,
      backupMonsters: [],
      monsters: reactive([]),
      title: "Damage Reduction <span>Calculator</span>",
      version: "1.0.0",
    };
  },
  components: {
    MonsterItem,
    DamageForm,
    FireAnimated,
  },
  methods: {
    updateMonsterLife(data) {
      console.log(data);
      this.monsters = this.monsters.map((monster) => {
        if (monster.id === data.monster.id) {
          return {
            ...monster,
            life: data.life,
            lifeLeft: data.life - data.damage,
            lifeLeftResilience: Math.round(data.life - data.output),
          };
        }
        return monster;
      });
      console.log(this.monsters);
    },
    updateMonsterCap(data) {
      this.monsters = this.monsters.map((monster) => {
        if (monster.id === data.monster.id) {
          return {
            ...monster,
            caps: {
              ...monster.caps,
              physical: { value: data.cap },
            },
          };
        }
        return monster;
      });
    },
    getCopyrightYears() {
      const yearNow = new Date().getFullYear();
      return yearNow === 2024 ? yearNow : `2024 - ${yearNow}`;
    },
    smackIt(damage) {
      this.hit = damage;
      console.log(damage);
      setTimeout(() => {
        this.hit = 0;
      }, 1000);
    },
    toReadable(num) {
      if (!num || num < 0) {
        return 0;
      }
      const rounded = Math.round(num);
      return rounded?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0;
    },
    readData() {
      return this.monsterData.balrog.caps;
    },
    deleteMonster(data) {
      this.monsters = this.monsters
        .filter((monster) => monster.id !== data.id)
        .map((monster) => monster);
    },
    updateLife(data) {
      console.log(data);
    },
    addRandomMonster() {
      const random = Math.floor(Math.random() * 100);
      let type = "";
      if (random <= 15) type = "balrog";
      if (random >= 16 && random <= 30) type = "fallen";
      if (random >= 31 && random <= 45) type = "venom-lord";
      if (random >= 46 && random <= 60) type = "fetish-shaman";
      if (random >= 61 && random <= 75) type = "hell-bovine";
      if (random >= 76 && random <= 89) type = "moon-lord";
      if (random >= 90 && random <= 94) type = "mephisto";
      if (random >= 95 && random <= 97) type = "uber-duriel";
      if (random >= 98) type = "uber-diablo";

      const mob = defaultMonsterData[type];

      const monster = {
        id: Math.random().toString(16).slice(2),
        name: mob.name,
        type: mob.type,
        life: mob.life,
        lifeLeft: mob.life,
        lifeLeftResilience: mob.life,
        caps: {
          physical: mob.caps?.physical
            ? { value: mob?.caps?.physical?.value }
            : undefined,
          fire: mob.caps?.fire ? { value: mob?.caps?.fire?.value } : undefined,
          cold: mob.caps?.cold ? { value: mob?.caps?.cold?.value } : undefined,
          poison: mob.caps?.poison
            ? { value: mob?.caps?.poison?.value }
            : undefined,
          lightning: mob.caps?.lightning
            ? { value: mob?.caps?.lightning?.value }
            : undefined,
          shadow: mob.caps?.shadow
            ? { value: mob?.caps?.shadow?.value }
            : undefined,
        },
      };
      this.monsters.push(monster);
    },
    deleteAllMonsters() {
      this.backupMonsters = JSON.parse(JSON.stringify(this.monsters));
      console.log(this.backupMonsters);
      this.monsters = [];
    },
    restoreMonsters() {
      this.monsters = [];
      this.backupMonsters.forEach((item) => this.monsters.push(item));
      this.backupMonsters = [];
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/diablo");
@import url("https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap");

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  padding: 2rem;
  background: linear-gradient(
      90deg,
      #111217 0%,
      #15171e 30%,
      #15171e 70%,
      #111217 100%
    )
    center 0px repeat-y;
  @media screen and (max-width: 991px) {
    padding: 1rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0.5rem;
  }
}
#app {
  // padding: 1rem 2rem;
}

.title-fire {
  margin-bottom: 2rem;
  .title-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 120px;
    @media screen and (max-width: 767px) {
      height: 80px;
    }
  }
}

h1 {
  font-family: "Bona Nova SC", serif;
  font-weight: 700;
  font-size: 3rem;
  display: inline-block;
  text-align: center;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  line-height: 1;
  color: white;
  span {
    font-family: "Diablo", sans-serif;
    display: block;
    font-size: 5rem;
    color: #ff9d20;
  }
  @media screen and (max-width: 991px) {
    font-size: 2rem;
    span {
      font-size: 3.2rem;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 1.4rem;
    span {
      font-size: 2.2rem;
    }
  }
}

.container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.intro-paragraph {
  padding: 2rem;
  background-color: black;
  border-radius: 1rem;
  margin-bottom: 3rem;
  text-align: left;
  h2 {
    font-size: 1.4rem;
    color: orange;
    margin: 0;
  }
  p {
    color: white;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  a {
    color: #dfdfa3;
  }
  p:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
}

.introduction  {
  .intro-paragraph {
    p {
      padding: .5rem 0;
    }
  }
}

.smack {
  font-size: 3rem;
  font-weight: bold;
  color: red;
  position: absolute;
  text-align: center;
  width: 100%;
  left: 0;
  top: calc(50% - 1.5rem);
  -webkit-text-stroke: 2px black;
  animation-name: fade-in;
  animation-duration: 1s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/* body {
  background-color: black;
} */

.btn {
  padding: 1rem;
  border: 0;
  background-color: black;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0.5rem;
}
.disabled {
  opacity: 0.2;
}

pre {
  background-color: #1e1e1e;
  color: #a7d5f5;
  padding: 1.5rem;
  border-radius: 0.25rem;
  margin: 2rem 0 0;
  overflow-x: auto;
  span {
    margin-bottom: 0.5rem;
  }
}
pre adbz-comment {
  color: #7aa25f;
}
pre adbz-a {
  color: #808080;
}
pre adbz-h {
  color: #5c9ddd;
}
pre adbz-c {
  color: #dca58c;
}
adbz-content,
adbz-w {
  color: #ebebeb;
}
pre adbz-r {
  color: #bb86c0;
}
pre adbz-y {
  color: #dcdc8b;
}
pre adbz-y2 {
  color: #ffc814;
}
pre adbz-type {
  color: #3ac9a2;
}
pre adbz-b {
  color: #1a9fdb;
}
pre adbz-n {
  color: #b5cea8;
}

footer {
  background-color: #1c1616;
  width: 100%;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1rem 1rem rgba(0, 0, 0, 0.2);
  .container {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 6rem);
    margin: 0 auto;
    padding: 0;
  }
  p {
    color: white;
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    .container {
      width: 100%;
      margin: 0;
      padding: 0 1rem;
    }
  }
}

.monsters {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 767px) {
    padding: 0rem;
  }
}

.add-mob-container {
  width: calc(33.3333% - 2rem);
  background: repeating-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5) 10px,
    rgba(0, 0, 0, 0.4) 10px,
    rgba(0, 0, 0, 0.4) 20px
  );
  background-color: rgba(59 59 59 / 50%);
  border-radius: 1rem;
  margin: 1rem;
  min-height: 260px;
  position: relative;
  @media screen and (max-width: 991px) {
    width: calc(50% - 2rem);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  .btn {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin: auto;
    position: absolute;
    left: calc(50% - 80px);
    top: calc(50% - 80px);
    color: grey;
    transition: all 0.2s;
    border: 4px solid transparent;
    outline: transparent;
    i {
      font-size: 30px;
      display: block;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: white;
      transition: transform 0.2s;
    }
    &:hover,
    &:focus {
      color: white;
      border: 4px solid rgba(255, 255, 255, 0.5);
      i {
        transform: scale(1.2);
      }
    }
  }
  .disabled {
    &:hover,
    &:focus {
      cursor: auto;
      color: grey;
      border: 4px solid transparent;
      i {
        transform: scale(1);
      }
    }
  }
}
</style>
