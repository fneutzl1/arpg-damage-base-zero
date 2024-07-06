<template>
  <div class="row" style="position: relative">
    <!--     <div class="form-field">
      <label for="cap" class="label">Monster Cap</label>
      <input id="cap" v-model="cap" type="number" min="0" />
    </div> -->
    <div class="col">
      <div class="form-field">
        <label for="damage" class="label">Player Damage</label>
        <input id="damage" v-model="damage" type="number" min="0" />
      </div>

      <!-- <select v-model="selectedMonsterId" @change="selectedGoesWut()">
      <template v-for="(monster, index) in monsters" :key="index">
        <option :value="monster.id">{{ index }} - {{ monster.name }}</option>
      </template>
    </select> -->

      <div
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
      </div>
      <!-- <div class="form-field">
      <label for="resistance" class="label">Monster Resistance</label>
      <input id="resistance" v-model="resistance" type="number" max="100" min="0" />
    </div> -->
    </div>

    <div class="col right">
      <div class="damage-output">
        <p>
          Initial Player (total) damage = <span>{{ damageToReadable }}</span>
        </p>
        <p>
          Monster Physical Cap = <span>{{ capToReadable }}</span>
        </p>

        <br />
        <h2>Damage Applied = {{ toReadable(output) }}</h2>
        <br />
        <p>
          Log10 Formula reduced by
          <span>{{ toReadable(damageReducedBy) }}</span>
        </p>
      </div>
    </div>

    <div class="btn-group">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "DamageForm",
  data() {
    return {
      cap: 0,
      damage: 500000,
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
<style scoped>
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
  span {
    color: #d35c5c;
  }
}
</style>
