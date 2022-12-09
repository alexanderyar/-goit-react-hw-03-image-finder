import React from "react";
import { ListItem, ListItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ data, onImageClick }) => {
    return (
        
        // getting array of pictures, creating collection
        data.map((singleImageInfo) => {
         
            const { id, webformatURL, tags, largeImageURL } = singleImageInfo;
            // console.log(id, webformatURL, tags);
            return (
            <ListItem key={id} onClick={() => onImageClick(largeImageURL)}>
                <ListItemImage src={webformatURL} alt={tags} width="480" />
            </ListItem> )
       
        })
    )
}