import React from "react";

const SearchStock = ({searchResults, updateFunction}) => {
    const [searchStocks, setSearchStocks] = useState("")

    const handleInput = ((event) =>{
        setSearchStocks(event.target.value)
        filterFunction(searchStocks)

    })


    return(
<>


</>


    )
}



export default SearchStock;