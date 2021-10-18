// É feita a desestruturação do useState para se trabalhar estados
import { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [value, setValue] = useState(0); // aqui, o estado vai começar em zero

    function Add () {
        setValue(value + 1);
    }
    
    function Remove () {
        setValue(value - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={ Add }
                >
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={ Remove }
                >
                    Remover
                </Button>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card;