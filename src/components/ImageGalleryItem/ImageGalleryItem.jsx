import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem =({link, name, id, openModal}) =>{
	return(
		<li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={link} alt={name} key ={id} onClick ={()=>openModal({id, name})}/>
    </li>
	)
}