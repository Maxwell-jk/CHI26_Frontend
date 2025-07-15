<template>
    <div class="map-container">
        <h2>区域 A - Leaflet地图</h2>
        <div id="mapContainer" class="map-wrapper"></div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped>
.map-container {
    padding: 20px;
}

.map-wrapper {
    height: 600px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
}

h2 {
    color: #333;
    margin-bottom: 15px;
    text-align: center;
}
</style>