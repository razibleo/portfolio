import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import {
  Canvas,
  PerspectiveCameraProps,
  ThreeEvent,
  useFrame,
} from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Text,
  // TrackballControls,
} from "@react-three/drei";
// import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import skills from "../../../../data/skills_data";
import useContainerDimensions from "../../../../shared/hooks/useContainerDimensions";
import { lerp } from "three/src/math/MathUtils";
import { clamp } from "../../../../utils/common_functions";
import useScreenDimensions from "../../../../shared/hooks/useScreenDimensions";

function Word({ children, ...props }: any) {
  const color = new THREE.Color();
  const fontProps = {
    font: "Montserrat",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref: any = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    // if (hovered) document.body.style.cursor = "pointer";
    // return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#ffffff" : "#0be779"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      // onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

interface CloudProps {
  wordsList: string[];
  radius: number;
}

function Cloud({ wordsList, radius }: CloudProps) {
  // Create a count x count random words with spherical distribution
  const count = Math.floor(Math.sqrt(wordsList.length));
  const words = useMemo(() => {
    const temp: Array<{ vector: THREE.Vector3; word: string }> = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        const index = j + (i - 1) * count;
        temp.push({
          vector: new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          word: wordsList[index],
        });
      }

    const remainingStartIndex = wordsList.length - count;
    const remainingWordList = [...wordsList].splice(
      remainingStartIndex,
      wordsList.length
    );
    // console.log("remainingWordList", remainingWordList);

    const phiSpanR = Math.PI / (remainingWordList.length + 1);
    const thetaSpanR = (Math.PI * 2) / remainingWordList.length;
    for (let i = 1; i < remainingWordList.length + 1; i++)
      for (let j = 0; j < remainingWordList.length; j++) {
        const index = j + (i - 1) * remainingWordList.length;
        // console.log("index", index);
        temp.push({
          vector: new THREE.Vector3().setFromSpherical(
            spherical.set(radius * 0.6, phiSpanR * 1 * 2.25, thetaSpanR * j)
          ),
          word: remainingWordList[index],
        });
      }

    return temp;
  }, [count, radius, wordsList]);

  // console.log("words", words.length);
  return (
    <>
      {words.map((item, index) => (
        <Word key={index} position={item.vector} children={[item.word]} />
      ))}
    </>
  );
}

interface ZoomProps {
  zoomLevel: number;
}
function Zoom(props: ZoomProps) {
  return useFrame((state) => {
    const zoomLevel = THREE.MathUtils.lerp(
      state.camera.zoom,
      props.zoomLevel,
      0.025
    );

    state.camera.zoom = zoomLevel;
    state.camera.updateProjectionMatrix();
  });
}

function TagCloud() {
  const cameraRef = useRef<PerspectiveCameraProps>();

  const ref = useRef<HTMLDivElement>(null);
  const cavasRef = useRef<HTMLCanvasElement>(null);

  const dimensions = useContainerDimensions(ref);
  // console.log("dimensions", dimensions.width);

  const screenDimensions = useScreenDimensions();
  // console.log("screenDimensions", screenDimensions.width);

  const minWidthThreshhold = 300;
  const maxWidthThreshold = 550;
  let zoomLevel = lerp(
    0.7,
    1,
    clamp(
      (dimensions.width - minWidthThreshhold) /
        (maxWidthThreshold - minWidthThreshhold),
      0,
      1
    )
  );

  return (
    <div ref={ref}>
      <Canvas
        style={{
          height: "400px",
          pointerEvents: screenDimensions.width < 600 ? "none" : undefined,
        }}
        dpr={[1, 2]}
        ref={cavasRef}
      >
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault={true}
          position={[0, 0, 20 * 1.46]}
          fov={90}
        />
        <fog attach="fog" args={["#202025", 0, 100]} />
        <Cloud wordsList={skills} radius={20} />
        {/* <TrackballControls /> */}
        <OrbitControls
          makeDefault={true}
          autoRotate={true}
          autoRotateSpeed={5}
          // minZoom={1.33}
          // minPolarAngle={Math.PI / 2}
          // maxPolarAngle={Math.PI / 2}
          maxDistance={32}
          enableZoom={false}
        />
        <Zoom zoomLevel={zoomLevel} />
      </Canvas>
    </div>
  );
}

export default TagCloud;
