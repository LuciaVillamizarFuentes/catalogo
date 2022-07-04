import React from 'react';
import styles from '../styles.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from 'react-modal';
import ModalAddProduct from './ModalAddProduct';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: 'unset',
  },
};

export default function ButtonAddCar({ info }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className={styles.divButtonAddCar}>
        <button className={styles.ButtonAddCar} onClick={() => setOpen(true)}>
          <AddShoppingCartIcon className={styles.IconAddCard} />
          <p>Agregar</p>
        </button>
        <p className={styles.textCardPrice}>{info.price}</p>
      </div>

      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalAddProduct info={info} setOpen={setOpen} />
      </Modal>
    </div>
  );
}
