import React from "react"
import Button from '../Button'
import Form from '../Form'
import ModalBase from './ModalBase'


export default function AdditionModal({ onCloseRequest }) {
  return ModalBase({
    modalName: 'addition',
    content: <>
      <button className="modal-close" onClick={onCloseRequest}>✕</button>
        <h2 className="modal-title">Add movie</h2>
        <Form type="title" />
        <Form type="date" />
        <Form type="url" />
        <Form type="genre" />
        <Form type="overview" />
        <Form type="runtime" />
        <Button type="modal" style="filled" onClick={onCloseRequest}>Save</Button>
        <Button type="modal" style="outlined" onClick={onCloseRequest}>Reset</Button>
    </>,
    onCloseRequest: onCloseRequest
  })
}