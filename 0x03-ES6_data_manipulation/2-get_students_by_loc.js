export default function getStudentsByLocation(students, city) {
  return students.filter((a) => a.location === city);
}
