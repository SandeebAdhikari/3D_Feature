import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { Mug } from "../components/Mug";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Float>
        <Mug />
      </Float>
      <ContactShadows position-y={-0.5} opacity={0.4} blur={2} />
      <Environment preset="city" background blur={4} />
    </>
  );
};
