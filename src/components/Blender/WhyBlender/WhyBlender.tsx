import styles from "./WhyBlender.module.scss";

export const WhyBlender = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className="subtitle">ПОЧЕМУ ИМЕННО <span className="highlighted">BLENDER?</span></h2>
            <div className={styles.wrapper}>
                <div>Blender - очень мощная программа, закрывающая практически все мыслимые и немыслимые задачи в 3D-моделировании.</div>
                <div>Его функционал обновляется постоянно, а значит всегда можно изучить что-то новое.</div>
                <div>Его не запретят/не забанят/не отменят ни в одной стране мира. Это попросту невозможно</div>
                <div>Не нужно скачивать никаких дополнительных программ для рендера, как в других аналогах. </div>
                <div>Blender можно использовать бесплатно. Никаких лишних трат.</div>
                <div>Комьюнити BLENDER очень открытое. На YOUTUBE и прочих ресурсах куча обучающих видео, которые можно изучать после прохождения нашего курса.</div>
            </div>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/QRqY_20ti9A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </section>
  )
}
