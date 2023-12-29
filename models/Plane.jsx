import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'

const Plane = ({isRotating, ...props}) => {
    const {scene, animations}= useGLTF('/plane.glb')
    const ref = useRef();
    // Load the 3D model and its animations

    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, ref);
  
    // Use an effect to control the plane's animation based on 'isRotating'
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }, [actions, isRotating]);
  
    return (
      <mesh {...props} ref={ref}>
        
        <primitive object={scene} />
      </mesh>
    );
}

export default Plane;