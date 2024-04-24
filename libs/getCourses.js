export async function getCourses() {
  const res = await fetch("http://localhost:4000/api/getcourses", { cache: "no-store" });
  const { data: courses } = await res.json();
  return courses;
}
