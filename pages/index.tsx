import Image from "next/image";
import styles from "../app/styles/home.module.css";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.home_div}>
        <h1>Carbon Footprint</h1>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Image
            src={"/Media/tree2.png"}
            title="Tree"
            alt="tree"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.home_img}
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </>
  );
}
