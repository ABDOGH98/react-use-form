import { useForm } from "react-hook-form";
import "./App.css";
import React from "react";
const data = [
	{
		firstname: "abdo",
		lastname: "gh",
		male: true,
	},
	{
		firstname: "zozo",
		lastname: "zozo",
		male: false,
	},
	{
		firstname: "toto",
		lastname: "toto",
		male: true,
	},
];

function App() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: {
			firstname: "",
			lastname: "",
			male: false,
		},
	});

	const onSubmit = () => {
		console.log(watch());
	};

	return (
		<div>
			hello
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="">First Name :</label>
				<input
					type="text"
					placeholder="first name"
					{...register("firstname", {
						required: "This champ is required",
						minLength: { value: 5, message: "min length is 5" },
						onBlur: () => console.log("I am out"),
					})}
				/>
				<p>{errors && <span>this is required input</span>} </p>
				<br />
				<label htmlFor="">Last Name :</label>
				<input type="text" placeholder="last name" {...register("lastname")} />
				<br />
				<label htmlFor="">Male :</label>
				<input type="checkbox" {...register("male")} />
				<br />
				<input type="submit" value="Done!" disabled={!isValid} />
				<button
					disabled={!isDirty}
					onClick={() =>
						reset({
							firstname: "I can overrid default value for one attr",
						})
					}
				>
					Reset!
				</button>
			</form>
		</div>
	);
}

export default App;
