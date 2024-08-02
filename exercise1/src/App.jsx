import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function App() {
  const course = "Half Stack Application development";
  
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};

	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};

	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />

			<Content
				part1={part1}
				part2={part2}
				part3={part3}
			/>

			<Total sum={part1.exercises + part2.exercises + part3.exercises} />
		</div>
	);
}

export default App;
