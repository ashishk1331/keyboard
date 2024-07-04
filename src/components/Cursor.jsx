import { motion } from "framer-motion";
import "./Cursor.scss";

export default function (props) {
	return (
		<motion.span
			className="cursor"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.6,
				repeat: Infinity,
				repeatType: "reverse",
			}}
		/>
	);
}
