import React, { useState } from "react";

function Semaforo() {
	const [color, setColor] = useState("");
	return (
		<div className="Semaforo">
			<div className="colores">
				<button
					className={"rojo " + (color === "r" ? "on" : "")}
					onClick={() => setColor("r")}></button>
			</div>
			<div className="colores">
				<button
					className={"amarillo " + (color === "a" ? "on" : "")}
					onClick={() => setColor("a")}></button>
			</div>
			<div className="colores">
				<button
					className={"verde " + (color === "g" ? "on" : "")}
					onClick={() => setColor("g")}></button>
			</div>
		</div>
	);
}

export default Semaforo;
