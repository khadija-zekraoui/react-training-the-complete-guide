export default function App() {
  const bookmarkHandler = () => {
    console.log("Stored!");
  };
  return <button onClick={bookmarkHandler}>Bookmark</button>;
}
