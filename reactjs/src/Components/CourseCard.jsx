function CourseCard(props) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">
        Course Details
      </h2>

      <p>
        <strong>Course:</strong> {props.courseName}
      </p>

      <p>
        <strong>Duration:</strong> {props.duration}
      </p>
    </div>
  );
}

export default CourseCard;