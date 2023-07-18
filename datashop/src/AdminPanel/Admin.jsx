import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'

export default function Admin() {

    const { category, product } = useContext(UserContext)

    const [categoryInfo , setCategoryInfo] = useState([])
    

    const nameRef = useRef()
    const iconRef = useRef()


    const requestPost = async () => {
        const body = {
            name: nameRef.current.value,
            // icon: selectedFile,
        }

        try {
            const responsee = await axios.post("http://localhost:9060/api/v1/category", body)
            return responsee.data
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className='Admin'>
            <div className="adminControl">

                <div className="categoryPosts">
                    <div className="categoryPost">
                        <h1>Category Post</h1>
                        <input type="text" ref={nameRef} />
                        {/* <input type="file" onChange={handleFileChange} /> */}
                        <button type="button" className="btn btn-primary" onClick={() => requestPost()}>Post</button>
                    </div>

                    <div className="categoryPostInfo">
                        {
                            category.map((app) => (
                                <div className="categoryInfoo">
                                    <p>{app.id}</p>
                                    <p>{app.name}</p>
                                    <input type="file"  />
                                    <button type="button" className="btn btn-primary">Post</button>
                                    <button type="button" class="btn btn-danger">Delate</button>
                                    <button type="button" class="btn btn-info">Update</button>
                                </div>
                            ))
                        }
                         

                    </div>
                </div>
                {/* <div className="categoryPost">
                    <h1>Category Post</h1>
                    <input type="text" />
                    <input type="text" />
                    <input type="file" />
                    <input type="file" />
                    <button type="button" className="btn btn-primary">Post</button>
                </div> */}
            </div>
        </div>
    )
}
