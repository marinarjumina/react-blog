import { find, entries, toNumber, map, size, uniq, values, flatten, includes, defaultTo } from "lodash";
import moment from "moment";

export const getPostById = (posts, postId) => {
  return find(posts, { id: toNumber(postId) });
};

export const isPostRead = (stats, postId) => {
  return defaultTo(includes(flatten(values(stats)), postId), false);
};

export const getDailyStats = (stats) => {
  const today = moment().format("YYYY-MM-DD");
  return stats[today] ? stats[today].length : 0;
};

export const getWeeklyStats = (stats) => {
  const weekStart = moment().startOf("isoWeek");
  const weekEnd = moment().endOf("isoWeek");

  const pickDailyStats = ([recordKey, dailyStats]) => {
    if (moment(recordKey).isBetween(weekStart, weekEnd)) {
      return dailyStats;
    }
  };

  return defaultTo(size(flatten(map(entries(stats), pickDailyStats))), 0);
};

export const updateStats = (stats, postId) => {
  const today = moment().format("YYYY-MM-DD");

  return {
    ...stats,
    [today]: !stats[today] ? [postId] : uniq([...stats[today], postId]),
  };
};
