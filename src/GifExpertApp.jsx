import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
   
    const onAddCategory=(add)=>{
        if (categories.includes(add)) return 
        
        setCategories([add,...categories])
    }
   

    
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory newCategorie={onAddCategory}/>
    {
        categories.map((category)=>{
            return <GifGrid key={category} category={category}/>
        })
    }
    </>
  )
}

export default GifExpertApp