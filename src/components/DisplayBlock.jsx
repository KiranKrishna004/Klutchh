/** @format */
import Acronym from "./Acronym";

const DisplayBlock = ({ data }) => {
	return (
		<div className='border border-2 m-5 py-7 rounded-xl relative flex flex-col justify-center items-center'>
			<div className='inline-block align-baseline flex space-x-2 justify-center '>
				<p className='xs:text-sm sm:text-lg'>{data.team1}</p>
				<p>vs</p>
				<p className='xs:text-sm sm:text-lg'>{data.team2}</p>
			</div>
			<div className='mb-2 w-full xs:text-center sm:flex justify-evenly text-xs font-light'>
				<p>
					{data.venue}, {data.city}
				</p>
				<p>
					Umpires: {data.umpire1} {data.umpire2} {data.umpire3}
				</p>
			</div>
			<p>
				{Acronym(data.toss_winner)} won the toss and chose to{" "}
				{data.toss_decision}
			</p>
			<p>MoM: {data.player_of_match}</p>
			{data.win_by_wickets === "0" ? (
				<p>
					{Acronym(data.winner)} won by {data.win_by_runs} runs
				</p>
			) : (
				<p>
					{Acronym(data.winner)} won by {data.win_by_wickets} wickets
				</p>
			)}
		</div>
	);
};
export default DisplayBlock;
