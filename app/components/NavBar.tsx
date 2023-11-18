import Image from "next/image";
import styles from "../styles/components.module.css";

interface Props {
  page: string;
}

export default function NavBar({ page }: Props) {
  return (
    <>
      <div className={styles.navbar_div}></div>
      {page === "trans" && (
        <div className={styles.navbar_transportation}>
          <div>
            <div className={styles.navbar_q_div1}>
              <Image
                src={"/Media/quarter1.png"}
                alt="quarter1"
                width={75}
                height={75}
                sizes="100vw"
                className={styles.navbar_quarter1}
              />
              <Image
                src={"/Media/car3.png"}
                alt="car"
                width={70}
                height={70}
                sizes="100vw"
                className={styles.navbar_quarter1_icon}
              />
            </div>
            <div className={styles.navbar_q_div2}>
              <Image
                src={"/Media/quarter2.png"}
                alt="quarter2"
                width={75}
                height={75}
                sizes="100vw"
                className={styles.navbar_quarter2}
              />
              <Image
                src={"/Media/airplane.png"}
                alt="airplane"
                width={40}
                height={40}
                sizes="100vw"
                className={styles.navbar_quarter2_icon}
              />
            </div>
            <div className={styles.navbar_q_div3}>
              <Image
                src={"/Media/quarter3.png"}
                alt="quarter3"
                width={75}
                height={75}
                sizes="100vw"
                className={styles.navbar_quarter3}
              />
              <Image
                src={"/Media/bus.png"}
                alt="bus"
                width={60}
                height={60}
                sizes="100vw"
                className={styles.navbar_quarter3_icon}
              />
            </div>
            <div className={styles.navbar_q_div4}>
              <Image
                src={"/Media/quarter4.png"}
                alt="quarter4"
                width={75}
                height={75}
                sizes="100vw"
                className={styles.navbar_quarter4}
              />
              <Image
                src={"/Media/boat.png"}
                alt="boat"
                width={60}
                height={60}
                sizes="100vw"
                className={styles.navbar_quarter4_icon}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
