import localFont from "next/font/local";
import styles from "./WhyBlender.module.scss";
import cn from 'clsx';

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});
const medium = localFont({src: "../../../assets/fonts/Montserrat-Medium.woff2"});

export const WhyBlender = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>ПОЧЕМУ ИМЕННО <span className="highlighted">BLENDER?</span></h2>
            <div className={styles.wrapper}>
                <div className={medium.className}>Blender - очень мощная программа, закрывающая практически все мыслимые и немыслимые задачи в 3D-моделировании.</div>
                <div className={medium.className}>Его функционал обновляется постоянно, а значит всегда можно изучить что-то новое.</div>
                <div className={medium.className}>Его не запретят/не забанят/не отменят ни в одной стране мира. Это попросту невозможно</div>
                <div className={medium.className}>Не нужно скачивать никаких дополнительных программ для рендера, как в других аналогах. </div>
                <div className={medium.className}>Blender можно использовать бесплатно. Никаких лишних трат.</div>
                <div className={medium.className}>Комьюнити BLENDER очень открытое. На YOUTUBE и прочих ресурсах куча обучающих видео, которые можно изучать после прохождения нашего курса.</div>
            </div>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/QRqY_20ti9A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </section>
  )
}
