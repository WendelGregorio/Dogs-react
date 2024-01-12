import React from 'react'
import styles from './PhotoContent.module.css'
import PhotoComments from './PhotoComments'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import PhotoDelete from './PhotoDelete'
import Image from '../Helper/Image'

function PhotoContent({ data }) {
  const user = React.useContext(UserContext)
  const { photo, comments } = data

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
        <div className={styles.details}>
          <div>
            <p className={styles.author}>
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link to={`/perfil/${photo.author}`}>@{photo.autho}</Link>
              )}
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