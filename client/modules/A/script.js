import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
    name: 'AreaA',
    data() {
        return {
            map: null // 存储地图实例
        };
    },
    mounted() {
        // 组件挂载后初始化地图
        this.initMap();
    },
    beforeDestroy() {
        // 组件销毁前清理地图
        if (this.map) {
            this.map.remove();
        }
    },
    methods: {
        // 初始化地图
        initMap() {
            // 创建地图实例，设置初始视图为上海
            this.map = L.map('mapContainer').setView([31.2304, 121.4737], 10);

            // 添加OpenStreetMap瓦片图层
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(this.map);
        }
    }
};