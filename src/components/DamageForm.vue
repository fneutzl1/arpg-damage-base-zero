<template>
  <div class="row" style="position: relative">
    <!--     <div class="form-field">
      <label for="cap" class="label">Monster Cap</label>
      <input id="cap" v-model="cap" type="number" min="0" />
    </div> -->
    <div class="col">
      <p>Choose a number to "deal" damage to a monster below:</p>
      <div class="form-field">
        <label for="damage" class="label">Player initial damage</label>
        <input id="damage" v-model="damage" type="number" min="0" />
      </div>
    </div>
  </div>

  <div class="row row-stretch">
    <div class="col-full">
      <p>
        Select a monster to "damage" it. The red "life" line is unmodified life
        after the damage hits. The purple (resilience) line, is life after the
        hit was reduced by the cap and resilience formula.
      </p>
    </div>
    <template v-for="(monster, index) in monsters" :key="index">
      <button
        class="item select-mob-btn"
        @click="selectMonster(monster.id)"
        :class="{ isSelected: selectedMonsterId === monster.id }"
      >
        <p class="smackedIt" v-if="selectedMonsterId === monster.id">
          {{ toReadable(damage) }}
        </p>
        <p class="smackedIt resDamage" v-if="selectedMonsterId === monster.id">
          {{ toReadable(output) }}
        </p>
        <div class="header">
          <p class="name">{{ +index + 1 }} - {{ monster.name }}</p>
          <button
            @click="$emit('sendDeleteMonster', { id: monster.id })"
            class="delete-btn"
            :title="`Delete ${monster?.name}`"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
        <div class="img-container">
          <img
            :src="getImage(monster?.type)"
            :alt="monster?.name + ' animated'"
            :class="{
              isBovine:
                monster?.type === 'hell-bovine' ||
                monster?.type === 'moon-lord',
            }"
          />
        </div>
        <div class="life-container">
          <div
            class="life"
            :style="`width: calc(${returnLifeVsDamage(
              monster.id,
              monster.life
            )}% - 10px)`"
          ></div>
          <div
            class="resilience"
            :style="`width: calc(${returnResilienceVsDamage(
              monster.id,
              monster.life
            )}% - 10px)`"
          ></div>
        </div>
      </button>
    </template>

    <div class="add-mob-container" v-if="monsters.length < 5">
      <button class="item btn" @click="$emit('sendAddRandomMonster')">
        <i class="fa fa-plus" aria-hidden="true"></i> Add random monster
      </button>
    </div>
  </div>

  <div class="row" style="position: relative">
    <!--     <div class="form-field">
      <label for="cap" class="label">Monster Cap</label>
      <input id="cap" v-model="cap" type="number" min="0" />
    </div> -->
    <div class="col">
      <div class="form-field" v-if="monsterName() !== undefined">
        <label for="cap" class="label"
          >{{ monsterName() }} (physical) cap</label
        >
        <input
          id="cap"
          v-model="cap"
          type="number"
          min="0"
          @change="
            $emit('sendUpdateMonsterCap', { monster: getCorrectMonster(), cap })
          "
        />
      </div>

      <div class="form-field" v-if="monsterName() !== undefined">
        <label for="life" class="label">{{ monsterName() }} total life</label>
        <input
          id="life"
          v-model="life"
          type="number"
          min="0"
          @change="
            $emit('sendUpdateMonsterLife', {
              monster: getCorrectMonster(),
              life,
              damage,
              output,
            })
          "
        />
      </div>

      <!-- <select v-model="selectedMonsterId" @change="selectedGoesWut()">
      <template v-for="(monster, index) in monsters" :key="index">
        <option :value="monster.id">{{ index }} - {{ monster.name }}</option>
      </template>
    </select> -->

      <!-- <div
        style="
          background-color: white;
          margin: 0 auto;
          border-radius: 0.5rem;
          overflow: hidden;
        "
      >
        <v-select
          label="Choose a Monster"
          v-model="selectedMonsterId"
          :items="mobs"
          @update:modelValue="selectedGoesWut()"
        ></v-select>
      </div> -->
      <!-- <div class="form-field">
      <label for="resistance" class="label">Monster Resistance</label>
      <input id="resistance" v-model="resistance" type="number" max="100" min="0" />
    </div> -->
    </div>

    <div class="col right">
      <div class="damage-output" v-if="monsterName()">
        <p>
          Initial Player (total) damage = <span>{{ damageToReadable }}</span>
        </p>
        <br />
        <h3>{{ monsterName() }}</h3>
        <p>
          Physical Cap = <span>{{ capToReadable }}</span>
        </p>

        <p>
          Log10 Formula reduced <span>{{ damageToReadable }}</span> damage by
          <span>{{ toReadable(damageReducedBy) }}</span>
        </p>
        <br />
        <h4>
          Damage after resilience = <span>{{ toReadable(output) }}</span>
        </h4>
        <br />
        <div class="summary">
          <p>{{ monsterNameOnly() }}</p>
          <p class="text-life" v-if="isAliveLife()">
            Has
            <span>{{ toReadable(life - damage) }}</span> of
            {{ toReadable(life) }}
            life left with no resilience
          </p>
          <p class="text-life" v-else>Dies with no resilience</p>
          <p class="text-res" v-if="isAliveResilience()">
            Has
            <span>{{ toReadable(life - output) }}</span> of
            {{ toReadable(life) }}
            left with resilience
          </p>
          <p class="text-res" v-else>Dies with resilience</p>
        </div>
      </div>
    </div>

    <!-- <div class="btn-group">
      <button
        v-if="monsters.length > 0"
        @click="$emit('sendDeleteAllMonsters')"
        class="btn"
      >
        Delete All Monsters
      </button>
      <button v-if="true" @click="$emit('sendRestoreMonsters')" class="btn">
        Restore Monster(s)
      </button>

      <button @click="$emit('sendSmack', output)" class="btn disabled" disabled>
        Smack it
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "DamageForm",
  data() {
    return {
      cap: 0,
      damage: 500000,
      life: this.monsters?.[0]?.life ?? null,
      resistance: 0,
      selectedMonsterId: this.monsters?.[0]?.id ?? null,
    };
  },
  created() {
    this.selectedGoesWut();
  },
  props: {
    msg: String,
    monsters: Array,
  },
  methods: {
    isAliveLife() {
      return this.life > this.damage;
    },
    isAliveResilience() {
      return this.life > this.output;
    },
    getCorrectMonster() {
      return this.monsters.find(
        (monster) => monster.id === this.selectedMonsterId
      );
    },
    monsterNameOnly() {
      return this.monsters.find(
        (monster) => monster.id === this.selectedMonsterId
      )?.name;
    },
    monsterName() {
      const monsterIndex = this.monsters.findIndex(
        (monster) => monster.id === this.selectedMonsterId
      );
      return this.monsters[monsterIndex]
        ? `Monster ${+monsterIndex + 1} - ${this.monsters[monsterIndex]?.name}`
        : undefined;
    },
    selectMonster(monster) {
      this.selectedMonsterId = monster;
      this.life =
        this.monsters.find((monster) => monster.id === this.selectedMonsterId)
          ?.life ?? 0;
      this.selectedGoesWut();
      console.log(this.selectedMonsterId);
      const foundMonster = this.getCorrectMonster();
      if (foundMonster) {
        this.$emit("sendUpdateMonsterLife", {
          monster: foundMonster,
          life: this.life,
          damage: this.damage,
          output: this.output,
        });
      }
    },
    selectedGoesWut() {
      this.cap = this.monsters.find(
        (monster) => monster.id === this.selectedMonsterId
      )?.caps?.physical?.value;
    },
    toReadable(num) {
      if (!num || num < 0) {
        return 0;
      }
      const rounded = Math.round(num);
      return rounded?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0;
    },
    getImage(item) {
      const monster = item.toLowerCase();
      return require(`@/assets/${monster}.webp`) ?? "";
    },
    returnLifeVsDamage(monsterId, monsterLife) {
      if (this.selectedMonsterId !== monsterId) {
        return 100;
      }
      if (monsterLife <= this.damage) {
        return 0;
      }
      return Math.round(((monsterLife - this.damage) / monsterLife) * 100);
    },
    returnResilienceVsDamage(monsterId, monsterLife) {
      if (this.selectedMonsterId !== monsterId) {
        return 100;
      }
      if (monsterLife <= this.output) {
        return 0;
      }
      return Math.round(((monsterLife - this.output) / monsterLife) * 100);
      // return 20;
    },
  },
  computed: {
    resisted() {
      return this?.resistance / 100;
    },
    output() {
      const damageDivideByCap = this?.damage / this?.cap;
      const calc = +this?.cap + Math.log10(damageDivideByCap) * this?.cap;
      return (this?.damage < this?.cap ? this?.damage : calc) ?? 0;
    },
    log() {
      return Math.log10(this?.cap);
    },
    damageToReadable() {
      return this.toReadable(this?.damage);
    },
    capToReadable() {
      return this.toReadable(this?.cap);
    },
    damageReducedBy() {
      const reducedBy = this?.damage - this?.output;
      if (!reducedBy || reducedBy < 0) {
        return 0;
      }
      return reducedBy ?? 0;
    },
    mobs() {
      const monsters = this.monsters.map((monster, index) => ({
        title: `${+index + 1}. ${monster.name}`,
        value: monster.id,
      }));
      return monsters;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 1rem;
  background-color: #ebebeb;
  border-radius: 0.5rem;
  padding: 1rem;
  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid black;
  }
}
.label {
  margin-right: 0.5rem;
  font-weight: bold;
}

.btn-group {
  display: flex;
  margin: 2rem 0 0;
  padding: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: grey;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  .col {
    width: 50%;
    p {
      color: white;
    }
  }
  .col-full {
    width: 100%;
    margin: 1rem 0.5rem 0;
    p {
      color: white;
    }
  }
  .right {
    margin-left: 1rem;
    width: calc(50% - 1rem);
  }
  @media screen and (max-width: 767px) {
    .col {
      width: 100%;
      margin: 0 0 1rem;
    }
  }
}

.damage-output {
  text-align: right;
  background-color: #222222;
  border-radius: 0.5rem;
  padding: 1rem;
  span {
    color: #d35c5c;
  }
  h3 {
    color: white;
    font-size: 1.5rem;
    border-bottom: 1px solid white;
    margin-bottom: 0.5rem;
  }
  h4 {
    color: gold;
    font-size: 1.6rem;
    span {
      color: rgb(221, 63, 221);
    }
  }
}

.row {
  .item {
    background-color: rgb(47, 42, 42);
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    width: calc(230px - 1rem);
    overflow: hidden;
    @media screen and (max-width: 540px) {
      width: 100%;
    }
    .header {
      background-color: #141414;
      margin: -1rem -1rem 1rem;
      padding: 0;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
    }
    .name {
      color: yellow;
      margin: 0;
      padding: 0;
      font-size: 1rem;
    }
    .img-container {
      width: 100%;
      height: 110px;
      overflow: hidden;
      background-color: #181818;
      border-radius: 0.5rem 0.5rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        object-fit: cover;
        margin-top: 20%;
      }
    }
    .life-container {
      width: 100%;
      height: 35px;
      background-color: #020202;
      display: flex;
      flex-direction: column;
      .life {
        width: calc(100% - 10px);
        height: 10px;
        background-color: red;
        margin: 5px auto 2.5px 5px;
        transition: width 0.2s;
        transition-delay: 0.2s;
      }
      .resilience {
        width: calc(100% - 10px);
        height: 10px;
        background-color: purple;
        margin: 2.5px auto 5px 5px;
        transition: width 0.2s;
        transition-delay: 0.4s;
      }
    }
  }
  .select-mob-btn {
    outline: 2px solid transparent;
    text-align: left;
    position: relative;
    &:hover,
    &:focus {
      outline: 2px solid white;
    }
  }
  .isSelected {
    outline-color: yellow !important;
  }
}
.row-stretch {
  margin: 0 -0.5rem 1.5rem;
  @media screen and (max-width: 540px) {
    justify-content: center;
  }
}

.delete-btn {
  margin-left: auto;
  padding: 0 1rem;
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

.smackedIt {
  transition: all 0.2s;
}

@keyframes smack {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.2);
  }
}
.smackedIt {
  animation: smack 1s 1;
  opacity: 0;
  position: absolute;
  color: red;
  width: calc(100% - 2rem);
  text-align: center;
  top: 35%;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.7);
}
.resDamage {
  animation-delay: 0.2s;
  top: 50%;
  color: rgb(221, 63, 221);
}

.add-mob-container {
  width: calc(230px - 1rem);
  min-height: 216px;
  background: repeating-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5) 10px,
    rgba(0, 0, 0, 0.4) 10px,
    rgba(0, 0, 0, 0.4) 20px
  );
  background-color: rgba(59 59 59 / 50%);
  border-radius: 1rem;
  margin: 0.5rem;
  position: relative;
  /*   @media screen and (max-width: 991px) {
    width: calc(50% - 2rem);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  } */
  @media screen and (max-width: 540px) {
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
}
.summary {
  background-color: black;
  padding: 1rem;
  p {
    font-size: 1rem;
  }
  .text-res {
    color: rgb(221, 63, 221) !important;
    span {
      color: rgb(255, 140, 255) !important;
    }
  }
  .text-life {
    color: red !important;
    span {
      color: rgb(252, 84, 84) !important;
    }
  }
}
</style>
