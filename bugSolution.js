```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or updates
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```