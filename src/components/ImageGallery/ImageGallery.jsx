
import React from "react";
import { Component } from "react";
import { GalleryList } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

import PropTypes from 'prop-types'


// list of images
export class ImageGallery extends Component  {

    state = {
        // images: [],
        
    }

//    async componentDidUpdate(prevProps, prevState) {
//        if (prevProps.searchString !== this.props.searchString) {
//             // test if searchString check is working
//             // console.log('asdasdasdasdasdadasdasadasd')
           
//            //fetch using API func searchImageByString
//         //    console.log(await fetchImagesByString(this.props.searchString))
           
//            // fetching images for gallery
//            const response = await (fetchImagesByString(this.props.searchString, this.props.page))
//            console.log(await response.hits)
//            this.setState({images: response.hits})
//         }
//     }
   

    
    render() {
    return (
        
        // creating list with images (single item is rendered in ImageGalleryItem)
        <GalleryList>
        <ImageGalleryItem data={this.props.images} onImageClick={this.props.onImageClick} />
        </GalleryList> )
    }
}


//added prop-types
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            tags: PropTypes.string,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        })),
     onImageClick: PropTypes.func
}