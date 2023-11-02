import { React, Component } from 'react';
import nanoid from 'nanoid';

import Modal from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { Button } from './Button/Button';
import { getImages } from './getImages-api';
import {Notify} from 'notiflix';
import css from './App.module.css';

export class App extends Component {
  state = {
    images:null,
    isLoading:false,
    error:null,
    request:"",
    page: 1,
    totalHits:null,
    isOpenModal:false,
    imageData:null,
    }
    
    getImages = async (request, page) => {
    try {
      this.setState({isLoading:true})
      const data = await getImages(request, page);
      if(this.state.images === null) {
        this.setState({images:data.hits, totalHits:data.totalHits})
      } else{
        this.setState(prevState =>({images:[...prevState.images, ...data.hits]}))
      }
    } catch (error) {
      this.setState({error:error.message});
    }finally{
      this.setState({isLoading:false})
    }
  }

  componentDidUpdate(_, prevState) {
    if(prevState.request !== this.state.request) {
      this.getImages(this.state.request, this.state.page)
    }
    if(prevState.page!==this.state.page){
      this.getImages(this.state.request, this.state.page)
    }
  }

  handleSearchImages = request => {
    this.setState({page:1, images:null, request:request});
  }
    
  handleLoadMore =()=>{
    this.setState(prevState => ({page:prevState.page+1}));
  }

  openModal = imageData => {
    this.setState({
      isOpenModal: true,
      imageData:imageData,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      imageData:null,
    });
  };

  render() {
    const{isLoading, error, images, totalHits, isOpenModal, imageData} = this.state
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearchImages}/>
          {error&& Notify.failure(`Ooops something went wrong: ${error.message}`)}
          {isLoading&&<Loader/>}
          {images !== null && 
            <>
        <ImageGallery
              images = {images}
              openModal={this.openModal}
        />
            {totalHits>12&& <Button click={this.handleLoadMore}/>}
            </>
          }
          {isOpenModal&&(
            <Modal closeModal={this.closeModal} imageData={imageData} />)
          }
      </div>
    )
  }
}