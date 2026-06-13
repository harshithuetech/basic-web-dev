function StudentCard(props) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">
        Student Details
      </h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>City:</strong> {props.city}
      </p>
    </div>
  );
}

export default StudentCard;