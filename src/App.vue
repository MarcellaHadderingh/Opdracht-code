<template>
  <div id="app">
  {{percentage}}
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({"state": {
    "percentage": 0
},
"mutations": {
    calculatePercentage (state, data) {
        const totalCount = data.length;
        let totalValue = 0;
        for (const obj of data) {
            totalValue += parseInt(obj.status.newStatus, 2);
        }
        const percentage = totalValue / totalCount * 100;
        state.percentage = percentage.toFixed(2);

    }
}});

export default {
    "name": "app",
    "mounted" () {
        setInterval(this.getdata, 30000);
    },
    "computed": {
        percentage () {
            return store.state.percentage;
        }
    },
    "components": {
    },
    "methods": {
        "getdata": () => {
            fetch("http://35.198.67.173/v3/componentsForMap/568d2deb47570bac54a1fbc0")
                .then((response) => {
                    response.json().then((data) => {
                        store.commit("calculatePercentage", data);
                    });
                });
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  width: 50px;
  height:20px;
  background-color: red;
}
</style>
