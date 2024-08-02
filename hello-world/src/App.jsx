import Heading from "./Heading";
import Button from "./Button";
import Navbar from "./Navbar";
import Mainsection from "./Mainsection";
import Footer from "./Footer";

import "./App.css";
import Name from "./Name";

function App() {
	let a = 5;
	let b = 10;

	// console.log(`The sum of the number is ${5 + 6}`);
	console.log(`The sum of ${a} and ${b} is ${a + b}`);
	// console.log(5 + 6);
	const now = new Date();
	console.log(now);
	return (
		<div>
			<Heading />
			{/* <Button /> */}
			<Name text="Reetika Paudel" />
			<p>
				The sum of {a} and {b} is {a + b}
			</p>
			<h2>The current date is {now.toString()} </h2>
			<Button text="Create New Account" />
			<Button text="Already Have an Account" />

			<Navbar />
			<Mainsection />
			<Footer />
		</div>
	);
}

export default App;
