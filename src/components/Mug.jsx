import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture, Decal } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { useControls } from "leva";
import { useState } from "react";

export function Mug(props) {
  const texture = useTexture("/texture/about-pic.png");
  const group = useRef();
  const decal = useRef();
  const { nodes, materials } = useGLTF("/models/mug4.glb");

  const [pos, setPos] = useState([0.004, 0.001, 0.06]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState([0.05, 0.05, 0.05]);

  useControls({
    angle: {
      min: degToRad(90),
      max: degToRad(270),
      value: Math.PI / 4,
      step: 0.01,
      onChange: (value) => {
        const x = Math.cos(value) * 0.06;
        const z = Math.sin(value) * 0.06;
        const rot = Math.atan2(x, z);
        setRotation(() => [0, rot, 0]);
        setPos((pos) => [x, pos[1], z]);
      },
    },

    posY: {
      value: 0.001,
      min: 0.0001,
      max: 0.02,
      step: 0.001,
      onChange: (value) => {
        setPos((pos) => [pos[0], value, pos[2]]);
      },
    },

    scale: {
      value: 0.07,
      min: 0.05,
      max: 0.09,
      step: 0.01,
      onChange: (value) => {
        setScale(() => [value, value, 0.09]);
      },
    },
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder_1.geometry} scale={[5, 5, 5]}>
        <meshBasicMaterial transparent opacity={0} />
        <Decal
          ref={decal}
          //debug
          position={pos}
          rotation={rotation}
          scale={scale}
        >
          <meshBasicMaterial
            map={texture}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials.default_1}
        scale={[5, 5, 5]}
      />
    </group>
  );
}

useGLTF.preload("/models/mug4.glb");
