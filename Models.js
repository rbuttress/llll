import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/* Models.js delivers each geometry set */

async function loadModels() {
  const loader = new GLTFLoader();

  const [dinnerData] = await Promise.all([
    loader.loadAsync('/assets/models/Dinner.glb'),
  ]);

  function setupModel(data) {
    const model = data.scene.children[0];
  
    return model;
  }

  console.log('Machine Data', dinnerData);

  const dinner = setupModel(dinnerData);

  return {
    dinner
  };
}

export { loadModels };