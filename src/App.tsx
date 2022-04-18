import { useSomequeryQuery } from "./generated/graphql";

const App = () => {
  const { data, loading, error } = useSomequeryQuery();
  if (loading) return <p>..loading</p>;
  if (error) return <pre>{error.message} agagagg</pre>
  const link1 = `https://codeforces.com/blog/entry/${data?.gibBlogs.blog1}`;
  const link2 = `https://codeforces.com/blog/entry/${data?.gibBlogs.blog2}`;
  return <div>
    <a href={link1} target="_blank" rel="noopener noreferrer">ninni aa ra</a>
    <br />
    <a href={link2} target="_blank" rel="noopener noreferrer">sleep krne zara</a>
  </div>
}

export default App;
