import React from 'react';
import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/slide1.jpg'
const Recommends = () => {
    return (
        <section className='my-10'>
            <SectionTitle
                subHading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 w-9/12 mx-auto my-10'>
                <div className="card card-compact rounded-none h-96 w-64 bg-base-100 text-center shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">salads</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className='btn btn-outline text-yellow-500 border-b-4 border-yellow-500 border-x-0 border-t-0 hover:bg-black hover:text-yellow-500 hover:border-yellow-500'>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact rounded-none h-96 w-64 bg-base-100 text-center shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl text-center">salads</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className='btn btn-outline text-yellow-500 border-b-4 border-yellow-500 border-x-0 border-t-0 hover:bg-black hover:text-yellow-500 hover:border-yellow-500'>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact rounded-none h-96 w-64 bg-base-100 text-center shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl text-center">salads</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className='btn btn-outline text-yellow-500 border-b-4 border-yellow-500 border-x-0 border-t-0 hover:bg-black hover:text-yellow-500 hover:border-yellow-500'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;