(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"7BS7":function(t,s,a){t.exports=a("AkKV")},AkKV:function(t,s,a){"use strict";a.r(s);var e=a("eVuF"),r=a.n(e),n={data:function(){return{description:"Hello Vue Cesium",rotation:0,rectangle1:{},coordinates1:{west:-110,south:20,east:-80,north:25},material1:{},rectangle2:{},coordinates2:{west:-110,south:30,east:-100,north:40},material2:{},rotation2:{},outlineColor2:{},rectangle3:{},coordinates3:{west:-92,south:30,east:-82,north:40},material3:{},rotation3:{},stRotation3:{},classificationType3:0}},mounted:function(){r.a.all([this.$refs.rectangle1.createPromise,this.$refs.rectangle2.createPromise,this.$refs.rectangle3.createPromise]).then((function(t){t[0].viewer.zoomTo(t[0].viewer.entities)}))},methods:{ready:function(t){var s=t.Cesium;t.viewer;this.rotation=s.Math.toRadians(30),this.material1=s.Color.RED.withAlpha(.5),this.material2=s.Color.GREEN.withAlpha(.5),this.rotation2=s.Math.toRadians(45),this.outlineColor2=s.Color.BLACK,this.material3="https://zouyaoji.top/vue-cesium/favicon.png",this.outlineColor3="BLACK",this.rotation3=new s.CallbackProperty(this.getRotationValue,!1),this.stRotation3=new s.CallbackProperty(this.getRotationValue,!1),this.classificationType3=s.ClassificationType.TERRAIN},getRotationValue:function(){return this.rotation+=.005,this.rotation}}},v=a("JFUb"),l=Object(v.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("RectangleGraphics")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:t.ready}},[a("vc-entity",{attrs:{description:t.description,rectangle:t.rectangle1},on:{"update:rectangle":function(s){t.rectangle1=s}}},[a("vc-graphics-rectangle",{ref:"rectangle1",attrs:{coordinates:t.coordinates1,material:t.material1}})],1),t._v(" "),a("vc-entity",{attrs:{description:t.description,rectangle:t.rectangle2},on:{"update:rectangle":function(s){t.rectangle2=s}}},[a("vc-graphics-rectangle",{ref:"rectangle2",attrs:{coordinates:t.coordinates2,material:t.material2,rotation:t.rotation2,extrudedHeight:3e5,height:1e5,outline:!0,outlineColor:t.outlineColor2}})],1),t._v(" "),a("vc-entity",{attrs:{description:t.description,rectangle:t.rectangle3},on:{"update:rectangle":function(s){t.rectangle3=s}}},[a("vc-graphics-rectangle",{ref:"rectangle3",attrs:{coordinates:t.coordinates3,material:t.material3,rotation:t.rotation3,stRotation:t.stRotation3,classificationType:t.classificationType3}})],1)],1)],1)]],2),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(3),t._v(" "),a("hr"),t._v(" "),t._m(4),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(5),t._v(" "),a("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-graphics-rectangle")]),this._v(" component is used to load a Rectangle that conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. Need to be used as a subcomponent of "),s("code",{pre:!0},[this._v("vc-entity")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[this._v("Load RectangleGraphics with "),s("code",{pre:!0},[this._v("vc-graphics-rectangle")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rectangle.sync")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rectangle1"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rectangle1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":coordinates")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"coordinates1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":material")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"material1"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-rectangle")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rectangle.sync")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rectangle2"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-rectangle")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":coordinates")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"coordinates2"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":material")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"material2"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rotation")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rotation2"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":extrudedHeight")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"300000.0"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":height")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100000.0"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":outline")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":outlineColor")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"outlineColor2"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rectangle2"')]),t._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-rectangle")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rectangle.sync")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rectangle3"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-rectangle")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":coordinates")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"coordinates3"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":material")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"material3"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rotation")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rotation3"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":stRotation")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"stRotation3"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":classificationType")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"classificationType3"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rectangle3"')]),t._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-rectangle")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rotation")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rectangle1")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("coordinates1")]),t._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("west")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-110")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("south")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("east")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-80")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("north")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("25")]),t._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material1")]),t._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rectangle2")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("coordinates2")]),t._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("west")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-110")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("south")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("east")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-100")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("north")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40")]),t._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material2")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rotation2")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("outlineColor2")]),t._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rectangle3")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("coordinates3")]),t._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("west")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-92.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("south")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("east")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-82.0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("north")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40.0")]),t._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material3")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rotation3")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("stRotation3")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("classificationType3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v(".all([\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.rectangle1.createPromise,\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.rectangle2.createPromise,\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.rectangle3.createPromise\n      ]).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("instances")]),t._v(") =>")]),t._v(" {\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("].viewer.zoomTo(instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("].viewer.entities)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rotation = Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".material1 = Cesium.Color.RED.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(")\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".material2 = Cesium.Color.GREEN.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rotation2 = Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("45")]),t._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".outlineColor2 = Cesium.Color.BLACK\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".material3 = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".outlineColor3 = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`BLACK`")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rotation3 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.CallbackProperty("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".getRotationValue, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".stRotation3 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.CallbackProperty("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".getRotationValue, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".classificationType3 = Cesium.ClassificationType.TERRAIN\n      },\n      getRotationValue() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rotation += "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.005")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rotation\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying the visibility of the rectangle.")])]),t._v(" "),a("tr",[a("td",[t._v("coordinates")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" The Property specifying the Rectangle. "),a("strong",[t._v("structure: { west: number, south: number, east: number, north: number } in degrees")])])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the altitude of the rectangle relative to the ellipsoid surface.")])]),t._v(" "),a("tr",[a("td",[t._v("heightReference")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying what the height is relative to. "),a("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),a("tr",[a("td",[t._v("extrudedHeight")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the altitude of the rectangle's extruded face relative to the ellipsoid surface.")])]),t._v(" "),a("tr",[a("td",[t._v("extrudedHeightReference")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying what the extrudedHeight is relative to. "),a("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),a("tr",[a("td",[t._v("rotation")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric property specifying the rotation of the rectangle clockwise from north.")])]),t._v(" "),a("tr",[a("td",[t._v("stRotation")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric property specifying the rotation of the rectangle texture counter-clockwise from north.")])]),t._v(" "),a("tr",[a("td",[t._v("granularity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the angular distance between points on the rectangle.")])]),t._v(" "),a("tr",[a("td",[t._v("fill")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether the rectangle is filled with the provided material.")])]),t._v(" "),a("tr",[a("td",[t._v("material")]),t._v(" "),a("td",[t._v("Object|String|Array")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'WHITE'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the material used to fill the rectangle.")])]),t._v(" "),a("tr",[a("td",[t._v("outline")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether the rectangle is outlined.")])]),t._v(" "),a("tr",[a("td",[t._v("outlineColor")]),t._v(" "),a("td",[t._v("Object|String|Array")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'BALCK'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the Color of the outline.")])]),t._v(" "),a("tr",[a("td",[t._v("outlineWidth")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the width of the outline.")])]),t._v(" "),a("tr",[a("td",[t._v("shadows")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" An enum Property specifying whether the rectangle casts or receives shadows from each light source. "),a("strong",[t._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),t._v(" "),a("tr",[a("td",[t._v("distanceDisplayCondition")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying at what distance from the camera that this box will be displayed. "),a("strong",[t._v("structure: { near: number, far: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("classificationType")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("2")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" An enum Property specifying whether this rectangle will classify terrain, 3D Tiles, or both when on the ground. "),a("strong",[t._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3")])])]),t._v(" "),a("tr",[a("td",[t._v("zIndex")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the zIndex used for ordering ground geometry. Only has an effect if the rectangle is constant and neither height or extrudedHeight are specified.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html"}},[this._v("RectangleGraphics")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),a("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),a("tr",[a("td",[t._v("definitionChanged")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);s.default=l.exports}}]);
//# sourceMappingURL=33.e18696cd4735bf2723f1.js.map