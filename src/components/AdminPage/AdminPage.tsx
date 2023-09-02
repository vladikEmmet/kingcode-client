import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import styles from "./AdminPage.module.scss";

export const AdminPage = async() => {
    const session = await getServerSession();

    if(!session?.user) return null;
      
    return (
      <section className={styles.container}>
          <Link href="/admin/about-us">
              <Button variant={ButtonVariantsEnum.orange} className={styles.btn}>О НАС</Button>
          </Link>
          <Link href="/admin/prices">
              <Button variant={ButtonVariantsEnum.orange} className={styles.btn}>ЦЕНЫ</Button>
          </Link>
          <Link href="/admin/reviews">
              <Button variant={ButtonVariantsEnum.orange} className={styles.btn}>ОТЗЫВЫ</Button>
          </Link>
      </section>
    )
}
