import Link from "next/link"
import styles from "./list.module.css"

function List({ list, target }) {
	return (
		<ul className={styles.list}>
			{list.map((item, i) =>
				<li className={styles.itemWrapper} key={i}>
					<Link href={item.url}>
						<a className={styles.item} target={target || undefined}>
							{item.text}
						</a>
					</Link>
				</li>)}
		</ul>
	)
}

export default List