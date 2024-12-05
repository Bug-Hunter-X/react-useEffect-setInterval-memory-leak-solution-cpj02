# React useEffect setInterval memory leak

This repository demonstrates a common React bug involving memory leaks due to improper cleanup of `setInterval` within the `useEffect` hook.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version. 

The bug occurs because the `setInterval` function is not stopped when the component unmounts. This results in the interval continuing to run indefinitely, even after the component is no longer visible or needed, leading to memory consumption and potential performance issues.  The solution demonstrates the correct approach to clearing the interval using the return value of `useEffect`.