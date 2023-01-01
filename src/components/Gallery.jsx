import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-4'>
        <h2 className='text-center text-gray-700 p-4'>GALLERY</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src=" https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt ="/"/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/504985488/photo/bali-water-temple-pura-ulun-danu.jpg?b=1&s=170667a&w=0&k=20&c=a1QLL19Nzoj2T76EwI0zMHqEUrDoKT7NxZI7AOaWDMc=" alt ="/"/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4601366/pexels-photo-4601366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="/"/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt ="/"/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://c4.wallpaperflare.com/wallpaper/453/734/433/waikiki-beach-hawaii-building-structure-and-beach-wallpaper-preview.jpg" alt ="/"/>
            </div>

        </div>
    </div>
  )
}

export default Gallery