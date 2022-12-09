import React, { Component } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";

//creating var for portal for modal to avoid z-index troubles
const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

// adding listener on escape
    componentDidMount() {
        console.log('mount _______')
        window.addEventListener('keydown', this.handleKeyDown )
    }
// removing listenter on escape
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
// creating method so we can use it to add/remove listener (not anounymous function)
    handleKeyDown = e => {
            if (e.code === 'Escape') {
                console.log('escape triggered')
                this.props.onClose()
            }
    }
    
//close modal if clicked on modal backdrop
    handleBackdropClick = (e) => {
        console.log('click on backdrop')
        if (e.currentTarget === e.target) {
        this.props.onClose()
    }
}



    render() {
        console.log(this.props.data)
        return createPortal(<Overlay onClick={this.handleBackdropClick}>
            <ModalWindow>
                <img src={this.props.data} width="100%" />
            </ModalWindow>
        </Overlay>, modalRoot)
        
    }
}

