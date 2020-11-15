import React from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import logo from "../../images/logo.svg";
import { getDailyStats, getWeeklyStats } from "../../utils";

const Header = () => {
  const [stats] = useLocalStorageState("stats");
  const dailyStats = getDailyStats(stats);
  const weeklyStats = getWeeklyStats(stats);

  return (
    <div className="h-20 flex justify-between items-center border-b border-gray-200 my-4 mx-6">
      <div className="flex items-center">
        <img src={logo} className="h-16 w-16" alt="logo" />
        <h1 className="text-2xl font-semibold text-gray-600">React blog</h1>
      </div>
      <div className="flex flex-col items-end pb-3">
        <h5 className="text-sm font-semibold text-gray-600 pb-1">Posts read:</h5>
        <div className="flex flex-col items-end pr-1">
          <p className="text-xs font-semibold text-gray-500">{dailyStats} daily</p>
          <p className="text-xs font-semibold text-gray-500">{weeklyStats} weekly</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
