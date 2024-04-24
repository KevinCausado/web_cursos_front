// import Image from "next/image";
// import styles from "./page.module.css";
"use client"

import {getCourses} from '@/libs/getCourses'
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default async function Home() {
  const courses = await getCourses();

  const handleShowAlert = () => {
    Swal.fire("Hola Kevin");
  };

  return (
    <div className="{styles.container}">
      <h1>Mi web de cursos</h1>
      {courses.map((course) => (
        <p key={course.id}>{course.name}</p>
      ))}
      <button onClick={handleShowAlert}>Mostrar alerta</button>
    </div>
  );

}


