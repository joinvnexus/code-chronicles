// Three.js configuration for ebook model
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('ebook-3d-container');
  if (!container) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 1, 1);
  scene.add(directionalLight);

  // Ebook model (simplified cube for example)
  const geometry = new THREE.BoxGeometry(2, 3, 0.2);
  const materials = [
    new THREE.MeshPhongMaterial({ color: 0x6e45e2 }), // spine
    new THREE.MeshPhongMaterial({ color: 0x88d3ce }), // front cover
    new THREE.MeshPhongMaterial({ color: 0xffffff }), // pages
    new THREE.MeshPhongMaterial({ color: 0xffffff }), // back cover
    new THREE.MeshPhongMaterial({ color: 0x6e45e2 }), // top
    new THREE.MeshPhongMaterial({ color: 0x6e45e2 })  // bottom
  ];
  
  const ebook = new THREE.Mesh(geometry, materials);
  scene.add(ebook);
  camera.position.z = 5;

  // Scroll-controlled rotation
  ScrollTrigger.create({
    trigger: "#ebook-3d-container",
    start: "top center",
    end: "bottom center",
    onUpdate: (self) => {
      ebook.rotation.y = self.progress * Math.PI * 2;
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});