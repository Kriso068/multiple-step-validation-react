import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {


    //le dietForm de base est à no diet
    const [formData, setFormData] = useState({

        dietForm: 'nodiet',
    })

    //à chaque clique le dietForm prend la valeur de la value
    const handleRadio = e => {
        setFormData({
            dietForm: e.target.value
        })
    }

    const preventFunc = e => e.preventDefault()

   

  return (
    
    <form 
        onSubmit={preventFunc}
        className='diet-form'
      >

      <p>Quel est ton régime alimentaire ?</p>

      <label htmlFor='nodiet'>Pas de régime en particulier</label>
      <input 
        onChange={handleRadio}
        type='radio'
        name='diet'
        id='nodiet'
        value='nodiet'
        />

      <label htmlFor='homnivorous'>On mange de tout</label>
      <input 
        onChange={handleRadio}
        type='radio'
        name='diet'
        id='homnivorous'
        value='homnivorous'
        />

      <label htmlFor='vegetarian'>Végétarien</label>
      <input 
        onChange={handleRadio}
        type='radio'
        name='diet'
        id='vegetarian'
        value='vegetarian'
        />

      <label htmlFor='vegan'>Végan</label>
      <input 
        onChange={handleRadio}
        type='radio'
        name='diet'
        id='vegan'
        value='vegan'
        />

        <button onClick={() => props.modifyIndex(3, formData)}>
          Valider
        </button>

    </form>
  )
}
