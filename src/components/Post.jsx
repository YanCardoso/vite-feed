import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.authorIcon}
            src="https://github.com/yancardoso.png"
          />
          <div className={styles.authorInfo}>
            <strong>Yan Cardoso</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2022-05-11 00:46:37">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Salve galera!</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          aperiam assumenda neque suscipit possimus earum natus, quos labore
          autem. Non ipsam natus illum temporibus delectus optio repudiandae
          error, iusto deserunt.
        </p>

        <p>
          <a href="#">#vamo #pra #cima #clã</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
