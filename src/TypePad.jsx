import "./TypePad.scss";
import { useState, useEffect } from "react";
import Cursor from "./components/Cursor.jsx";
import useTypings from "./hooks/useTypings.js";
import {
	Horse,
	ArrowCounterClockwise,
	Info,
} from "@phosphor-icons/react/dist/ssr";

const TEXT =
	"The subject of cookery having been very naturally introduced at a table where Johnson, who boasted of the niceness of his palate, owned that 'he always found a good dinner,' he said, 'I could write a better book of cookery than has ever yet been written; it should be a book upon philosophical principles.";

// import Queue from "./Queue.js";
// const que = new Queue(TEXT.length);

// for (let char of TEXT.split("")) {
// 	que.push({ char, ref: null });
// }

// que.print();

export default function (props) {
	const { text, reset } = useTypings({
		max_length: TEXT.length,
	});
	const [ percent, setPercent ] = useState(0);
	const [wpm, setWpm] = useState(0);

	useEffect(() => {
		if(!text) return;
		
		let correct = 0;
		for(let index in text){
			if(TEXT[index].toLowerCase() === text[index].toLowerCase()){
				correct++;
			}
		}
		setPercent(Math.round((correct / text.length) * 100));
	}, [text]);

	return (
		<div className="text-container">
			<div className="flex-row">
				<span>{wpm} wpm</span>
				<div className="central-aisle">
					<button className="logo-container" onClick={reset}>
						<ArrowCounterClockwise
							weight="regular"
							className="logo"
							size={24}
						/>
					</button>
					<button className="logo-container">
						<Horse weight="regular" className="logo" size={24} />
					</button>
					<button className="logo-container">
						<Info weight="regular" className="logo" size={24} />
					</button>
				</div>
				<span>{percent}% acc</span>
			</div>
			<div className="relative">
				<p>
					{TEXT.split("").map((char, index) => (
						<span key={index}>{char}</span>
					))}
				</p>
				<p className="absolute">
					{text.split("").map((char, index) => (
						<span
							className={
								TEXT[index].toLowerCase() === char.toLowerCase()
									? "correct"
									: "wrong"
							}
							key={index}
						>
							{TEXT[index]}
						</span>
					))}
					<Cursor />
				</p>
			</div>
		</div>
	);
}
