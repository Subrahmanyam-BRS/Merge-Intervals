
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function merge(intervals) {
  if (!intervals || intervals.length === 0) return [];

  intervals.sort((a, b) => a.start - b.start);

  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let lastMerged = merged[merged.length - 1];

    if (current.start <= lastMerged.end) {
      lastMerged.end = Math.max(current.end, lastMerged.end);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

function mergeIntervals() {
  let intervalInput = document.getElementById("intervalInput").value.trim();
  let intervals = JSON.parse("[" + intervalInput + "]");

  let intervalObjects = [];
  intervals.forEach(interval => {
    let [start, end] = interval;
    intervalObjects.push(new Interval(start, end));
  });

  let mergedIntervals = merge(intervalObjects);

  let result = mergedIntervals.map(interval => `[${interval.start},${interval.end}]`).join(",");
  document.getElementById("result").innerText = result;
}

 console.log(result);