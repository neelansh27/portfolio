'use client';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface ScrambledTextProps {
    text: string;
    frames?: number;
    delay?: number
}

interface CharacterState {
    oldChar: string;
    newChar: string;
    beginFrame: number;
    endFrame: number;
    currentChar: string | null;
}

const chars = '____!<>-_\\/[]{}—=+*^?OXVI#________';

function randomChar(): string {
    return chars[Math.floor(Math.random() * chars.length)];
}
// This is called to generate the initial state
// of the scrambling animation, and then it calls
// a helper function to start the animation
function scrambleText(
    oldText: string,
    newText: string,
    frames: number,
    setDisplayText: Dispatch<SetStateAction<string>>,
    cancelRef: { current: number | null }
): void {
    // Cancel any previous animation
    if (cancelRef.current !== null) {
        cancelAnimationFrame(cancelRef.current);
    }

    const maxLength = Math.max(oldText.length, newText.length);
    const characterStates: CharacterState[] = [];

    for (let i = 0; i < maxLength; i++) {
        const oldChar = oldText[i] || "";
        const newChar = newText[i] || "";
        const beginFrame = Math.floor(Math.random() * frames);
        const endFrame = beginFrame + Math.floor(Math.random() * frames);
        characterStates.push({ oldChar, newChar, beginFrame, endFrame, currentChar: null });
    }

    // Create the animation callback and start the animation
    const progressCallback = createProgressCallback(characterStates, 0, setDisplayText, cancelRef);
    cancelRef.current = requestAnimationFrame(progressCallback);
}

function createProgressCallback(
    states: CharacterState[],
    initialFrame: number,
    setDisplayText: Dispatch<SetStateAction<string>>,
    cancelRef: { current: number | null }
): () => void {
    let frame = initialFrame;

    const update = () => {
        let output = "";
        let completedCount = 0;

        for (let i = 0; i < states.length; i++) {
            const { oldChar, newChar, beginFrame, endFrame, currentChar } = states[i];

            if (frame >= endFrame) {
                output += newChar;
                completedCount++;
            } else if (frame < beginFrame) {
                // character will remain same until its beginFrame
                // is encountered and the else part runs
                output += oldChar;
            } else {
                // use random char if character is falsy or
                // 30% chance of using random char
                if (!currentChar || Math.random() < 0.3) {
                    states[i].currentChar = randomChar();
                }
                output += states[i].currentChar;
            }
        }

        setDisplayText(output);
        frame++;

        if (completedCount < states.length) {
            cancelRef.current = requestAnimationFrame(update);
        }
    };

    return update;
}

export default function ScrambledText({ text, frames = 80 }: ScrambledTextProps) {
    const [displayText, setDisplayText] = useState("");
    // Use a ref to store the animation frame ID
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        scrambleText("", text, frames, setDisplayText, animationFrameRef);
    }, [text, frames]);

    return <span className="text-lg font-bold">{displayText}</span>;
}