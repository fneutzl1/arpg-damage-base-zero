<template>
  <div class="hello">
    <div class="form-field">
      <label for="cap" class="label">Monster Cap</label>
      <input id="cap" v-model="cap" type="number" min="0" />
    </div>
    <div class="form-field">
      <label for="damage" class="label">Damage</label>
      <input id="damage" v-model="damage" type="number" min="0" />
    </div>

    <select>
      <template v-for="(monster, index) in monsters" :key="index">
        <option>{{ index }} - {{ monster.name }}</option>
      </template>
    </select>

    <!-- <div class="form-field">
      <label for="resistance" class="label">Monster Resistance</label>
      <input id="resistance" v-model="resistance" type="number" max="100" min="0" />
    </div> -->

    <div class="damage-output"></div>
    <p>Monster Cap = {{ capToReadable }}</p>
    <p>Total damage = {{ damageToReadable }}</p>
    <p>Damage reduced by {{ damageReducedBy }}</p>
    {{ resisted }}
    <h2>Damage {{ output }}</h2>

    <button @click="$emit('sendSmack', this?.output)">Smack it</button>
  </div>
</template>

<script>
export default {
  name: "DamageForm",
  data() {
    return {
      cap: 0,
      damage: 0,
      resistance: 0,
    };
  },
  props: {
    msg: String,
    monsters: Array,
  },
  methods: {
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
      const reducedBy = this?.damageToReadable - this?.capToReadable;
      if (!reducedBy || reducedBy < 0) {
        return 0;
      }
      return reducedBy ?? 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-field {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  margin: 0 auto 1rem;
  background-color: #ebebeb;
  border-radius: 0.5rem;
  padding: 1rem;
  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
}
.label {
  margin-right: 0.5rem;
  font-weight: bold;
}
</style>
