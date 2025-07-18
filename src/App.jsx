import { Canvas } from "@react-three/fiber";
import { Experience } from "./pages/Home";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 2], fov: 30 }}>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <Experience />
    </Canvas>
  );
}

export default App;
