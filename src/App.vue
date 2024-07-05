<template>
  <main class="container">
    <section class="introduction">
      <div class="title-fire">
        <div class="title-inner">
          <FireAnimated :flip="true"></FireAnimated>
          <h1 v-html="title"></h1>
          <FireAnimated></FireAnimated>
        </div>
      </div>
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
          <a
            href="https://us.forums.blizzard.com/en/d4/t/monster-resilience-to-prevent-crazy-unintended-spikes-of-damage-bugs-etc/177039"
            target="_blank"
            >The original post can be found on the Blizzard D4 Forums here.</a
          >
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

    <DamageForm v-if="false"></DamageForm>

    <button
      v-if="this.monsters.length > 0"
      @click="deleteAllMonsters()"
      class="btn"
    >
      Delete All Monsters
    </button>
    <button
      v-if="
        this.monsters !== this.backupMonsters && this.backupMonsters.length > 0
      "
      @click="restoreMonsters()"
      class="btn"
    >
      Restore Monster(s)
    </button>

    <div class="monsters">
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
        <pre><code><comment>// EXAMPLE CODE INCOMING -> 
// THE getDamage() FUNCTION IS THE MEAT. 
            
// 123,456,789 dealt by player</comment>
<h>const</h> damage <w>=</w> <n>123456789</n><w>;</w>

<comment>// 10,000 damage monster cap</comment>
<h>const</h> cap <w>=</w> <n>10000</n><w>;</w>
          
<comment>// Simple Monster Resillience Function</comment>
<h>static</h> <y>getDamage</y><b>(</b>damage<w>:</w> <type>Number</type><w>,</w> cap<w>:</w> <type>Number</type><b>)</b><w>:</w> <type>Number</type> <b>{</b>
  <r>return</r> damage <w>>=</w> cap <w>?</w> damage <w>+</w> Math<w>.</w><y>log10</y><y2>(</y2>damage <w>/</w> cap<y2>)</y2> <w>*</w> cap <w>:</w> damage<w>;</w>
<b>}</b>

<comment>// HUMAN MORE READABLE EXPLANATION</comment>
<h>const</h> d <w>=</w> damage<w>;</w>
<h>const</h> x <w>=</w> cap<w>;</w>

<r>if</r> <y2>(</y2>d <w>>=</w> x<y2>)</y2> <y2>{</y2>
  damage <w>=</w> x <w>+</w> Math<w>.</w><y>log10</y><b>(</b>d <w>/</w> x<b>)</b> <w>*</w> x<w>;</w>
<y2>}</y2> <r>else</r> <y2>{</y2>
  damage <w>=</w> d<w>;</w>
<y2>}</y2>

<comment>// BRING YOUR OWN POTATOES.</comment></code></pre>
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
    getCopyrightYears() {
      const yearNow = new Date().getFullYear();
      console.log(yearNow);
      return yearNow === 2024 ? yearNow : `2024 - ${yearNow}`;
    },
    smackIt(damage) {
      this.hit = damage;
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
      if (random >= 76 && random <= 90) type = "moon-lord";
      if (random >= 91 && random <= 95) type = "mephisto";
      if (random >= 96 && random <= 99) type = "uber-duriel";
      if (random === 100) type = "uber-diablo";

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

body {
  //background-color: black;
  padding: 2rem;
  background: linear-gradient(
      90deg,
      #111217 0%,
      #15171e 30%,
      #15171e 70%,
      #111217 100%
    )
    center 0px repeat-y;
  @media screen and (max-width: 767px) {
    padding: 1rem;
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

.introduction {
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
pre comment {
  color: #7aa25f;
}
pre a {
  color: #808080;
}
pre h {
  color: #5c9ddd;
}
pre c {
  color: #dca58c;
}
content,
w {
  color: #ebebeb;
}
pre r {
  color: #bb86c0;
}
pre y {
  color: #dcdc8b;
}
pre y2 {
  color: #ffc814;
}
pre type {
  color: #3ac9a2;
}
pre b {
  color: #1a9fdb;
}
pre n {
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
  }
  p {
    color: white;
    margin: 0;
  }
}

.monsters {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.add-mob-container {
  width: calc(33.3333% - 2rem);
  background-color: rgba(0, 0, 0, 0.5);
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
