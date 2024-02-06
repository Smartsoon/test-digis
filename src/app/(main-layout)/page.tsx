import styles from "./page.module.css";
import {ItemList} from "@widgets/ItemList";

export default function Home() {
  return (
    <main className={styles.main}>
      <ItemList/>
    </main>
  );
}
