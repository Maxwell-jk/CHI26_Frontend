<template>
  <div class="grid-container">
    <A class="a-container" />
    <B class="b-container" />
    <C class="c-container" />
    <D class="d-container" />
  </div>
</template>
<script src="./script.js"></script>

<style lang="less">
.grid-container {
  display: grid;
  grid-template-columns: 1440px 540px;
  grid-template-rows: 720px 360px;
  gap: 5px;
  width: 100%;
}

.a-container {
  grid-column: 1;
  grid-row: 1;
  border: 2px solid #a0a0a0;
  border-radius: 8px;
}

.b-container {
  grid-column: 1;
  grid-row: 2;
  border: 2px solid #a0a0a0;
  border-radius: 8px;
}

.c-container {
  grid-column: 2;
  grid-row: 1;
  border: 2px solid #a0a0a0;
  border-radius: 8px;
}

.d-container {
  grid-column: 2;
  grid-row: 2;
  border: 2px solid #a0a0a0;
  border-radius: 8px;
}
</style>