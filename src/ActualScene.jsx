import { useGLTF } from "@react-three/drei";

const modelUrl = (file) => `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;

export const ActualScene = () => {
  const Floor = () => {
    const floor_material = useGLTF(modelUrl("models/floor_material.glb"));
    return <primitive object={floor_material.scene} scale={0.48} />;
  };
  useGLTF.preload(modelUrl("models/floor_material.glb"));

  const NpcMiddle = () => {
    const character_middle = useGLTF(modelUrl("models/character_middle.glb"));
    return <primitive object={character_middle.scene}></primitive>;
  };
  useGLTF.preload(modelUrl("models/character_middle.glb"));

  const NpcLeft = () => {
    const character_left = useGLTF(modelUrl("models/character_left.glb"));
    return <primitive object={character_left.scene}></primitive>;
  };
  useGLTF.preload(modelUrl("models/character_left.glb"));

  const NpcRight = () => {
    const character_right = useGLTF(modelUrl("models/character_right.glb"));
    return <primitive object={character_right.scene}></primitive>;
  };
  useGLTF.preload(modelUrl("models/character_right.glb"));

  const Table = () => {
    const table = useGLTF(modelUrl("models/table.glb"));
    return <primitive object={table.scene}></primitive>;
  };
  useGLTF.preload(modelUrl("models/table.glb"));

  return (
    <>
      <Floor />
      <Table />
      <NpcMiddle />
      <NpcLeft />
      <NpcRight />
    </>
  );
};
