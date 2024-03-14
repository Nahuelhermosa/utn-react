import React from 'react';

export default function ProductsList({products}) {
    return (
      <section>
       
        {products && products.map(prod => <li>{prod.title}</li>)}
       
      </section>
    )
}