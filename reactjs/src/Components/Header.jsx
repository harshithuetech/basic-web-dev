function Header(props) {
    console.log(props)
  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg">
      <h1 className="text-3xl font-bold">
        {props.title}
      </h1>
    </div>
  );
}

export default Header;