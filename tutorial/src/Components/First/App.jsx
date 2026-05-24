const el = (
  <div>
    <h1 className="greet">elements</h1>
    <input type="text" />
  </div>
);
const Header = () => {
  return <h1>My header</h1>;
};
const Button = () => {
  let login = "login";
  let isLogin = true;
  let logOut = "logOut";
  return <button>{isLogin ? login : logOut}</button>;
};
const HeaderFunction = () => {
  const getText = (text) => {
    return <h1>{text} of params</h1>;
  };
  return <div>{getText("super")}</div>;
};
const User = (props) => {
  console.log(props);
  return (
    <div>
      <h1>My name is {props.name}</h1> <a href={props.link} />
    </div>
  );
};
function App2() {
  return (
    <>
      <div>
        <h1>ReactJS Tutorial</h1>
        {el}
        <Header />
        <Button></Button>
        <HeaderFunction />
        <User name="anna" link="cdnj.com" />
      </div>
    </>
  );
}

export default App2;
