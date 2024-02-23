<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    console.log("AboutPage beforeCreate");
  },
  created() {
    console.log("AboutPage created");
  },
  beforeMount() {
    console.log("AboutPage beforeMount");
  },
  mounted() {
    console.log("AboutPage mounted");
  },
  beforeUpdate() {
    console.log("AboutPage beforeUpdate");
  },
  updated() {
    console.log("AboutPage updated");
  },
  beforeUnmount() {
    console.log("AboutPage beforeUnmount");
  },
  unmounted() {
    console.log("AboutPage unmounted");
  },
  errorCaptured() {
    console.log("AboutPage errorCaptured");
  },
  renderTracked() {
    console.log("AboutPage renderTracked");
  },
  renderTriggered() {
    console.log("AboutPage renderTriggered");
  },
};
</script>
