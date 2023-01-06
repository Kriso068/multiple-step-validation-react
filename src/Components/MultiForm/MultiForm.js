import React, {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';
import Allergies from './SubForms/Allergies';
import HateLove from './SubForms/HateLove';

export default function MultiForm() {


  //on fait commencer le premier formulaire à l'index 1
  const [formIndex, setFormIndex] = useState(1);

  //on creer tous les future formulaires
  const [allFormData, setAllFormData] = useState({

    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {}

  })

  const modifyIndex = (index, data) => {

    setFormIndex(index)

    if(data) {

      //recupère le tableau des formulaires allFormData
      const newData = {...allFormData}

      //on doit retrouver la première donnée
      //object.key renvoi un tableau pour chaque élément
      //donc [0] nous la donne
      const firstPropNewDate = Object.keys(data)[0];


      //la nouvelle valeur de la première donnée sera la valeur data récupéré sur le formulaire ou l'on passe formData
      newData[firstPropNewDate] = data[firstPropNewDate];

      setAllFormData(newData)

    }
  }

  const elements = [
    <CardBegin modifyIndex = {modifyIndex}/> ,
    <DietForm modifyIndex = {modifyIndex}/> ,
    <FoodStyle modifyIndex = {modifyIndex} />,
    <Allergies modifyIndex = {modifyIndex} />,
    <HateLove modifyIndex = {modifyIndex} />,
    <CardEnd modifyIndex = {modifyIndex}/>,
  ]

  console.log(allFormData);

  return (
    <div className='container-multiform'>
        <Indicator formIndex={formIndex}/>

        {elements.map((item, index) =>{

            if((index +1) === formIndex) {
              return elements[index]
            }
        })}


        {/* { 
            formIndex === 1 ? <CardBegin modifyIndex = {modifyIndex}/> 
          : formIndex === 2 ? <DietForm modifyIndex = {modifyIndex}/> 
          : formIndex === 3 ? <FoodStyle modifyIndex = {modifyIndex} />
          : formIndex === 4 ? <Allergies modifyIndex = {modifyIndex} />
          : formIndex === 5 ? <HateLove modifyIndex = {modifyIndex} />
          : formIndex === 6 ? <CardEnd modifyIndex = {modifyIndex} />
          : "" 
        } */}
        
    </div>
  )
}
