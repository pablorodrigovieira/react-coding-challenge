import Link from "next/link";
import Image from "next/image";

interface Props {
  path: string;
  label: string;
  title?: string;
  className?: string;
  imgSrc: string;
  imgAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export default function Card(props: Props) {
  const { path, title, label, className = "", imgSrc, imgAlt, imageWidth, imageHeight } = props;
  /**
   *  When lazy, defer loading the image until it reaches a calculated distance from the viewport.
   *  When eager, load the image immediately.
   *  If the card image is the placeholder png we want it to load immediately.
   * */
  const imageLoading = imgSrc.includes("placeholder") ? "eager" : "lazy";
  return (
    <article className="card">
      <Link href={path}>
        <div className={`card__image ${className}`}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imageWidth}
            height={imageHeight}
            loading={imageLoading}
          />
          {title && <p className="card__title">{title}</p>}
        </div>
        <p className="card__label">{label}</p>
      </Link>
    </article>
  );
}
