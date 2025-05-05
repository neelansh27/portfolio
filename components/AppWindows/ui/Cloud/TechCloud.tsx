"use client";
import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';

export interface TechStackCloudProps {
    radius?: number;
    width?: number;
    height?: number;
    rotationSpeed?: { x: number; y: number };
}

export default function TechStackCloud({
                                           radius = 50,
                                           width = 400,
                                           height = 400,
                                           rotationSpeed = {x: 0.001, y: 0.002},
                                       }: TechStackCloudProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const logos: string[] = [
            '/languages/cpp.png',
            '/languages/go.png',
            '/languages/docker.png',
            '/languages/python.png',
            '/languages/javascript.svg',
            '/languages/html.png',
            '/languages/css.png',
            '/languages/linux.png',
            '/languages/node.png',
            '/languages/react.png',
            '/languages/express.png',
            '/languages/tailwind.png',
            '/languages/c.png',
            '/languages/java.png'
        ]

        if (!canvasRef.current) return;
        // const width = canvasRef.current.width;
        // const height = canvasRef.current.height;

        // Set up scene & camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        camera.position.z = radius * 2;

        // Renderer binds to existing <canvas>
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        // renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // renderer.toneMappingExposure = 20;
        renderer.setSize(width, height);

        // Sprite group
        const group = new THREE.Group();
        scene.add(group);
        const loader = new THREE.TextureLoader();
        const count = logos.length;

        logos.forEach((src, i) => {
            loader.load(src, (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace;
                // texture.generateMipmaps = false;
                // texture.minFilter = THREE.LinearFilter;
                // texture.magFilter = THREE.LinearFilter;
                const material = new THREE.SpriteMaterial({map: texture, transparent: true});
                const sprite = new THREE.Sprite(material);

                // spherical distribution
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;

                sprite.position.set(
                    radius * Math.cos(theta) * Math.sin(phi),
                    radius * Math.sin(theta) * Math.sin(phi),
                    radius * Math.cos(phi)
                );
                sprite.scale.set(32, 32, 1);
                group.add(sprite);
            });
        });

        // Animate
        let reqId: number;
        const animate = () => {
            group.rotation.x += rotationSpeed.x;
            group.rotation.y += rotationSpeed.y;
            renderer.render(scene, camera);
            reqId = requestAnimationFrame(animate);
        };
        animate();
        // Cleanup
        return () => {
            cancelAnimationFrame(reqId);
            renderer.dispose();
            group.clear();
        };
    }, [width, height, radius, rotationSpeed]);

    return (
        <canvas
            ref={canvasRef}
            style={{display: 'block', width: '100%', height: '100%'}}
        />
    );
};
