import React, {useState} from 'react'
import './SubForm.css'

export default function HateLove(props) {

    //formDate aura un objet des préférences avec love et hate dedant
    const [formData, setFormData] = useState({
        prefs: {
            love: '',
            hate: '',
        }
    })

    const handleTextArea = (e, pref) => {

        //si pref est strictement égale à love alors
        if (pref === 'love') {
            
            //on va créer un nouvelle objet avec de nouvelles données
            setFormData({
                prefs: {
                    //on copie formData
                    ...formData.prefs,

                    //on recupère la value et on instancie love à la place de la chaine de characteristic vide du début
                    love: e.target.value
                }
            })
        
        }
        else if (pref === 'hate') {

            //on va créer un nouvelle objet avec de nouvelles données
            setFormData({
                prefs: {
                    //on copie formData
                    ...formData.prefs,

                    //on recupère la value et on instancie hate à la place de la chaine de characteristic vide du début
                    hate: e.target.value
                }
            })

        }
    }


    const preventFunc = e => {

         //permet de ne pas actualiser
        e.preventDefault();

    }

    //nous renvois à la page précédente
    const handleReturn = () => {

        props.modifyIndex(4);
    }


  return ( 
    <form 
        onSubmit={preventFunc}
        className='preferences-form'
      >

        <p>Parle-nous des aliments que tu aime et que tu déteste !</p>

        <label htmlFor='prefered'>Tes aliments préférés, séparés par une virgule :</label>
        <textarea
            onChange={e => handleTextArea(e, 'love')}
            id='prefered'
            placeholder='Un ou plusieurs, si tu en as'
        >

        </textarea>

        <label htmlFor='hated'>Les aliments que tu n'aimes pas, séparés par une virgule :</label>
        <textarea 
            onChange={e => handleTextArea(e, 'hate')}
            id='hated'
            placeholder='Un ou plusieurs, si tu en as'
        >
            
        </textarea>

        <div className='container-nav-btns'>
                <button 
                    onClick={handleReturn }
                    type='button' className='prev'>
                        Précédent
                </button>
                <button onClick={() => props.modifyIndex(6, formData)}>
                    Valider
                </button>
             </div>
      
    </form>
  )
}
