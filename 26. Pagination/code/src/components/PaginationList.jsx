import React, { useEffect, useState } from 'react'
import PaginationControler from './PaginationControler'

function PaginationList() {
    const [items, setItems]=useState([])
    const [currentPage ,setCurrentPage]=useState(1)
    const [itemPerPage]=useState(5)
    const [totalItem ,setTotalItem]=useState(0)
    const [loading ,setLoading]=useState(false)

    async function fetchItem(){
        try {

            setLoading(true)
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setItems(data)
            setTotalItem(data.length)
            setLoading(false)
            // console.log(data)

        } catch (error) {
            console.log("Error", error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchItem()
    },[])

    const lastIndex = currentPage*itemPerPage
    const firstIndex =lastIndex - itemPerPage
    const currentItems= items.slice(firstIndex , lastIndex)

  return (
    <div className='paginated-list'>
       {
        loading?(<p>loading...</p>):(
            <>
            <ul>
                {
                    currentItems.map((itm)=>(
                        <li key={itm.id}>
                            <h3>{itm.title}</h3>
                            <p>{itm.body
                                }</p>
                        </li>
                    ))

                }

            </ul>
            </>
        )
       }
       <PaginationControler
       currentPage={currentPage}
       itemPerPage={itemPerPage}
       totalItem ={totalItem}
       onPageChange={setCurrentPage}
       />
    </div>
  )
}

export default PaginationList