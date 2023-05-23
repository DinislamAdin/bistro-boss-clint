import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import featuredImg from '../.././../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item backdrop-contrast-200 bg-black/30 bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            heading={'Featured'}
            subHading={"check it out"}
            ></SectionTitle>
            <div className='md:flex gap-10 justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>aug 20, 2020</p>
                    <p className='uppercase'>where i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quibusdam eos architecto dicta, voluptatem minus doloremque facilis, rem distinctio, quas harum odit! Temporibus facilis quae accusamus quaerat inventore consectetur harum.</p>
                    <button className='btn btn-outline text-white border-b-4 border-white border-x-0 border-t-0'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;