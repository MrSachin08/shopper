import React from 'react'
import useCategory from '../hooks/useCategory'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'



const Categories = () => {
    const categories=useCategory();
  return (
    <Layout title={"All-categories"}>

    <div className='container'>
        <div className='row'>
            
            {categories.map((c)=>( 
                <div className='col-md-6 mt-5 mb-3 gx-3 gy-3 ' key={c._id}>
                    <Link to={`/category/${c.slug}`} className="btn btn-primary">{c.name}</Link>
                    <div>
                    <img
            src={`/api/v1/product/product-photo/${c._id}`}
            className="card-img-top"
            alt={c.name}
            height="300"
          />

                    </div>
        
                </div>))}

            </div>
        </div>


    </Layout>
  )
}

export default Categories