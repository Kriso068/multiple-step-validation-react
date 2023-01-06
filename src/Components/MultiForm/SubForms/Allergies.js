import React, {useRef} from 'react'
import './SubForm.css'

export default function Allergies(props) {

    const preventFunc = e => {

        //permet de ne pas actualiser
        e.preventDefault();

        //on défini styleData à un tableau vide
        const styleData = {
            allergies: [],
        }

        //pour chaque checkbox qui sont checked
        allCheckBoxes.current.forEach(checkBox => {

            //si elles sont checked alors je push dans mon tableau foodtyle la valeur
            if (checkBox.checked) {
                styleData.allergies.push(checkBox.value)
            }
        })

        props.modifyIndex(5, styleData)

    }

    const allCheckBoxes = useRef([])

    const addCheck = el => {

        //si el est true et que il n'est pas deja présent dans le tableau alors
        if(el && !allCheckBoxes.current.includes(el)) {

            //alors on push le current checkbox dans le tableau 
            allCheckBoxes.current.push(el);
        }
    }

    //nous renvois à la page précédente
    const handleReturn = () => {

        props.modifyIndex(3);
    }

  return (
    <form
        onSubmit={preventFunc}
        className='check-form'>

            <p>Avez vous des allergies ?</p>
            <span>Choix multipes.</span>

            <label htmlFor='milk'>Lait</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='milk'
                value='milk'
                />

            <label htmlFor='pollen'>Pollen</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='pollen'
                value='pollen'
                />

            <label htmlFor='nuts'>Noix</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='nuts'
                value='nuts'
                />

            <label htmlFor='eggs'>Œufs</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='eggs'
                value='eggs'
                />

            <label htmlFor='shellfish'>Fuits de mer</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='shellfish'
                value='shellfish'
                />


             <div className='container-nav-btns'>
                <button 
                    onClick={handleReturn }
                    type='button' className='prev'>
                        Précédent
                </button>
                <button>
                    Valider
                </button>
             </div>

    </form>
  )
}
