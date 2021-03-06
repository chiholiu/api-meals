import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getRandomMeal } from "../../actions/index";

export const RandomMeals = () => {
	const dispatch = useDispatch();

	const getRandomMeals = () => {
		axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((res) => {
				dispatch(getRandomMeal(res.data.meals));
			}).catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<button className="button-background-color button-default button-random" aria-label="random-meals-button" onClick={() => getRandomMeals()}>Get Random</button>
		</div>
	);
};
