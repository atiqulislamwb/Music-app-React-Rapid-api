import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore.js";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const { data, error, isFetching } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  const dispatch = useDispatch();
  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-white font-bold text-3xl text-left ">
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            activeSong={activeSong}
            isPlaying={isPlaying}
            song={song}
            key={song?.key}
            i={i}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
