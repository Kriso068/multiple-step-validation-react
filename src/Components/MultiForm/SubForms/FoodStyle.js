import React, {useRef} from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

    const preventFunc = e => {

        //permet de ne pas actualiser
        e.preventDefault();

        //on defini styleData à un tableau vide
        const styleData = {
            foodStyle: [],
        }

        //pour chaque checkbox qui sont checked
        allCheckBoxes.current.forEach(checkBox => {

            //si elles sont checked alors je push dans mon tableau foodtyle la valeur
            if (checkBox.checked) {
                styleData.foodStyle.push(checkBox.value)
            }
        })

        props.modifyIndex(4, styleData)

    }

    const allCheckBoxes = useRef([])

    const addCheck = el => {

        //si el est true et que il n'est pas déjà présent dans le tableau alors
        if(el && !allCheckBoxes.current.includes(el)) {

            //alors on push le current checkbox dans le tableau 
            allCheckBoxes.current.push(el);
        }
    }

    //nous renvois à la page précédente
    const handleReturn = () => {

        props.modifyIndex(2);
    }

  return (
    <form
        onSubmit={preventFunc}
        className='check-form'>

            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multipes.</span>

            <label htmlFor='italian'>Italienne</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='italian'
                value='italian'
                />

            <label htmlFor='japanese'>Japonaise</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='japanese'
                value='japanese'
                />

            <label htmlFor='french'>Française</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='french'
                value='french'
                />

            <label htmlFor='indian'>Indienne</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='indian'
                value='indian'
                />

            <label htmlFor='thai'>Thaïlandaise</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='thai'
                value='thai'
                />

            <label htmlFor='chinese'>Chinoise</label>
            <input
                ref={addCheck}
                type='checkbox'
                id='chinese'
                value='chinese'
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
