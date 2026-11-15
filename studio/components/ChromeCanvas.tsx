"use client";
import {Canvas,useFrame} from "@react-three/fiber";
import {Float,Sparkles} from "@react-three/drei";
import {useMemo,useRef} from "react";
import * as THREE from "three";

function ChromeObject(){
  const root=useRef<THREE.Group>(null);
  const logoShape=useMemo(()=>{
    const s=new THREE.Shape();
    s.moveTo(-1.76,.68);s.lineTo(1.76,.68);s.lineTo(1.37,.05);s.lineTo(.48,.05);s.lineTo(-.56,-1.62);s.lineTo(-1.3,-1.62);s.lineTo(-.2,.05);s.lineTo(-1.95,.05);s.closePath();
    return s;
  },[]);
  const logoGeometry=useMemo(()=>new THREE.ExtrudeGeometry(logoShape,{depth:.32,steps:1,bevelEnabled:true,bevelThickness:.11,bevelSize:.1,bevelSegments:7,curveSegments:8}),[logoShape]);
  useFrame(({pointer,clock},delta)=>{if(!root.current)return;root.current.rotation.y=THREE.MathUtils.damp(root.current.rotation.y,pointer.x*.3 + Math.sin(clock.elapsedTime*.18)*.17,2.5,delta);root.current.rotation.x=THREE.MathUtils.damp(root.current.rotation.x,-pointer.y*.18,2.5,delta)});
  return <group ref={root} position={[0,.18,0]} rotation={[-.12,-.26,-.12]}>
    <Float speed={1.25} rotationIntensity={.13} floatIntensity={.37}>
      <mesh geometry={logoGeometry} castShadow position={[.1,.03,0]} rotation={[0,-.13,-.05]}>
        <meshPhysicalMaterial color="#d8e7ff" metalness={.78} roughness={.12} clearcoat={1} clearcoatRoughness={.08} reflectivity={1} emissive="#173a79" emissiveIntensity={.13}/>
      </mesh>
      <mesh position={[0,-.13,-.13]} rotation={[.1,.16,-.28]}>
        <torusGeometry args={[2.17,.025,18,200]}/>
        <meshBasicMaterial color="#5db1ff" transparent opacity={.84} toneMapped={false}/>
      </mesh>
      <mesh position={[0,-.13,.53]} rotation={[-.15,-.32,-.35]}>
        <torusGeometry args={[2.29,.011,12,200]}/>
        <meshBasicMaterial color="#d9eaff" transparent opacity={.7} toneMapped={false}/>
      </mesh>
      <mesh position={[0,.2,-1]} rotation={[.45,-.44,.17]}>
        <torusGeometry args={[2.66,.004,8,160]}/>
        <meshBasicMaterial color="#536eeb" transparent opacity={.28} toneMapped={false}/>
      </mesh>
    </Float>
  </group>;
}
function SceneLights(){return <><ambientLight intensity={1.8}/><directionalLight position={[-4,6,8]} intensity={3.4} color="#f5f8ff"/><directionalLight position={[4,-3,5]} intensity={4.3} color="#5f8cff"/><directionalLight position={[2,4,-5]} intensity={3} color="#c5e8ff"/><pointLight position={[-3,-2,4]} intensity={45} distance={10} color="#2989ff"/><pointLight position={[2,3,3]} intensity={33} distance={10} color="#ffffff"/></>}
export default function ChromeCanvas(){
 return <Canvas dpr={[1,1.65]} gl={{alpha:true,antialias:true,powerPreference:"high-performance"}} camera={{position:[0,0,7.35],fov:45}} style={{width:"100%",height:"100%"}}>
  <SceneLights/><ChromeObject/><Sparkles count={32} scale={[7,5,2]} size={1.5} speed={.12} color="#7bc6ff" opacity={.45}/>
 </Canvas>;
}