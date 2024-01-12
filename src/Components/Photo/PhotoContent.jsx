import React from 'react'
import styles from './PhotoContent.module.css'
import PhotoComments from './PhotoComments'
import { Link } from 'react-router-dom'

function PhotoContent({ data }) {
  const { photo, comments } = data
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
        <div className={styles.details}>
          <div>
            <p className={styles.author}>
              <Link to={`/perfil/${photo.author}`}>@{photo.autho}</Link>
              <span className={styles.visualizacoes}>{photo.acessos}</span>
              <h1 className="title">
                <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
              </h1>
              <ul className={styles.attributes}>
                <li>{photo.peso} kg</li>
                <li>{photo.idade} anos</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent
