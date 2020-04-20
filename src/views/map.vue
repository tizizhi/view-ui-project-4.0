<template>
    <div>
        <div id="map" style="width: 100%;height: 1080px"></div>
    </div>
</template>

<script>
    import json from '../js/5G'

    export default {
        name: "map",
        data() {
            return {
                map: '',
                dVector: new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: []
                    }),
                    style: (feature, resolution) => {
                        return new ol.style.Style({
                            image: new ol.style.Icon({
                                opacity: 0.75,
                                src: 'static/images/da.png'
                            }),
                            zIndex: 0
                        });
                    }
                }),
            }
        },
        methods: {
            init() {
                this.map = new ol.Map({
                    target: 'map',
                    layers: [
                        new ol.layer.Tile({
                            source: new ol.source.OSM()
                        })
                    ],
                    controls: ol.control.defaults().extend([
                        new ol.control.MousePosition({
                            coordinateFormat: ol.coordinate.createStringXY(5)//保留5位小数
                        }),
                        new ol.control.ScaleLine(),
                        new ol.control.ZoomSlider(),
                        new ol.control.OverviewMap({
                            collapsed: false,
                            view: new ol.View({
                                center: [113.27726002254427, 23.16541797310657],
                                maxZoom: 18,
                                minZoom: 12,
                                zoom: 13,
                                projection: "EPSG:4326"  //需要跟map中的view一致 add by zhangbaoxin 2016.07.03
                            })
                        }),
                    ]),
                    view: new ol.View({
                        center: [113.30564127918903, 23.130588436769536],
                        zoom: 13,
                        projection: "EPSG:4326"
                    })
                });
                this.map.addLayer(this.dVector);
                this.draw();
            },
            draw() {
                let arr = json.getJson();
                let f = new Array();
                for (let i in arr) {
                    let lng = arr[i].lon;
                    let lat = arr[i].lat;
                    let newObj = $.extend(true, {}, arr[i]);
                    newObj.geometry = new ol.geom.Point([lng, lat]);
                    f.push(new ol.Feature(newObj));
                }
                this.dVector.getSource().addFeatures(f);
            }

        },
        mounted() {
            this.init();
        }

    }
</script>

<style scoped>

</style>