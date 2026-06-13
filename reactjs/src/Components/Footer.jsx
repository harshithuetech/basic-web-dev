function Footer(props) {
  return (
    <div className="bg-gray-800 text-white text-center p-4 rounded-lg mt-6">
      <p>
        © 2026 {props.company}
      </p>
    </div>
  );
}

export default Footer;