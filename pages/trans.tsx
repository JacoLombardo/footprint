import NavBar from "@/app/components/NavBar";
import styles from "../app/styles/transportation.module.css";

export default function Transportation() {
  return (
    <>
      <div className={styles.trans_div}>
        <h1>Transportation</h1>
        <NavBar page="trans" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
}
