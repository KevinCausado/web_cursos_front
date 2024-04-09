// import Image from "next/image";
// import styles from "./page.module.css";


export async function getStaticsProps() {
  const data = await fetch("http://localhost:4000/courses");
  const courses = await data().json;
  

  return {
    props: { courses },
  };
}

export default function Home( {courses}) {
  return (
    <div className="{styles.container}">
      <h1>Mi web de cursos</h1>
      <div>
      {courses ? courses.map((course) => <p key={course.id}>{course.name}</p>) : "null"}
      </div>
    </div>
  );
}
