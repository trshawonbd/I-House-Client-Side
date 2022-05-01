import React from 'react';
import './Features.css';
import collection from '../../img/features/collection.png';
import feed from '../../img/features/feed.png';
import threeD from '../../img/features/3d.png';
import deals from '../../img/features/deal.png';
import watch from '../../img/features/watch.png';
import pages from '../../img/features/pages.png';



const Features = () => {
    return (
        <div className='container font'>
            <h2 className='my-4'>See all Our Features</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 d-flex justify-content-center align-items-center  feature-img">
                        <img src={feed} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">My Feed
                            </h5>

                            <p className="card-text">Create your custom product feed</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 d-flex justify-content-center align-items-center  feature-img">
                        <img src={threeD} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">AR/VR/3D</h5>

                            <p className="card-text">Discover our products in VR, AR, and 3D</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 d-flex justify-content-center align-items-center  feature-img">
                        <img src={deals} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">Exlusive Deals</h5>

                            <p className="card-text">New Discounts and deals, daily</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 d-flex justify-content-center align-items-center  feature-img">
                        <img src={watch} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">Watch</h5>

                            <p className="card-text">Find new products through video</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 d-flex justify-content-center align-items-center  feature-img">
                        <img src={pages} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">Brand Pages</h5>

                            <p className="card-text">Follow your favorite brands</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 d-flex justify-content-center align-items-center  feature-img">
                        <img src={collection} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">Collections</h5>

                            <p className="card-text">Create public or private collections</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;