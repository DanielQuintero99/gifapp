import { useState } from "react"

const AddCategory = ({newCategorie}) => {

    const [inputValue, setInputValue] = useState('')
    
    let onInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    let handleSubmit=(event)=>{
        event.preventDefault()
        inputValue.trim().length<=1? alert("mas de un caracter"):
        // setCategories(categories=>[inputValue,...categories])
        newCategorie(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    placeholder="Buscar Gifs"
    value={inputValue}
    onChange={(event)=>onInputChange(event)}
    />
    </form>
  )
}

export default AddCategory