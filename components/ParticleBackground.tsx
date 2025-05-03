'use client';
import {useEffect, useState} from 'react';
import { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function ParticlesBackground() {
    const [init, setInit] = useState<boolean>(false);
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            //await loadAll(engine);
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        <>
        {init && <Particles
            id="stars"
            options={{
                background: {
                    color: {
                        value: "rbg(0 0 0 / 0)",
                    },
                },
                fpsLimit: 120,
                // interactivity: {
                //     events: {
                //         onClick: {
                //             enable: true,
                //             mode: "push",
                //         },
                //         onHover: {
                //             enable: true,
                //             mode: "repulse",
                //         },
                //     },
                //     modes: {
                //         push: {
                //             quantity: 4,
                //         },
                //         repulse: {
                //             distance: 200,
                //             duration: 0.4,
                //         },
                //     },
                // },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    shadow: {
                        color: "white",
                        blur: 10,
                        enable: true,
                        offset: { x:0, y:18 },
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {min: 1, max: 3},
                    },
                },
                detectRetina: true,
            }}
            />}
        </>
    )
}
