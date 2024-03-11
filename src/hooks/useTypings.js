import { useState, useEffect, useRef } from "react";

function isSafe(code) {
	return (
		code.startsWith("Key") ||
		code.startsWith("Digit") ||
		code === "Backspace" ||
		code === "Space" ||
		code === "Comma" ||
		code === "Period" ||
		code === "Slash" ||
		code === "Semicolon" ||
		code === "Quote" ||
		code === "BracketLeft" ||
		code === "BracketRight" ||
		code === "Backslash" ||
		code === "Enter" ||
		code === "Equal" ||
		code === "Minus" ||
		code === "Backquote"
	);
}

export default function useTypings({ max_length }) {
	const [text, setText] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const totalTyped = useRef(0);

	const reset = () => {
		setText("");
		totalTyped.current = 0;
	};

	useEffect(() => {
		window.addEventListener("keydown", ({ key, code }) => {
			if (totalTyped.current < max_length && isSafe(code)) {
				if (code === "Backspace") {
					setText((prev) => prev.slice(0, -1));
					totalTyped.current -= 1;
				} else {
					setText((prev) => prev.concat(key));
					totalTyped.current += 1;
				}
			}
		});

		return () => {
			window.removeEventListener("keydown", () => {
				setIsTyping(false);
			});
		};
	}, []);

	return {
		text,
		totalTyped,
		reset,
	};
}
