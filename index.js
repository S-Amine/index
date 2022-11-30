import*as THREE from"./three.module.js";import{OrbitControls}from"./OrbitControls.js";import{CSS3DRenderer,CSS3DObject,CSS3DSprite}from"./CSS3DRenderer.js";import{DragControls}from"./DragControls.js";import{GLTFLoader}from"./GLTFLoader.js";import{RGBELoader}from"./RGBELoader.js";import{RoughnessMipmapper}from"./RoughnessMipmapper.js";import Stats from"./jsm/libs/stats.module.js";import{GUI}from"./jsm/libs/dat.gui.module.js";import{Water}from"./jsm/objects/Water.js";import{Sky}from"./jsm/objects/Sky.js";var container;var camera,scene,renderer,renderer1,controls;var objects=[];var global_array_of_flowers=[];var mouse;const raycaster=new THREE.Raycaster;var loader=new GLTFLoader;mouse=new THREE.Vector2;container=document.createElement("div");document.body.appendChild(container);scene=new THREE.Scene;camera=new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,1,1e4);camera.position.set(0,0,600);var light,materials;light=new THREE.DirectionalLight(14674943,.1);light.position.set(50,200,100);light.position.multiplyScalar(1.3);light.castShadow=true;light.shadow.mapSize.width=1024;light.shadow.mapSize.height=1024;var d=300;light.shadow.camera.left=-d;light.shadow.camera.right=d;light.shadow.camera.top=d;light.shadow.camera.bottom=-d;light.shadow.camera.far=1e3;document.getElementById("animatebeige").addEventListener("click",animatebeige);document.getElementById("tobic").addEventListener("click",tobic);hydrange;document.getElementById("hydrange")?.addEventListener("click",hydrange_white);document.getElementById("hydrange_Pink")?.addEventListener("click",hydrange_Pink);document.getElementById("gerberapink")?.addEventListener("click",gerberapink);document.getElementById("gerberawhite")?.addEventListener("click",gerberawhite);document.getElementById("lilipink")?.addEventListener("click",lilipink);document.getElementById("liliwhite")?.addEventListener("click",liliwhite);function animatebeige(){loader.load("models/changeposition/animate/ROSE.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="animatebeige"){child.receiveShadow=true;child.castShadow=true;child.material.needsUpdate=true;child.name="ROSE";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}function hydrange_white(){loader.load("models/changeposition/hydrange/HYDRANGE.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="hydrangegreen"){child.receiveShadow=true;child.castShadow=true;child.material.needsUpdate=true;child.name="HYDRANGE";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}function hydrange_Pink(){loader.load("models/changeposition/hydrange/HYDRANGE.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="hydrangepink"){child.receiveShadow=true;child.castShadow=true;child.material.needsUpdate=true;child.name="HYDRANGE";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}function gerberapink(){loader.load("models/changeposition/Gerbera/gpink.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="gerberapink"){child.receiveShadow=true;child.castShadow=true;child.material.needsUpdate=true;child.name="GERBERA";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}function lilipink(){loader.load("models/changeposition/lili/LILY.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="lilipink"){child.receiveShadow=true;child.castShadow=true;child.material.needsUpdate=true;child.name="LILY";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}function liliwhite(){loader.load("models/changeposition/lili/LILY.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="liliwhite"){child.receiveShadow=true;child.castShadow=true;child.material.needsUpdate=true;child.name="LILY";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}function tobic(){loader.load("models/changeposition/tobic/topic.glb",function(gltff){gltff.scene.children[0].traverse(function(child){if(child.isMesh){if(child.name=="base"){child.receiveShadow=true;child.castShadow=true;child.name="TOPIC";objects.push(child);global_array_of_flowers.push(child);scene.add(child)}}})},xhr=>{},error=>{})}sndan();function sndan(){loader.load("models/sndan1.glb",function(gltffsnd){gltffsnd.scene.children[0].traverse(function(childsndan){if(childsndan.isMesh){childsndan.name="sndan";childsndan.receiveShadow=true;childsndan.castShadow=true;childsndan.material.transparent=true;childsndan.material.opacity=.5;childsndan.material.roughness=.02;console.log({position_vase_x:childsndan.position.x,position_vase_y:childsndan.position.y,position_vase_z:childsndan.position.z});scene.add(childsndan)}})},xhr=>{},error=>{})}function water1(){loader.load("models/changeposition/water.glb",function(gltffsnd){gltffsnd.scene.children[0].traverse(function(childsndan){if(childsndan.isMesh){childsndan.material.side=THREE.DoubleSide;scene.add(childsndan)}})},xhr=>{},error=>{})}function waterdown(){loader.load("models/changeposition/water1.glb",function(gltffsnd){gltffsnd.scene.children[0].traverse(function(childsndan){if(childsndan.isMesh){childsndan.material.side=THREE.DoubleSide;scene.add(childsndan)}})},xhr=>{},error=>{})}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight)}scene.updateMatrixWorld(true);renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(window.devicePixelRatio);renderer.setSize(window.innerWidth,window.innerHeight);renderer.domElement.style.position="absolute";renderer.domElement.style.top=0;renderer.domElement.style.zIndex="1";renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.outputEncoding=THREE.sRGBEncoding;container.appendChild(renderer.domElement);var controls=new OrbitControls(camera,renderer.domElement);var cubeRenderTarget=new THREE.WebGLCubeRenderTarget(256);var cubeCamera=new THREE.CubeCamera(1,1e3,cubeRenderTarget);window.addEventListener("resize",onWindowResize,false);let dragControls=new DragControls(objects,camera,renderer.domElement);console.log("DOWN");dragControls.addEventListener("dragstart",function(event){if(event.object.name=="lilipink"||event.object.name=="liliwhite"||event.object.name=="gerberawhite"||event.object.name=="gerberapink"||event.object.name=="animatewhite"||event.object.name=="animatebeige"||event.object.name=="animatepinklow"||event.object.name=="animatepinkhigh"||event.object.name=="base"||event.object.name=="hydrangewhite"||event.object.name=="hydrangepink"||event.object.name=="gerbera"||event.object.name=="ROSE"||event.object.name=="HYDRANGE"||event.object.name=="GERBERA"||event.object.name=="LILY"||event.object.name=="rose2curv"||event.object.name=="rose2curv1"||event.object.name=="rose2curv2"||event.object.name=="rose2curv3"||event.object.name=="TOPIC"){dragControls.enabled=true;controls.enabled=false}else{dragControls.enabled=false}});dragControls.addEventListener("dragend",function(event){controls.enabled=true});dragControls.addEventListener("drag",function(event){document.getElementById("xpo").value=event.object.position.x;document.getElementById("ypo").value=event.object.position.y;document.getElementById("zpo").value=event.object.position.z});const pmremGenerator=new THREE.PMREMGenerator(renderer);pmremGenerator.compileEquirectangularShader();(new RGBELoader).setDataType(THREE.UnsignedByteType).setPath("textures/equirectangular/").load("studio_small_08_1k.hdr",function(texture){const envMap=pmremGenerator.fromEquirectangular(texture).texture;scene.environment=envMap;texture.dispose();pmremGenerator.dispose();render()});const roughnessMipmapper=new RoughnessMipmapper(renderer);const pointer=new THREE.Vector2;function onPointerMove(event){pointer.x=event.clientX/window.innerWidth*2-1;pointer.y=-(event.clientY/window.innerHeight)*2+1}window.addEventListener("pointermove",onPointerMove);window.requestAnimationFrame(render);function update(){camera.updateProjectionMatrix()}let INTERSECTED;renderer.domElement.addEventListener("click",ray,true);function ray(){raycaster.setFromCamera(pointer,camera);const intersects=raycaster.intersectObjects(scene.children);if(intersects.length>0){if(intersects[0].object.name!="sndan"){if(INTERSECTED=intersects[0].object){if(INTERSECTED.name!="sndan"){document.getElementById("showname").innerHTML=INTERSECTED.name;document.getElementById("rox").addEventListener("input",function(){INTERSECTED.rotation.x=document.getElementById("rox").value*.1;document.getElementById("valrox").value=INTERSECTED.rotation.x});document.getElementById("roy").addEventListener("input",function(){INTERSECTED.rotation.y=document.getElementById("roy").value*.1;document.getElementById("valroy").value=INTERSECTED.rotation.y});document.getElementById("roz").addEventListener("input",function(){INTERSECTED.rotation.z=document.getElementById("roz").value*.1;document.getElementById("valroz").value=INTERSECTED.rotation.z});document.getElementById("del").addEventListener("click",function(){scene.remove(INTERSECTED);global_array_of_flowers=global_array_of_flowers.filter(item=>item!=INTERSECTED)})}}}}}animate();function animate(){requestAnimationFrame(animate);update();render()}function render(){renderer.render(scene,camera)}function count_occur(element,arr){let counter=0;for(let i of arr){if(i==element)counter++}return counter}function sortPropertiesByValue(object){const keys=Object.keys(object);const valuesIndex=keys.map(key=>({key:key,value:object[key]}));valuesIndex.sort((a,b)=>a.key>b.key?1:b.key>a.key?-1:0);const newObject={};for(const item of valuesIndex){newObject[item.key]=item.value}return newObject}document.getElementById("getarry")?.addEventListener("click",function(){const references={};const references_flower_array=[];const array_of_flowers=[];for(let index=0;index<global_array_of_flowers.length;index++){references_flower_array.push(global_array_of_flowers[index].name);array_of_flowers.push({name:global_array_of_flowers[index].name,url:"",positionX:global_array_of_flowers[index].position.x,positinY:global_array_of_flowers[index].position.y,positinZ:global_array_of_flowers[index].position.z,rotationX:global_array_of_flowers[index].rotation.x,rotationY:global_array_of_flowers[index].rotation.y,rotationZ:global_array_of_flowers[index].rotation.z})}const array_of_flowers_without_occurences=new Set(references_flower_array);for(let i of array_of_flowers_without_occurences){references[i]=count_occur(i,references_flower_array)}console.log({data:array_of_flowers.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)});console.log(sortPropertiesByValue(references))});
