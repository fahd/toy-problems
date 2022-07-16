function meetingRooms(intervals) {
  if (intervals.length <= 1) return true;
  intervals = intervals.sort((a, b) => a[0] < b[0] ? -1 : 1);

  let [prevStart, prevEnd] = intervals[i];

  for (let i = 0; i < intervals.length; i++){
    let [currStart, currEnd] = intervals[i];

    if (prevEnd < currStart) return false;
    [prevStart, prevEnd] = [currStart, currEnd];
  }
  return true;
}