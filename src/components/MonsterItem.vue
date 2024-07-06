<template>
  <div class="monster">
    <div class="bio">
      <div class="header">
        <adbz-badge>{{ +index + 1 }}</adbz-badge>
        <h2 class="name">{{ monster?.name }}</h2>
        <button
          @click="$emit('sendDeleteMonster', { id: monster.id })"
          class="delete-btn"
          :title="`Delete ${monster?.name}`"
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      <template v-if="monster?.name">
        <img
          :src="getImage(monster?.type)"
          :alt="localMonster?.name + ' animated'"
          :class="{
            isBovine:
              monster?.type === 'hell-bovine' || monster?.type === 'moon-lord',
          }"
        />
      </template>

      <div class="life-container form-section">
        <h3>Life</h3>

        <div class="bar-containers">
          <p class="life-title">Damage / Life <span>( no resilience )</span></p>
          <div class="life-bar-container">
            <div
              class="life-damage"
              :style="`width: ${(lifeLeft / monster.life) * 100}%`"
            >
              <p class="life" v-if="lifeLeft > 0">
                {{ lifeLeft }} / {{ monster.life }}
              </p>
              <p class="dead" v-else>DEAD</p>
            </div>
          </div>

          <p class="life-title">Damage / Life <span>( resilience )</span></p>
          <div class="life-bar-container">
            <div
              class="life-damage damage-reduced"
              :style="`width: ${(lifeLeftResilience / monster.life) * 100}%`"
            >
              <p class="life" v-if="lifeLeftResilience > 0">
                {{ lifeLeftResilience }} / {{ monster.life }}
              </p>
              <p class="dead" v-else>DEAD</p>
            </div>
          </div>
        </div>

        <div class="form-item" style="background-color: red">
          <label :for="`life-${monster.id}`" class="label">Max Life</label>
          <input
            :id="`life-${monster.id}`"
            type="number"
            min="0"
            v-model="localMonster.life"
          />
        </div>
      </div>

      <div v-if="monster.caps" class="damage-bucket-caps form-section">
        <h3 class="name">{{ monster?.name }}'s Damage Caps</h3>
        <div class="caps-container">
          <template v-for="(item, type, index) in monster?.caps" :key="index">
            <div
              class="form-item"
              :style="'background-color:' + applyColor(type)"
              v-if="item"
            >
              <div v-if="isDisabled(type)" class="disabled-cap">
                Coming Soon
              </div>
              <label :for="`${type}-${monster.id}`" class="label">{{
                type
              }}</label>
              <input
                :id="`${type}-${monster.id}`"
                type="number"
                min="0"
                v-model="item.value"
                :tabindex="isDisabled(type) ? 1 : 0"
              />
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- <div class="contain-right">
      <button @click="smackIt(attackType)">Smack It</button>
    </div> -->
  </div>
</template>

<script>
import colorData from "../assets/data/color-data.json";

export default {
  name: "MonsterItem",
  data() {
    return {};
  },
  props: {
    monster: Object,
    monsterCount: Number,
    index: Number,
    theKey: Number,
  },
  methods: {
    isDisabled(key) {
      return key !== "physical";
    },
    applyColor(key) {
      return colorData?.[key] ?? "#000000";
    },
    getImage(item) {
      const monster = item.toLowerCase();
      return require(`@/assets/${monster}.webp`) ?? "";
    },
    smackIt(type) {
      console.log(type);
      return type;
    },
    // GET DAMAGE CALC
    getDamage(damage, cap) {
      return damage >= cap ? damage + Math.log10(damage / cap) * cap : damage;
    },
  },
  computed: {
    localMonster() {
      return this.monster;
    },
    lifeLeft() {
      return this.monster.lifeLeft;
    },
    lifeLeftResilience() {
      return this.monster.lifeLeftResilience;
    },
  },
};
</script>

<style lang="scss" scoped>
.monster {
  margin: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  width: calc(33.3333% - 2rem);
  // min-height: 950px;
  background-color: #2f2a2a;
  .bio {
    background-color: rgb(47 42 42);
    display: flex;
    flex-direction: column;
    img {
      padding: 1rem;
      max-width: 100%;
      margin: auto;
    }
  }

  @media screen and (max-width: 991px) {
    width: calc(50% - 2rem);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    min-height: auto;
  }

  .damage-bucket-caps {
    .name {
      color: orange;
    }
  }
}

.header {
  display: flex;
  adbz-badge {
    display: flex;
    width: 100px;
    background-color: #cfbe71;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    max-width: 50px;
  }
}
h2 {
  margin: 0;
  padding: 0.75rem;
  background-color: black;
  color: white;
  width: 100%;
  font-size: 1.3rem;
}
.form-item {
  padding: 0 0.5rem 0 0;
  margin: 0.5rem;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  .disabled-cap {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    font-style: italic;
    text-transform: uppercase;
    font-family: "Courier New", Courier, monospace;
    background: repeating-linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5) 10px,
      rgba(0, 0, 0, 0.4) 10px,
      rgba(0, 0, 0, 0.4) 20px
    );
    background-color: rgba(0, 0, 0, 0.7);
  }
  label {
    margin-right: 0.5rem;
    font-size: 0.9rem;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    height: calc(100% - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem 0 0 0.5rem;
    text-transform: capitalize;
    color: white;
    width: 40%;
  }
  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0;
    width: 70%;
    font-size: 1rem;
    height: calc(100% - 2rem);
  }
}

.delete-btn {
  padding: 0 1.4rem;
  font-size: 1.4rem;
  border: 0;
  background-color: #570000;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  outline: transparent;
  border: 3px solid transparent;
  border-radius: 0 1rem 0 0;
  &:hover,
  &:focus {
    background-color: rgb(122, 27, 27);
    border: 3px solid white;
  }
}

.form-section {
  padding-bottom: 1rem;
  h3 {
    background-color: black;
    color: orange;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 0;
  }
}

.bar-containers {
  background-color: #141414;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
}
.life-bar-container {
  background-color: black;
  padding: 0;
  border-radius: 0.25rem;
  margin: 0.5rem 0.5rem 1rem;
  overflow: hidden;
  position: relative;
}
.life-damage {
  width: 10%;
  height: 18px;
  background-color: red;
  margin: 0;
  border-radius: 0.25rem 0 0 0.25rem;
  .life {
    color: white;
    margin: 0;
    padding: 0 0.25rem;
    position: absolute;
  }
  .dead {
    margin: 0;
    width: 100%;
    font-style: italic;
    color: red;
    text-align: center;
    position: absolute;
  }
}
.life-title {
  font-weight: bold;
  color: #cfcf95;
  padding: 0 0.5rem;
  margin: 1rem 0 0;
  display: flex;
  span {
    color: grey;
    margin-left: auto;
  }
}

.isBovine {
  margin-left: calc(50% - 90px) !important;
}
</style>
