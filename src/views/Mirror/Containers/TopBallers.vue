<template>
  <div class="topballers">
    <h1>Top Ballers</h1>

    <ul>
      <li>
        <p>forever21</p>
        <span>6 drops!</span>
      </li>
      <li>
        <p>forever21</p>
        <span>6 drops!</span>
      </li>
      <li>
        <p>forever21</p>
        <span>6 drops!</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TopBallers',
};
</script>
<style scoped>
.topballers {
  padding: 2rem 0 4rem;
  /* margin: 4rem 0; */
}

h1 {
  font-size: 3.5rem;
}
p {
  font-size: 3rem;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
li {
  display: flex;
  gap: 4rem;
  align-items: center;
}
</style>
