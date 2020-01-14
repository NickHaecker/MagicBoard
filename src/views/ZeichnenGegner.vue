<template>
    <div>
        <section class="zeichensec">
            <paintable-gegner
                    :active="isActive"
                    :width="800"
                    :height="800"
                    :disableNavigation="disableNavigation"
                    :hide="hidePaintable"
                    :horizontalNavigation="true"
                    :navigation="navigation"
                    :name="isFirstPaintable ? 'my-screen' : 'my-second-screen'"
                    :factor="1"
                    :lineWidth="dynamicLineWidth"
                    :lineWidthEraser="20"
                    :useEraser="useEraser"
                    :color="color"
                    class="paint"
                    ref="paintable"
                    @toggle-paintable="toggledPaintable"
            >
            </paintable-gegner>
        </section>
        <article>
            <v-btn class="but" text style="background: #181857;color: white;margin-left: 6%"  @click="$router.push({name:'Zeichnen'})">Du</v-btn>
            <v-btn class="but" text style="background: gray;color: white"  @click="$router.push({name:'ZeichnenGegner'})">Gegner</v-btn>
        </article>
    </div>
</template>

<script>

    export default {
        name: "ZeichnenGegner",

        data() {
            return {
                isFirstPaintable: true,
                hidePaintable: false,
                disableNavigation: false,
                dynamicLineWidth: 5,
                isActive: false,
                useEraser: false,
                color: "#000",
            };
        },
        computed: {
            navigation() {
                return {
                    "draw-save": {
                        icon: "mdi-safe",
                        activeBody: "<strong>save</strong>"
                    },
                    color: {
                        body: "color"
                    }
                };
            },

        },
        methods: {
            toggledPaintable(isActive) {
                this.isActive = isActive;
            },

        }
    }
</script>

<style scoped>
    .but{margin-left: 1%;margin-top: -5%}
    body {
        font-family: Helvetica, Arial, sans-serif;
        position: initial !important;
    }
    h3 {
        font-weight: normal;
    }
    .paint {
        border: 5px solid #000;
        border-radius: 5px;
        margin: 40px auto;
        box-sizing: border-box;
        display: block;
        width: 810px !important;
        height: 810px !important;
        position: relative !important;
        overflow: hidden;
        background: white;
        margin-top: 3%;
    }

    button:hover {
        opacity: 1;
    }

    .erstesec h2 {
        font-family: "Fredericka the Great";
        font-size: 30px;
        font-weight: lighter;
        text-align: center;
        text-transform: uppercase;
        color: white;
    }
    .erstesec p {
        font-family: "Hind Vadodara";
        font-size: 20px;
        font-weight: lighter;
        text-align: center;
        text-transform: uppercase;
        text-decoration: black underline;
        color: white;
    }


</style>