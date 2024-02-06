import styles from "./page.module.css";
import {AddItemForm} from "@widgets/AddItemForm";

export default function Add() {
  return (
    <main className={styles.main}>
      <AddItemForm/>
    </main>
  );
}
