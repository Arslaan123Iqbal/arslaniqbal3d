import { Suspense, useState } from "react";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import City from "@/models/City";
import Sky from "@/models/Sky";
import Bird from "@/models/Bird";
import Plane from "@/models/Plane";
import HomeInfo from "@/components/HomeInfo";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
        screenPosition = [0, -6.5, -43.4];
      } else {
        screenScale = [1, 1, 1];
        screenPosition = [0, -6.5, -43.4];
      }
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
    }

    return [screenScale, screenPosition];
  };
  const [isRotating, setisRotating] = useState(false);
  const [islandScale, islandPosition, islandRotaion] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [currentStage, setCurrentStage] = useState(0);

  return (
    <section className="relative w-full h-screen">
      <Head>
        <title>Arslan Iqbal</title>
      </Head>
      <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-28">
        {currentStage>0 && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={"000000"}
            intensity={1}
          />
         
          <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setisRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
